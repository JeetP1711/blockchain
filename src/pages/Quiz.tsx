import React, { useState, useMemo } from "react";
import { allQuizQuestions, type QuizQuestion } from "../data/quiz";
import { useAppProgress } from "../hooks/useAppContext";
import { CheckCircle, XCircle, AlertTriangle, PlayCircle } from "lucide-react";

type QuizMode = "Quick" | "Full" | "Weak";

export default function Quiz() {
  const { progress, setProgress } = useAppProgress();
  
  const [activeMode, setActiveMode] = useState<QuizMode | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [incorrectTopics, setIncorrectTopics] = useState<string[]>([]);

  const startQuiz = (mode: QuizMode) => {
    setActiveMode(mode);
    let q: QuizQuestion[] = [];
    
    if (mode === "Quick") {
      // 10 random
      const shuffled = [...allQuizQuestions].sort(() => 0.5 - Math.random());
      q = shuffled.slice(0, 10);
    } else if (mode === "Full") {
      // 50 random
      const shuffled = [...allQuizQuestions].sort(() => 0.5 - Math.random());
      q = shuffled.slice(0, 50);
    } else if (mode === "Weak") {
      // From weak topics
      const weakQ = allQuizQuestions.filter(x => progress.weakTopics.includes(x.topic));
      q = weakQ.length > 5 ? weakQ.sort(() => 0.5 - Math.random()) : allQuizQuestions.slice(0,10);
    }

    setQuestions(q);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsFinished(false);
    setIncorrectTopics([]);
  };

  const handleAnswer = (idx: number) => {
    if (showExplanation) return;
    setSelectedAnswer(idx);
    setShowExplanation(true);
    
    const currentQ = questions[currentIndex];
    if (idx === currentQ.correctAnswer) {
      setScore(s => s + 1);
    } else {
      if (!incorrectTopics.includes(currentQ.topic)) {
        setIncorrectTopics(prev => [...prev, currentQ.topic]);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setIsFinished(true);
    const finalScore = Math.round((score / questions.length) * 100);
    setProgress(prev => {
      // Merge new weak topics
      const newWeak = Array.from(new Set([...prev.weakTopics, ...incorrectTopics]));
      return {
        ...prev,
        quizScores: [...prev.quizScores, finalScore],
        weakTopics: newWeak.slice(-10) // keep last 10 weak topics
      };
    });
  };

  if (activeMode && !isFinished && questions.length > 0) {
    const q = questions[currentIndex];
    return (
      <div className="max-w-3xl mx-auto space-y-6 pt-6">
        <div className="flex justify-between items-center bg-card p-4 rounded-xl border border-border shadow-sm">
          <span className="font-bold text-lg text-primary">{activeMode} Quiz</span>
          <span className="font-medium">Question {currentIndex + 1} of {questions.length}</span>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-secondary text-xs px-2 py-1 rounded font-medium">{q.topic}</span>
            <span className="bg-accent text-xs px-2 py-1 rounded font-medium">{q.difficulty}</span>
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-foreground">{q.question}</h2>

          <div className="space-y-3">
            {q.options.map((opt, i) => {
              let btnClass = "bg-secondary/50 hover:bg-secondary border-border text-foreground";
              
              if (showExplanation) {
                if (i === q.correctAnswer) btnClass = "bg-green-500/20 border-green-500 text-green-700 dark:text-green-400";
                else if (i === selectedAnswer) btnClass = "bg-destructive/20 border-destructive text-destructive-foreground";
                else btnClass = "bg-secondary/30 opacity-50 border-border";
              } else if (selectedAnswer === i) {
                btnClass = "bg-primary/20 border-primary text-primary-foreground";
              }

              return (
                <button
                  key={i}
                  disabled={showExplanation}
                  onClick={() => handleAnswer(i)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium text-lg ${btnClass}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-2">
              <div className={`p-5 rounded-xl border ${selectedAnswer === q.correctAnswer ? 'bg-green-500/10 border-green-500/20' : 'bg-destructive/10 border-destructive/20'}`}>
                <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
                  {selectedAnswer === q.correctAnswer 
                    ? <><CheckCircle className="text-green-500"/> Correct!</>
                    : <><XCircle className="text-destructive"/> Incorrect</>
                  }
                </h3>
                <p className="text-foreground/90 font-medium">{q.explanation}</p>
              </div>
              <button 
                onClick={handleNext}
                className="mt-6 w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors"
              >
                {currentIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (isFinished) {
    const accuracy = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6 pt-12 animate-in zoom-in-95 duration-500">
        <h1 className="text-4xl font-bold">QUIZ COMPLETE</h1>
        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          <div className="text-6xl font-bold mb-2 text-primary">{accuracy}%</div>
          <p className="text-xl text-muted-foreground mb-8">Score: {score} out of {questions.length}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
              <h3 className="font-bold text-green-600 dark:text-green-400">Correct: {score}</h3>
            </div>
            <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-xl">
              <h3 className="font-bold text-destructive">Incorrect: {questions.length - score}</h3>
            </div>
          </div>

          {incorrectTopics.length > 0 && (
            <div className="text-left bg-secondary/30 p-4 rounded-xl border border-border mb-8">
              <h3 className="font-bold flex items-center gap-2 mb-3"><AlertTriangle className="text-amber-500"/> Weak Topics Identified</h3>
              <ul className="space-y-1 text-sm font-medium">
                {incorrectTopics.map(t => <li key={t}>⚠ {t}</li>)}
              </ul>
            </div>
          )}

          <div className="flex gap-4">
            <button onClick={() => setActiveMode(null)} className="flex-1 py-3 bg-secondary rounded-lg font-bold hover:bg-secondary/80 border border-border">Back to Menu</button>
            <button onClick={() => startQuiz(activeMode as QuizMode)} className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90">Try Again</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Quiz & Practice</h1>
        <p className="text-muted-foreground mt-1">Test your knowledge with 100+ high-quality questions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button onClick={() => startQuiz('Quick')} className="flex flex-col items-start p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-md transition-all text-left">
          <div className="bg-primary/10 p-3 rounded-lg mb-4 text-primary">
            <PlayCircle size={28} />
          </div>
          <h2 className="text-xl font-bold mb-2">Quick Quiz</h2>
          <p className="text-muted-foreground">10 random questions to test your knowledge quickly.</p>
        </button>
        
        <button onClick={() => startQuiz('Full')} className="flex flex-col items-start p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-md transition-all text-left">
          <div className="bg-secondary p-3 rounded-lg mb-4 text-foreground">
            <CheckCircle size={28} />
          </div>
          <h2 className="text-xl font-bold mb-2">Full Quiz</h2>
          <p className="text-muted-foreground">50 questions. A rigorous test across all topics.</p>
        </button>
        
        <button onClick={() => startQuiz('Weak')} className="flex flex-col items-start p-6 bg-card border border-border rounded-xl hover:border-destructive/50 hover:shadow-md transition-all text-left">
          <div className="bg-destructive/10 p-3 rounded-lg mb-4 text-destructive">
            <AlertTriangle size={28} />
          </div>
          <h2 className="text-xl font-bold mb-2">Weak Area Quiz</h2>
          <p className="text-muted-foreground">Focus exclusively on topics where you previously made mistakes.</p>
        </button>
      </div>
    </div>
  );
}
