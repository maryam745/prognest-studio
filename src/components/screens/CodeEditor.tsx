import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowLeft, Play, Save, Trash2, Code2, 
  Terminal, Copy, Check, Download 
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Language } from '@/types';

const languageOptions = [
  { id: 'javascript' as Language, name: 'JavaScript', icon: '⚡' },
  { id: 'python' as Language, name: 'Python', icon: '🐍' },
  { id: 'cpp' as Language, name: 'C++', icon: '⚙️' },
];

const starterCode = {
  javascript: `// JavaScript Playground
// Write your code here and click "Run" to see the output

function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));
`,
  python: `# Python Playground
# Note: Python execution is simulated in the browser

def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
`,
  cpp: `// C++ Playground
// Note: C++ execution is simulated in the browser

#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
`,
};

export default function CodeEditor() {
  const { navigateTo, saveSession } = useApp();
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('javascript');
  const [code, setCode] = useState(starterCode.javascript);
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setSelectedLanguage(lang);
    setCode(starterCode[lang]);
    setOutput('');
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running...\n');

    try {
      if (selectedLanguage === 'javascript') {
        // Capture console.log output
        const logs: string[] = [];
        const originalLog = console.log;
        console.log = (...args) => {
          logs.push(args.map(a => 
            typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)
          ).join(' '));
        };

        try {
          const result = eval(code);
          console.log = originalLog;
          
          let outputText = logs.join('\n');
          if (result !== undefined && !logs.length) {
            outputText = String(result);
          }
          setOutput(outputText || 'Code executed successfully (no output)');
        } catch (error: any) {
          console.log = originalLog;
          setOutput(`Error: ${error.message}`);
        }
      } else {
        // Simulate execution for Python/C++
        await new Promise(resolve => setTimeout(resolve, 500));
        setOutput(
          `[${selectedLanguage.toUpperCase()} Simulation]\n\n` +
          `Your code has been analyzed.\n` +
          `In a full implementation, this would execute on a backend server.\n\n` +
          `Tip: For actual execution, you can copy this code and run it in:\n` +
          `- Python: python.org or replit.com\n` +
          `- C++: cpp.sh or godbolt.org`
        );
      }

      toast({
        title: 'Code executed',
        description: 'Check the output panel for results',
      });
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
      toast({
        title: 'Execution error',
        description: error.message,
        variant: 'destructive',
      });
    }

    setIsRunning(false);
  };

  const handleSave = () => {
    saveSession({
      language: selectedLanguage,
      code,
      output,
    });
    toast({
      title: 'Session saved',
      description: 'Your code has been saved successfully',
    });
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: 'Copied!',
      description: 'Code copied to clipboard',
    });
  };

  const handleClear = () => {
    setCode(starterCode[selectedLanguage]);
    setOutput('');
    toast({
      title: 'Cleared',
      description: 'Editor reset to starter code',
    });
  };

  return (
    <div className="min-h-screen gradient-hero p-4 md:p-8">
      <div className="max-w-6xl mx-auto h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 animate-slide-up">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateTo('dashboard')}
              className="rounded-xl"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-bold">Code Playground</h1>
            </div>
          </div>

          {/* Language selector */}
          <div className="flex items-center gap-2">
            {languageOptions.map(lang => (
              <button
                key={lang.id}
                onClick={() => handleLanguageChange(lang.id)}
                className={`
                  px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2
                  ${selectedLanguage === lang.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted hover:bg-muted/80'}
                `}
              >
                <span>{lang.icon}</span>
                <span className="hidden sm:inline">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-4 h-[calc(100%-6rem)]">
          {/* Code Editor */}
          <div className="glass-effect rounded-2xl p-4 flex flex-col animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="font-medium">Editor</span>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm" onClick={handleCopy}>
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
                <Button variant="ghost" size="sm" onClick={handleClear}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 code-editor resize-none font-mono text-sm min-h-[300px]"
              placeholder="Write your code here..."
            />
          </div>

          {/* Output Panel */}
          <div className="glass-effect rounded-2xl p-4 flex flex-col animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-4 h-4 text-secondary" />
              <span className="font-medium">Output</span>
            </div>
            <div className="flex-1 output-panel overflow-auto font-mono text-sm whitespace-pre-wrap min-h-[300px]">
              {output || 'Click "Run" to see output here...'}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-4 mt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Button
            onClick={runCode}
            disabled={isRunning}
            className="gradient-button h-12 px-8"
          >
            <Play className="w-5 h-5 mr-2" />
            {isRunning ? 'Running...' : 'Run Code'}
          </Button>
          <Button
            onClick={handleSave}
            variant="outline"
            className="h-12 px-8"
          >
            <Save className="w-5 h-5 mr-2" />
            Save Session
          </Button>
          <Button
            onClick={() => navigateTo('saved-sessions')}
            variant="outline"
            className="h-12 px-8"
          >
            <Download className="w-5 h-5 mr-2" />
            View Saved
          </Button>
        </div>
      </div>
    </div>
  );
}
