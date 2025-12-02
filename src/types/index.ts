export type Language = 'python' | 'javascript' | 'cpp';
export type Category = 'basic' | 'intermediate' | 'advanced';
export type QuestionType = 'mcq' | 'short' | 'coding';

export interface MCQQuestion {
  id: string;
  type: 'mcq';
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface ShortQuestion {
  id: string;
  type: 'short';
  question: string;
  correctAnswer: string;
  acceptableAnswers?: string[];
}

export interface CodingQuestion {
  id: string;
  type: 'coding';
  question: string;
  starterCode: string;
  testCases: TestCase[];
  hints?: string[];
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  description?: string;
}

export type Question = MCQQuestion | ShortQuestion | CodingQuestion;

export interface LevelData {
  level: number;
  questions: Question[];
}

export interface CategoryData {
  [key: string]: LevelData[];
}

export interface LanguageData {
  [key: string]: CategoryData;
}

export interface UserProgress {
  [language: string]: {
    [category: string]: {
      [level: number]: {
        completed: boolean;
        score: number;
        answers: { [questionId: string]: any };
      };
    };
  };
}

export interface SavedSession {
  id: string;
  date: string;
  language: Language | 'custom';
  code: string;
  output?: string;
}

export interface User {
  name: string;
  createdAt: string;
  selectedLanguage?: Language;
  progress: UserProgress;
  savedSessions: SavedSession[];
}

export interface AppState {
  currentUser: User | null;
  users: User[];
  currentScreen: Screen;
  selectedLanguage: Language | null;
  selectedCategory: Category | null;
  selectedLevel: number | null;
}

export type Screen = 
  | 'splash'
  | 'user'
  | 'dashboard'
  | 'language-selection'
  | 'language-intro'
  | 'category-selection'
  | 'levels'
  | 'questions'
  | 'code-editor'
  | 'saved-sessions';
