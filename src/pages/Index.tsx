import { useApp } from '@/context/AppContext';
import SplashScreen from '@/components/screens/SplashScreen';
import UserScreen from '@/components/screens/UserScreen';
import Dashboard from '@/components/screens/Dashboard';
import LanguageSelection from '@/components/screens/LanguageSelection';
import LanguageIntro from '@/components/screens/LanguageIntro';
import CategorySelection from '@/components/screens/CategorySelection';
import LevelsScreen from '@/components/screens/LevelsScreen';
import QuestionScreen from '@/components/screens/QuestionScreen';
import CodeEditor from '@/components/screens/CodeEditor';
import SavedSessions from '@/components/screens/SavedSessions';

const Index = () => {
  const { state } = useApp();
  const { currentScreen } = state;

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'user':
        return <UserScreen />;
      case 'dashboard':
        return <Dashboard />;
      case 'language-selection':
        return <LanguageSelection />;
      case 'language-intro':
        return <LanguageIntro />;
      case 'category-selection':
        return <CategorySelection />;
      case 'levels':
        return <LevelsScreen />;
      case 'questions':
        return <QuestionScreen />;
      case 'code-editor':
        return <CodeEditor />;
      case 'saved-sessions':
        return <SavedSessions />;
      default:
        return <SplashScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderScreen()}
    </div>
  );
};

export default Index;
