import React, { createContext, useContext, ReactNode } from "react";
import { useLocalStorage } from "./useLocalStorage";

type ProgressState = {
  completedTopics: string[];
  quizScores: number[];
  examAttempts: number;
  streak: number;
  weakTopics: string[];
  theme: "light" | "dark";
};

type ProgressContextType = {
  progress: ProgressState;
  setProgress: React.Dispatch<React.SetStateAction<ProgressState>>;
  markTopicComplete: (topicId: string) => void;
  toggleTheme: () => void;
};

const defaultState: ProgressState = {
  completedTopics: [],
  quizScores: [],
  examAttempts: 0,
  streak: 0,
  weakTopics: [],
  theme: "dark",
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useLocalStorage<ProgressState>("blockchain_v1_progress", defaultState);

  const markTopicComplete = (topicId: string) => {
    setProgress((prev) => {
      if (prev.completedTopics.includes(topicId)) return prev;
      return { ...prev, completedTopics: [...prev.completedTopics, topicId] };
    });
  };

  const toggleTheme = () => {
    setProgress((prev) => ({
      ...prev,
      theme: prev.theme === "dark" ? "light" : "dark",
    }));
  };

  return (
    <ProgressContext.Provider value={{ progress, setProgress, markTopicComplete, toggleTheme }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useAppProgress = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useAppProgress must be used within ProgressProvider");
  return ctx;
};
