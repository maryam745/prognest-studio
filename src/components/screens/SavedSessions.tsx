import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Code2, Trash2, Calendar, Play, FileCode } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function SavedSessions() {
  const { state, navigateTo, deleteSession } = useApp();
  const { currentUser } = state;

  const handleDelete = (sessionId: string) => {
    deleteSession(sessionId);
    toast({
      title: 'Session deleted',
      description: 'The saved session has been removed',
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getLanguageIcon = (lang: string) => {
    switch (lang) {
      case 'python': return '🐍';
      case 'javascript': return '⚡';
      case 'cpp': return '⚙️';
      default: return '📝';
    }
  };

  const sessions = currentUser?.savedSessions || [];

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
            <h1 className="text-2xl md:text-3xl font-bold">Saved Sessions</h1>
            <p className="text-muted-foreground">
              {sessions.length} saved coding {sessions.length === 1 ? 'session' : 'sessions'}
            </p>
          </div>
        </div>

        {sessions.length === 0 ? (
          <div className="glass-effect rounded-2xl p-12 text-center animate-fade-in">
            <FileCode className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">No saved sessions yet</h2>
            <p className="text-muted-foreground mb-6">
              Start coding in the playground and save your work to see it here
            </p>
            <Button
              onClick={() => navigateTo('code-editor')}
              className="gradient-button"
            >
              <Play className="w-4 h-4 mr-2" />
              Open Code Editor
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {sessions.map((session, index) => (
              <div
                key={session.id}
                className="glass-effect rounded-2xl p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-2xl">
                      {getLanguageIcon(session.language)}
                    </div>
                    <div>
                      <h3 className="font-semibold capitalize">{session.language}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {formatDate(session.date)}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(session.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                {/* Code preview */}
                <div className="bg-background/50 rounded-xl p-4 mb-4 overflow-hidden">
                  <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap line-clamp-6">
                    {session.code}
                  </pre>
                </div>

                {/* Output preview */}
                {session.output && (
                  <div className="bg-muted/30 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">Output:</p>
                    <pre className="text-sm font-mono whitespace-pre-wrap line-clamp-3">
                      {session.output}
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Quick actions */}
        {sessions.length > 0 && (
          <div className="mt-8 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button
              onClick={() => navigateTo('code-editor')}
              className="gradient-button"
            >
              <Code2 className="w-4 h-4 mr-2" />
              New Coding Session
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
