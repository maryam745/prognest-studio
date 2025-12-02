import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lock, CheckCircle2, Play, Star } from 'lucide-react';

const levelDescriptions = [
  'Introduction & Basics',
  'Core Concepts',
  'Working with Data',
  'Control Flow',
  'Loops & Iteration',
  'Data Structures',
  'Functions & Modules',
];

export default function LevelsScreen() {
  const { state, navigateTo, selectLevel } = useApp();
  const { selectedLanguage, selectedCategory, currentUser } = state;

  if (!selectedLanguage || !selectedCategory) {
    navigateTo('category-selection');
    return null;
  }

  const handleSelectLevel = (level: number) => {
    selectLevel(level);
    navigateTo('questions');
  };

  const getLevelStatus = (level: number) => {
    const levelData = currentUser?.progress[selectedLanguage]?.[selectedCategory]?.[level];
    if (levelData?.completed) return 'completed';
    
    // Check if previous level is completed (or it's level 1)
    if (level === 1) return 'unlocked';
    const prevLevelData = currentUser?.progress[selectedLanguage]?.[selectedCategory]?.[level - 1];
    if (prevLevelData?.completed) return 'unlocked';
    
    return 'locked';
  };

  const getLevelScore = (level: number) => {
    return currentUser?.progress[selectedLanguage]?.[selectedCategory]?.[level]?.score || 0;
  };

  const categoryNames = {
    basic: 'Basic',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  };

  const languageNames = {
    python: 'Python',
    javascript: 'JavaScript',
    cpp: 'C++',
  };

  return (
    <div className="min-h-screen gradient-hero p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 animate-slide-up">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigateTo('category-selection')}
            className="rounded-xl"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {languageNames[selectedLanguage]} - {categoryNames[selectedCategory]}
            </h1>
            <p className="text-muted-foreground">Select a level to start practicing</p>
          </div>
        </div>

        {/* Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 7 }, (_, i) => i + 1).map((level, index) => {
            const status = getLevelStatus(level);
            const score = getLevelScore(level);
            const isLocked = status === 'locked';
            const isCompleted = status === 'completed';

            return (
              <button
                key={level}
                onClick={() => !isLocked && handleSelectLevel(level)}
                disabled={isLocked}
                className={`
                  glass-effect rounded-2xl p-6 text-left transition-all group animate-slide-up
                  ${isLocked 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-muted/30 hover:scale-[1.02]'}
                  ${isCompleted ? 'border border-success/30' : ''}
                `}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  {/* Level number */}
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold
                    ${isCompleted 
                      ? 'bg-success/20 text-success' 
                      : isLocked 
                        ? 'bg-muted text-muted-foreground'
                        : 'gradient-bg text-primary-foreground'
                    }
                  `}>
                    {isCompleted ? (
                      <CheckCircle2 className="w-7 h-7" />
                    ) : isLocked ? (
                      <Lock className="w-6 h-6" />
                    ) : (
                      level
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-lg font-semibold">Level {level}</h2>
                      {isCompleted && score > 0 && (
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-warning/20 text-warning text-xs">
                          <Star className="w-3 h-3" />
                          {score}%
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">
                      {levelDescriptions[level - 1]}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="px-2 py-0.5 rounded-full bg-muted">10 Questions</span>
                      <span className="px-2 py-0.5 rounded-full bg-muted">4 MCQ</span>
                      <span className="px-2 py-0.5 rounded-full bg-muted">3 Short</span>
                      <span className="px-2 py-0.5 rounded-full bg-muted">3 Coding</span>
                    </div>
                  </div>

                  {/* Action icon */}
                  {!isLocked && (
                    <Play className={`
                      w-5 h-5 shrink-0 mt-2 transition-all
                      ${isCompleted 
                        ? 'text-success' 
                        : 'text-muted-foreground group-hover:text-primary group-hover:scale-110'}
                    `} />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded gradient-bg" />
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-success/20" />
            <span>Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-muted" />
            <span>Locked</span>
          </div>
        </div>
      </div>
    </div>
  );
}
