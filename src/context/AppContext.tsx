import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { AppState, User, Language, Category, Screen, UserProgress, SavedSession } from '@/types';

type Action =
  | { type: 'SET_SCREEN'; payload: Screen }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'ADD_USER'; payload: User }
  | { type: 'SET_LANGUAGE'; payload: Language | null }
  | { type: 'SET_CATEGORY'; payload: Category | null }
  | { type: 'SET_LEVEL'; payload: number | null }
  | { type: 'UPDATE_PROGRESS'; payload: { language: string; category: string; level: number; completed: boolean; score: number; answers: any } }
  | { type: 'SAVE_SESSION'; payload: SavedSession }
  | { type: 'DELETE_SESSION'; payload: string }
  | { type: 'LOAD_STATE'; payload: Partial<AppState> };

const initialState: AppState = {
  currentUser: null,
  users: [],
  currentScreen: 'splash',
  selectedLanguage: null,
  selectedCategory: null,
  selectedLevel: null,
};

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_SCREEN':
      return { ...state, currentScreen: action.payload };
    case 'SET_USER':
      return { ...state, currentUser: action.payload };
    case 'ADD_USER':
      const existingUserIndex = state.users.findIndex(u => u.name === action.payload.name);
      if (existingUserIndex >= 0) {
        return state;
      }
      return { ...state, users: [...state.users, action.payload] };
    case 'SET_LANGUAGE':
      return { ...state, selectedLanguage: action.payload };
    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'SET_LEVEL':
      return { ...state, selectedLevel: action.payload };
    case 'UPDATE_PROGRESS':
      if (!state.currentUser) return state;
      const { language, category, level, completed, score, answers } = action.payload;
      const newProgress: UserProgress = {
        ...state.currentUser.progress,
        [language]: {
          ...state.currentUser.progress[language],
          [category]: {
            ...state.currentUser.progress[language]?.[category],
            [level]: { completed, score, answers }
          }
        }
      };
      const updatedUser = { ...state.currentUser, progress: newProgress };
      const updatedUsers = state.users.map(u => 
        u.name === updatedUser.name ? updatedUser : u
      );
      return { ...state, currentUser: updatedUser, users: updatedUsers };
    case 'SAVE_SESSION':
      if (!state.currentUser) return state;
      const userWithSession = {
        ...state.currentUser,
        savedSessions: [...state.currentUser.savedSessions, action.payload]
      };
      const usersWithSession = state.users.map(u =>
        u.name === userWithSession.name ? userWithSession : u
      );
      return { ...state, currentUser: userWithSession, users: usersWithSession };
    case 'DELETE_SESSION':
      if (!state.currentUser) return state;
      const userWithoutSession = {
        ...state.currentUser,
        savedSessions: state.currentUser.savedSessions.filter(s => s.id !== action.payload)
      };
      const usersWithoutSession = state.users.map(u =>
        u.name === userWithoutSession.name ? userWithoutSession : u
      );
      return { ...state, currentUser: userWithoutSession, users: usersWithoutSession };
    case 'LOAD_STATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  navigateTo: (screen: Screen) => void;
  selectUser: (user: User) => void;
  createUser: (name: string) => User;
  selectLanguage: (language: Language) => void;
  selectCategory: (category: Category) => void;
  selectLevel: (level: number) => void;
  updateProgress: (language: string, category: string, level: number, completed: boolean, score: number, answers: any) => void;
  saveSession: (session: Omit<SavedSession, 'id' | 'date'>) => void;
  deleteSession: (sessionId: string) => void;
  getProgress: () => { completedLevels: number; totalLevels: number; percentage: number };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load state from localStorage on mount
  useEffect(() => {
    const savedUsers = localStorage.getItem('prognest_users');
    if (savedUsers) {
      try {
        const users = JSON.parse(savedUsers);
        dispatch({ type: 'LOAD_STATE', payload: { users } });
      } catch (e) {
        console.error('Failed to load users from localStorage');
      }
    }
  }, []);

  // Save users to localStorage on change
  useEffect(() => {
    if (state.users.length > 0) {
      localStorage.setItem('prognest_users', JSON.stringify(state.users));
    }
  }, [state.users]);

  const navigateTo = (screen: Screen) => {
    dispatch({ type: 'SET_SCREEN', payload: screen });
  };

  const selectUser = (user: User) => {
    dispatch({ type: 'SET_USER', payload: user });
    navigateTo('dashboard');
  };

  const createUser = (name: string): User => {
    const existingUser = state.users.find(u => u.name === name);
    if (existingUser) {
      return existingUser;
    }
    
    const newUser: User = {
      name,
      createdAt: new Date().toISOString(),
      progress: {},
      savedSessions: []
    };
    dispatch({ type: 'ADD_USER', payload: newUser });
    return newUser;
  };

  const selectLanguage = (language: Language) => {
    dispatch({ type: 'SET_LANGUAGE', payload: language });
  };

  const selectCategory = (category: Category) => {
    dispatch({ type: 'SET_CATEGORY', payload: category });
  };

  const selectLevel = (level: number) => {
    dispatch({ type: 'SET_LEVEL', payload: level });
  };

  const updateProgress = (language: string, category: string, level: number, completed: boolean, score: number, answers: any) => {
    dispatch({ type: 'UPDATE_PROGRESS', payload: { language, category, level, completed, score, answers } });
  };

  const saveSession = (session: Omit<SavedSession, 'id' | 'date'>) => {
    const fullSession: SavedSession = {
      ...session,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    dispatch({ type: 'SAVE_SESSION', payload: fullSession });
  };

  const deleteSession = (sessionId: string) => {
    dispatch({ type: 'DELETE_SESSION', payload: sessionId });
  };

  const getProgress = () => {
    if (!state.currentUser) return { completedLevels: 0, totalLevels: 63, percentage: 0 };
    
    let completedLevels = 0;
    const totalLevels = 3 * 3 * 7; // 3 languages * 3 categories * 7 levels
    
    Object.values(state.currentUser.progress).forEach(langProgress => {
      Object.values(langProgress).forEach(catProgress => {
        Object.values(catProgress).forEach(levelProgress => {
          if (levelProgress.completed) completedLevels++;
        });
      });
    });
    
    return {
      completedLevels,
      totalLevels,
      percentage: Math.round((completedLevels / totalLevels) * 100)
    };
  };

  return (
    <AppContext.Provider value={{
      state,
      dispatch,
      navigateTo,
      selectUser,
      createUser,
      selectLanguage,
      selectCategory,
      selectLevel,
      updateProgress,
      saveSession,
      deleteSession,
      getProgress
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
