import { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, XCircle, 
  Play, Trophy, RotateCcw, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { questionsData } from '@/data/questions';
import { challengesData } from '@/data/challenges';
import { Question, MCQQuestion, ShortQuestion, CodingQuestion } from '@/types';
import { toast } from '@/hooks/use-toast';

export default function QuestionScreen() {
  const { state, navigateTo, updateProgress } = useApp();
  const { selectedLanguage, selectedCategory, selectedLevel, currentUser } = state;
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const [codeOutput, setCodeOutput] = useState<string>('');

  // Get questions for this level
  const getQuestions = (): Question[] => {
    if (!selectedLanguage || !selectedCategory || !selectedLevel) return [];
    
    const mcqShort = questionsData[selectedLanguage]?.[selectedCategory]?.find(
      l => l.level === selectedLevel
    )?.questions || [];
    
    const coding = challengesData[selectedLanguage]?.[selectedCategory]?.[selectedLevel - 1] || [];
    
    return [...mcqShort, ...coding];
  };

  const questions = getQuestions();
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  useEffect(() => {
    // Load existing answers if any
    const existingAnswers = currentUser?.progress[selectedLanguage!]?.[selectedCategory!]?.[selectedLevel!]?.answers;
    if (existingAnswers) {
      setAnswers(existingAnswers);
    }
  }, []);

  if (!selectedLanguage || !selectedCategory || !selectedLevel || !currentQuestion) {
    navigateTo('levels');
    return null;
  }

  const handleMCQAnswer = (optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  const handleShortAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  const handleCodeAnswer = (code: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: code
    }));
  };

  const runCode = () => {
    const code = answers[currentQuestion.id] || '';
    const question = currentQuestion as CodingQuestion;
    
    try {
      // Simple JavaScript execution for demo
      if (selectedLanguage === 'javascript') {
        const result = eval(code);
        setCodeOutput(String(result));
      } else {
        // For Python/C++, simulate output
        setCodeOutput('Code execution simulated. Check expected output for validation.');
      }
      toast({
        title: 'Code executed',
        description: 'Check the output panel for results',
      });
    } catch (error: any) {
      setCodeOutput(`Error: ${error.message}`);
      toast({
        title: 'Execution error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const checkAnswer = (question: Question, answer: any): boolean => {
    switch (question.type) {
      case 'mcq':
        return answer === (question as MCQQuestion).correctAnswer;
      case 'short':
        const shortQ = question as ShortQuestion;
        const normalizedAnswer = String(answer).toLowerCase().trim();
        const correctAnswer = shortQ.correctAnswer.toLowerCase().trim();
        const acceptableAnswers = shortQ.acceptableAnswers?.map(a => a.toLowerCase().trim()) || [];
        return normalizedAnswer === correctAnswer || acceptableAnswers.includes(normalizedAnswer);
      case 'coding':
        // For coding, we just check if they attempted it
        return answer && answer.length > 10;
      default:
        return false;
    }
  };

  const submitAllAnswers = () => {
    const newResults: Record<string, boolean> = {};
    let correctCount = 0;

    questions.forEach(q => {
      const isCorrect = checkAnswer(q, answers[q.id]);
      newResults[q.id] = isCorrect;
      if (isCorrect) correctCount++;
    });

    setResults(newResults);
    setShowResults(true);

    const score = Math.round((correctCount / totalQuestions) * 100);
    const completed = score >= 60; // 60% to pass

    updateProgress(selectedLanguage, selectedCategory, selectedLevel, completed, score, answers);

    if (completed) {
      toast({
        title: '🎉 Level Complete!',
        description: `You scored ${score}%! Great job!`,
      });
    } else {
      toast({
        title: 'Keep trying!',
        description: `You scored ${score}%. Need 60% to pass.`,
        variant: 'destructive',
      });
    }
  };

  const renderMCQ = (question: MCQQuestion) => (
    <div className="space-y-3">
      {question.options.map((option, index) => {
        const isSelected = answers[question.id] === index;
        const isCorrect = showResults && index === question.correctAnswer;
        const isWrong = showResults && isSelected && !isCorrect;

        return (
          <button
            key={index}
            onClick={() => !showResults && handleMCQAnswer(index)}
            disabled={showResults}
            className={`
              w-full p-4 rounded-xl text-left transition-all flex items-center gap-3
              ${isSelected && !showResults ? 'bg-primary/20 border-primary' : 'bg-muted/30'}
              ${isCorrect ? 'bg-success/20 border-success' : ''}
              ${isWrong ? 'bg-destructive/20 border-destructive' : ''}
              border hover:bg-muted/50
            `}
          >
            <span className={`
              w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold
              ${isSelected && !showResults ? 'bg-primary text-primary-foreground' : 'bg-muted'}
              ${isCorrect ? 'bg-success text-success-foreground' : ''}
              ${isWrong ? 'bg-destructive text-destructive-foreground' : ''}
            `}>
              {String.fromCharCode(65 + index)}
            </span>
            <span className="flex-1">{option}</span>
            {showResults && isCorrect && <CheckCircle2 className="w-5 h-5 text-success" />}
            {showResults && isWrong && <XCircle className="w-5 h-5 text-destructive" />}
          </button>
        );
      })}
    </div>
  );

  const renderShort = (question: ShortQuestion) => (
    <div className="space-y-4">
      <Input
        value={answers[question.id] || ''}
        onChange={(e) => handleShortAnswer(e.target.value)}
        placeholder="Type your answer..."
        disabled={showResults}
        className="h-14 text-lg bg-muted/30"
      />
      {showResults && (
        <div className={`p-4 rounded-xl ${results[question.id] ? 'bg-success/20' : 'bg-destructive/20'}`}>
          <p className="text-sm font-medium">
            {results[question.id] ? '✓ Correct!' : `✗ Correct answer: ${question.correctAnswer}`}
          </p>
        </div>
      )}
    </div>
  );

  const renderCoding = (question: CodingQuestion) => (
    <div className="space-y-4">
      <Textarea
        value={answers[question.id] || question.starterCode}
        onChange={(e) => handleCodeAnswer(e.target.value)}
        placeholder="Write your code here..."
        disabled={showResults}
        className="code-editor min-h-[200px] font-mono text-sm"
      />
      
      <div className="flex gap-2">
        <Button onClick={runCode} variant="outline" className="flex-1">
          <Play className="w-4 h-4 mr-2" />
          Run Code
        </Button>
      </div>

      {/* Output panel */}
      <div className="output-panel">
        <p className="text-xs text-muted-foreground mb-2">Output:</p>
        <pre className="text-sm">{codeOutput || 'No output yet'}</pre>
      </div>

      {/* Test cases */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">Test Cases:</p>
        {question.testCases.map((tc, i) => (
          <div key={i} className="p-3 rounded-lg bg-muted/30 text-sm">
            <p><span className="text-muted-foreground">Input:</span> {tc.input || 'None'}</p>
            <p><span className="text-muted-foreground">Expected:</span> {tc.expectedOutput}</p>
            {tc.description && <p className="text-xs text-muted-foreground mt-1">{tc.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );

  const getProgressPercentage = () => {
    const answered = Object.keys(answers).length;
    return Math.round((answered / totalQuestions) * 100);
  };

  if (showResults) {
    const correctCount = Object.values(results).filter(Boolean).length;
    const score = Math.round((correctCount / totalQuestions) * 100);
    const passed = score >= 60;

    return (
      <div className="min-h-screen gradient-hero p-4 md:p-8 flex items-center justify-center">
        <div className="max-w-md w-full text-center animate-scale-in">
          <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${passed ? 'bg-success/20' : 'bg-destructive/20'}`}>
            {passed ? (
              <Trophy className="w-12 h-12 text-success" />
            ) : (
              <RotateCcw className="w-12 h-12 text-destructive" />
            )}
          </div>
          
          <h1 className="text-3xl font-bold mb-2">
            {passed ? 'Level Complete!' : 'Keep Practicing!'}
          </h1>
          <p className="text-muted-foreground mb-6">
            You got {correctCount} out of {totalQuestions} questions correct
          </p>

          <div className="text-5xl font-bold gradient-text mb-8">{score}%</div>

          <div className="space-y-3">
            <Button
              onClick={() => {
                setShowResults(false);
                setCurrentQuestionIndex(0);
                setAnswers({});
                setResults({});
              }}
              variant="outline"
              className="w-full h-12"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button
              onClick={() => navigateTo('levels')}
              className="w-full h-12 gradient-button"
            >
              Back to Levels
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 animate-slide-up">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigateTo('levels')}
            className="rounded-xl"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Level {selectedLevel}</p>
            <p className="font-semibold">Question {currentQuestionIndex + 1} of {totalQuestions}</p>
          </div>

          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Progress bar */}
        <div className="progress-bar h-2 mb-6">
          <div 
            className="progress-bar-fill transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Question type badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className={`
            px-3 py-1 rounded-full text-xs font-medium
            ${currentQuestion.type === 'mcq' ? 'bg-primary/20 text-primary' : ''}
            ${currentQuestion.type === 'short' ? 'bg-accent/20 text-accent' : ''}
            ${currentQuestion.type === 'coding' ? 'bg-secondary/20 text-secondary' : ''}
          `}>
            {currentQuestion.type === 'mcq' ? 'Multiple Choice' : ''}
            {currentQuestion.type === 'short' ? 'Short Answer' : ''}
            {currentQuestion.type === 'coding' ? 'Coding Challenge' : ''}
          </span>
        </div>

        {/* Question */}
        <div className="glass-effect rounded-2xl p-6 mb-6 animate-fade-in">
          <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>
          
          {currentQuestion.type === 'mcq' && renderMCQ(currentQuestion as MCQQuestion)}
          {currentQuestion.type === 'short' && renderShort(currentQuestion as ShortQuestion)}
          {currentQuestion.type === 'coding' && renderCoding(currentQuestion as CodingQuestion)}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestionIndex(i => Math.max(0, i - 1))}
            disabled={currentQuestionIndex === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>

          {currentQuestionIndex < totalQuestions - 1 ? (
            <Button
              onClick={() => setCurrentQuestionIndex(i => i + 1)}
              className="gradient-button"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              onClick={submitAllAnswers}
              className="gradient-button"
            >
              Submit All
              <CheckCircle2 className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>

        {/* Question dots navigation */}
        <div className="flex justify-center gap-2 mt-6 flex-wrap">
          {questions.map((q, i) => (
            <button
              key={i}
              onClick={() => setCurrentQuestionIndex(i)}
              className={`
                w-3 h-3 rounded-full transition-all
                ${i === currentQuestionIndex ? 'bg-primary scale-125' : ''}
                ${answers[q.id] !== undefined ? 'bg-primary/50' : 'bg-muted'}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
