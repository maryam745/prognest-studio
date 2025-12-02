import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Language } from '@/types';

const languages = [
  {
    id: 'python' as Language,
    name: 'Python',
    description: 'A versatile, beginner-friendly language known for its clean syntax and extensive libraries.',
    color: 'from-yellow-500 to-blue-500',
    icon: '🐍',
    features: ['Easy to learn', 'Data Science', 'Web Development', 'AI/ML'],
  },
  {
    id: 'javascript' as Language,
    name: 'JavaScript',
    description: 'The language of the web. Build interactive websites, servers, and mobile apps.',
    color: 'from-yellow-400 to-yellow-600',
    icon: '⚡',
    features: ['Web Development', 'Full Stack', 'React/Node.js', 'Dynamic Apps'],
  },
  {
    id: 'cpp' as Language,
    name: 'C++',
    description: 'A powerful, high-performance language for systems programming and game development.',
    color: 'from-blue-500 to-blue-700',
    icon: '⚙️',
    features: ['High Performance', 'Game Dev', 'Systems Programming', 'Competitive Coding'],
  },
];

export default function LanguageSelection() {
  const { navigateTo, selectLanguage, state } = useApp();
  const { currentUser } = state;

  const handleSelectLanguage = (language: Language) => {
    selectLanguage(language);
    navigateTo('language-intro');
  };

  const getLanguageProgress = (language: Language) => {
    if (!currentUser?.progress[language]) return 0;
    let completed = 0;
    const categories = currentUser.progress[language];
    Object.values(categories).forEach(cat => {
      Object.values(cat).forEach(level => {
        if (level.completed) completed++;
      });
    });
    return Math.round((completed / 21) * 100); // 21 levels per language
  };

  return (
    <div className="min-h-screen gradient-hero p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 animate-slide-up">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigateTo('dashboard')}
            className="rounded-xl"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Choose Your Language</h1>
            <p className="text-muted-foreground">Select a programming language to start learning</p>
          </div>
        </div>

        {/* Language Cards */}
        <div className="grid gap-6">
          {languages.map((lang, index) => {
            const progress = getLanguageProgress(lang.id);
            return (
              <button
                key={lang.id}
                onClick={() => handleSelectLanguage(lang.id)}
                className="glass-effect rounded-2xl p-6 text-left hover:bg-muted/30 transition-all group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${lang.color} flex items-center justify-center text-4xl shrink-0`}>
                    {lang.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold">{lang.name}</h2>
                      {progress > 0 && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                          {progress}% Complete
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3">{lang.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {lang.features.map(feature => (
                        <span 
                          key={feature}
                          className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all shrink-0" />
                </div>

                {/* Progress bar */}
                {progress > 0 && (
                  <div className="mt-4 progress-bar h-2">
                    <div 
                      className="progress-bar-fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
