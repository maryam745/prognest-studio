import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, UserPlus, ArrowRight, Trash2 } from 'lucide-react';

export default function UserScreen() {
  const { state, selectUser, createUser } = useApp();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    const user = createUser(name.trim());
    selectUser(user);
  };

  const handleSelectExistingUser = (user: typeof state.users[0]) => {
    selectUser(user);
  };

  return (
    <div className="min-h-screen gradient-hero flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-md animate-slide-up">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto gradient-bg rounded-2xl flex items-center justify-center mb-4 glow-effect">
            <UserPlus className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome to <span className="gradient-text">ProgNest</span></h1>
          <p className="text-muted-foreground">Enter your name to start learning</p>
        </div>

        {/* Name input form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              className="h-14 text-lg pl-12 bg-card border-border focus:border-primary focus:ring-primary/20"
            />
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
          {error && <p className="text-destructive text-sm">{error}</p>}
          <Button type="submit" className="w-full h-14 text-lg gradient-button hover:opacity-90 transition-opacity">
            Start Learning
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </form>

        {/* Existing users */}
        {state.users.length > 0 && (
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground">or select existing user</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
              {state.users.map((user, index) => (
                <button
                  key={user.name}
                  onClick={() => handleSelectExistingUser(user)}
                  className="w-full p-4 glass-effect rounded-xl flex items-center gap-4 hover:bg-muted/50 transition-all group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-card flex items-center justify-center border border-border">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-foreground">{user.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {Object.keys(user.progress).length > 0 
                        ? `Progress: ${Object.keys(user.progress).join(', ')}`
                        : 'New learner'}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

