import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { 
  User, Code2, Languages, Terminal, Save, 
  ArrowRight, Trophy, Target, Zap, LogOut 
} from 'lucide-react';

export default function Dashboard() {
  const { state, navigateTo, getProgress, dispatch } = useApp();
  const { currentUser } = state;
  const progress = getProgress();

  const handleLogout = () => {
    dispatch({ type: 'SET_USER', payload: null });
    navigateTo('user');
  };

  if (!currentUser) return null;

  return (
    <div className="min-h-screen gradient-hero p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-slide-up">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center glow-effect">
              <User className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Welcome back, <span className="gradient-text">{currentUser.name}</span>!
              </h1>
              <p className="text-muted-foreground">Ready to continue your coding journey?</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleLogout}
            className="text-muted-foreground hover:text-foreground"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>

        {/* Progress Card */}
        <div className="glass-effect rounded-2xl p-6 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-4 mb-4">
            <Trophy className="w-8 h-8 text-warning" />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Your Progress</h2>
              <p className="text-sm text-muted-foreground">
                {progress.completedLevels} of {progress.totalLevels} levels completed
              </p>
            </div>
            <div className="text-3xl font-bold gradient-text">{progress.percentage}%</div>
          </div>
          <div className="progress-bar h-4">
            <div 
              className="progress-bar-fill"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: Target, label: 'Levels', value: progress.completedLevels, color: 'text-primary' },
            { icon: Zap, label: 'Languages', value: Object.keys(currentUser.progress).length, color: 'text-accent' },
            { icon: Save, label: 'Sessions', value: currentUser.savedSessions.length, color: 'text-secondary' },
          ].map((stat, i) => (
            <div 
              key={stat.label}
              className="glass-effect rounded-xl p-4 text-center animate-slide-up"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Choose Language */}
          <button
            onClick={() => navigateTo('language-selection')}
            className="glass-effect rounded-2xl p-6 text-left hover:bg-muted/30 transition-all group animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl gradient-button flex items-center justify-center">
                <Languages className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">Choose Language</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Select Python, JavaScript, or C++ and start learning with structured lessons
                </p>
                <div className="flex items-center text-primary font-medium">
                  Start Learning
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </button>

          {/* Run Your Own Code */}
          <button
            onClick={() => navigateTo('code-editor')}
            className="glass-effect rounded-2xl p-6 text-left hover:bg-muted/30 transition-all group animate-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center">
                <Terminal className="w-7 h-7 text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">Run Your Own Code</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Write, run, and save your own code in our sandbox environment
                </p>
                <div className="flex items-center text-secondary font-medium">
                  Open Editor
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </button>

          {/* Saved Sessions */}
          <button
            onClick={() => navigateTo('saved-sessions')}
            className="glass-effect rounded-2xl p-6 text-left hover:bg-muted/30 transition-all group md:col-span-2 animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                <Save className="w-7 h-7 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">View Saved Sessions</h3>
                <p className="text-muted-foreground text-sm">
                  Access your {currentUser.savedSessions.length} saved coding sessions
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
