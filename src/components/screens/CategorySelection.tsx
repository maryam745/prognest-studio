import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Sparkles, Rocket, Crown, Terminal } from 'lucide-react';
import { Category } from '@/types';

const categories = [
  {
    id: 'basic' as Category,
    name: 'Basic',
    description: 'Start with fundamentals: variables, data types, operators, and basic control flow.',
    icon: Sparkles,
    color: 'from-green-500 to-emerald-500',
    levels: 7,
    topics: ['Variables', 'Data Types', 'Operators', 'Conditionals', 'Loops', 'Functions', 'Basic I/O'],
  },
  {
    id: 'intermediate' as Category,
    name: 'Intermediate',
    description: 'Level up with OOP, file handling, error handling, and more complex patterns.',
    icon: Rocket,
    color: 'from-blue-500 to-indigo-500',
    levels: 7,
    topics: ['OOP', 'File I/O', 'Exceptions', 'Modules', 'Collections', 'Lambda', 'Decorators'],
  },
  {
    id: 'advanced' as Category,
    name: 'Advanced',
    description: 'Master advanced concepts: async programming, multithreading, and design patterns.',
    icon: Crown,
    color: 'from-purple-500 to-pink-500',
    levels: 7,
    topics: ['Async/Await', 'Threading', 'Generators', 'Metaclasses', 'Memory Management', 'Optimization'],
  },
];

export default function CategorySelection() {
  const { state, navigateTo, selectCategory } = useApp();
  const { selectedLanguage, currentUser } = state;

  if (!selectedLanguage) {
    navigateTo('language-selection');
    return null;
  }

  const handleSelectCategory = (category: Category) => {
    selectCategory(category);
    navigateTo('levels');
  };

  const getCategoryProgress = (category: Category) => {
    if (!currentUser?.progress[selectedLanguage]?.[category]) return 0;
    let completed = 0;
    const levels = currentUser.progress[selectedLanguage][category];
    Object.values(levels).forEach(level => {
      if (level.completed) completed++;
    });
    return completed;
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
            onClick={() => navigateTo('language-intro')}
            className="rounded-xl"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {languageNames[selectedLanguage]} Categories
            </h1>
            <p className="text-muted-foreground">Choose your skill level to begin</p>
          </div>
        </div>

        {/* Category Cards */}
        <div className="space-y-4 mb-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const progress = getCategoryProgress(category.id);
            
            return (
              <button
                key={category.id}
                onClick={() => handleSelectCategory(category.id)}
                className="w-full glass-effect rounded-2xl p-6 text-left hover:bg-muted/30 transition-all group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl font-bold">{category.name}</h2>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                        {category.levels} Levels
                      </span>
                      {progress > 0 && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-success/20 text-success">
                          {progress}/{category.levels} Done
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{category.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {category.topics.slice(0, 5).map(topic => (
                        <span 
                          key={topic}
                          className="px-2 py-0.5 text-xs rounded-full bg-muted/50 text-muted-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                      {category.topics.length > 5 && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-muted/50 text-muted-foreground">
                          +{category.topics.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                </div>

                {/* Progress bar */}
                {progress > 0 && (
                  <div className="mt-4 progress-bar h-2">
                    <div 
                      className="progress-bar-fill"
                      style={{ width: `${(progress / category.levels) * 100}%` }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Run Your Own Code Card */}
        <button
          onClick={() => navigateTo('code-editor')}
          className="w-full glass-effect rounded-2xl p-6 text-left hover:bg-muted/30 transition-all group border-2 border-dashed border-border hover:border-primary/50 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Terminal className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-1">Run Your Own Code</h2>
              <p className="text-muted-foreground text-sm">
                Practice freely in our code sandbox. Write, test, and save your own programs.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </button>
      </div>
    </div>
  );
}
