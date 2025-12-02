import { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Code2, Sparkles } from 'lucide-react';

export default function SplashScreen() {
  const { navigateTo } = useApp();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigateTo('user');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigateTo]);

  return (
    <div className="min-h-screen gradient-hero flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Floating code symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['{ }', '< />', '( )', '[ ]', '= =', '+ +'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-primary/20 text-4xl font-mono animate-float"
            style={{
              top: `${20 + i * 12}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center animate-scale-in">
        {/* Logo */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto gradient-bg rounded-3xl flex items-center justify-center glow-effect animate-pulse-glow">
            <Code2 className="w-16 h-16 text-primary-foreground" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-accent animate-float" />
        </div>

        {/* App name */}
        <h1 className="text-6xl md:text-7xl font-bold mb-4">
          <span className="gradient-text">Prog</span>
          <span className="text-foreground">Nest</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Master Programming, One Level at a Time
        </p>

        {/* Loading indicator */}
        <div className="flex items-center justify-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>

      {/* Version info */}
      <div className="absolute bottom-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '1.5s' }}>
        Version 1.0 • Learn • Practice • Master
      </div>
    </div>
  );
}
