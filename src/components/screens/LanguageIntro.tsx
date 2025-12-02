import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle2, BookOpen, Code2, Trophy } from 'lucide-react';

const languageInfo = {
  python: {
    name: 'Python',
    icon: '🐍',
    color: 'from-yellow-500 to-blue-500',
    intro: `Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python has become one of the most popular languages in the world.`,
    highlights: [
      'Clean and readable syntax that emphasizes code readability',
      'Extensive standard library and third-party packages',
      'Perfect for beginners and professionals alike',
      'Used in web development, data science, AI, and automation',
    ],
    useCases: ['Web Development (Django, Flask)', 'Data Science & Analysis', 'Machine Learning & AI', 'Automation & Scripting'],
    funFact: 'Python was named after the British comedy group Monty Python, not the snake!',
  },
  javascript: {
    name: 'JavaScript',
    icon: '⚡',
    color: 'from-yellow-400 to-yellow-600',
    intro: `JavaScript is the programming language of the web. Originally created to make web pages interactive, it has evolved into a versatile language that runs everywhere - browsers, servers, mobile apps, and more.`,
    highlights: [
      'The only programming language native to web browsers',
      'Event-driven and asynchronous programming model',
      'Huge ecosystem with npm (millions of packages)',
      'Full-stack development with Node.js',
    ],
    useCases: ['Frontend Web Development', 'Backend with Node.js', 'Mobile Apps (React Native)', 'Desktop Apps (Electron)'],
    funFact: 'JavaScript was created in just 10 days by Brendan Eich in 1995!',
  },
  cpp: {
    name: 'C++',
    icon: '⚙️',
    color: 'from-blue-500 to-blue-700',
    intro: `C++ is a powerful, high-performance programming language. Created by Bjarne Stroustrup as an extension of C, it provides low-level memory manipulation while supporting object-oriented programming.`,
    highlights: [
      'Direct hardware access and memory management',
      'Zero-cost abstractions for performance',
      'Object-oriented and generic programming support',
      'Foundation for many other languages and systems',
    ],
    useCases: ['Game Development', 'Operating Systems', 'Embedded Systems', 'High-Frequency Trading'],
    funFact: 'C++ was originally called "C with Classes" before being renamed in 1983!',
  },
};

export default function LanguageIntro() {
  const { state, navigateTo } = useApp();
  const { selectedLanguage } = state;

  if (!selectedLanguage) {
    navigateTo('language-selection');
    return null;
  }

  const info = languageInfo[selectedLanguage];

  return (
    <div className="min-h-screen gradient-hero p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 animate-slide-up">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigateTo('language-selection')}
            className="rounded-xl"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-2xl`}>
            {info.icon}
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Introduction to {info.name}</h1>
            <p className="text-muted-foreground">Learn the basics before you dive in</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Main intro */}
          <div className="glass-effect rounded-2xl p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-3">What is {info.name}?</h2>
                <p className="text-muted-foreground leading-relaxed">{info.intro}</p>
              </div>
            </div>
          </div>

          {/* Key highlights */}
          <div className="glass-effect rounded-2xl p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-success mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Key Highlights</h2>
                <ul className="space-y-2">
                  {info.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Use cases */}
          <div className="glass-effect rounded-2xl p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start gap-4">
              <Code2 className="w-6 h-6 text-accent mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Common Use Cases</h2>
                <div className="flex flex-wrap gap-2">
                  {info.useCases.map((useCase, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 rounded-xl bg-muted text-foreground text-sm"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Fun fact */}
          <div className="glass-effect rounded-2xl p-6 bg-primary/5 border-primary/20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-4">
              <Trophy className="w-6 h-6 text-warning mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Fun Fact</h2>
                <p className="text-muted-foreground">{info.funFact}</p>
              </div>
            </div>
          </div>

          {/* Get Started Button */}
          <Button
            onClick={() => navigateTo('category-selection')}
            className="w-full h-14 text-lg gradient-button animate-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
