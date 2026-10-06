import React, { useState, useEffect } from "react";
import { allQuizQuestions, QuizQuestion } from "../data/quiz";
import { useAppProgress } from "../hooks/useAppContext";
import { CheckCircle, Clock as ClockIcon, Flag, Hash, AlertTriangle, AlertCircle } from "lucide-react";
import { cn } from "../lib/utils";

export default function ExamMode() {
  const { setProgress } = useAppProgress();
  
  const [setup, setSetup] = useState(true);
  const [qCount, setQCount] = useState(30);
  const [timeLimit, setTimeLimit] = useState(30); // minutes
  
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [reviewMarks, setReviewMarks] = useState<Record<number, boolean>>({});
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let timer: any;
    if (!setup && !isFinished && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
             clearInterval(timer);
             finishExam();
             return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [setup, isFinished, timeLeft]);

  const startExam = () => {
    // Generate questions
    const shuffled = [...allQuizQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, qCount));
    setAnswers({});
    setReviewMarks({});
    setCurrentIndex(0);
    setTimeLeft(timeLimit * 60);
    setIsFinished(false);
    setSetup(false);
  };

  const finishExam = () => {
    setIsFinished(true);
    let correct = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) correct++;
    });
    
    // Save to progress
    const finalScore = Math.round((correct / questions.length) * 100);
    setProgress(prev => ({
      ...prev,
      examAttempts: prev.examAttempts + 1,
      quizScores: [...prev.quizScores, finalScore]
    }));
  };

  const toggleReview = () => {
    setReviewMarks(prev => ({...prev, [currentIndex]: !prev[currentIndex]}));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (setup) {
    return (
      <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in pt-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">University Exam Simulator</h1>
          <p className="text-muted-foreground mt-2">Test your readiness under timed exam conditions.</p>
        </div>

        <div className="bg-card border border-border p-8 rounded-2xl shadow-sm space-y-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Question Count</h3>
            <div className="flex flex-wrap gap-4">
              {[20, 30, 50, 100].map(n => (
                <button
                  key={n}
                  onClick={() => setQCount(n)}
                  className={`flex-1 py-3 border-2 rounded-xl font-bold transition-all ${qCount === n ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-secondary hover:bg-secondary/80 text-foreground'}`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Time Limit</h3>
            <div className="flex flex-wrap gap-4">
              {[15, 30, 60].map(n => (
                <button
                  key={n}
                  onClick={() => setTimeLimit(n)}
                  className={`flex-1 py-3 border-2 rounded-xl font-bold transition-all ${timeLimit === n ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-secondary hover:bg-secondary/80 text-foreground'}`}
                >
                  {n} Mins
                </button>
              ))}
            </div>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-xl flex gap-3 text-destructive-foreground">
            <AlertCircle className="shrink-0 mt-0.5" />
            <p className="font-medium text-sm">Once the exam begins, you cannot pause the timer. You will not see whether your answers are correct until the exam is submitted.</p>
          </div>

          <button onClick={startExam} className="w-full py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:bg-primary/90 transition-colors">
            Begin Exam
          </button>
        </div>
      </div>
    );
  }

  if (isFinished) {
    let correct = 0;
    let unanswered = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === undefined) unanswered++;
      else if (answers[idx] === q.correctAnswer) correct++;
    });
    
    const accuracy = Math.round((correct / questions.length) * 100);

    return (
      <div className="max-w-4xl mx-auto space-y-8 pt-6 animate-in zoom-in-95 duration-500 pb-12">
        <div className="text-center">
           <h1 className="text-4xl font-bold">Exam Results</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center text-center">
             <div className={cn("text-6xl font-bold mb-2", accuracy >= 70 ? "text-green-500" : "text-destructive")}>
               {accuracy}%
             </div>
             <p className="font-bold text-muted-foreground">{correct} / {questions.length} Correct</p>
             <p className="text-sm font-medium mt-2">
               {accuracy >= 80 ? "Pass with Distinction" : accuracy >= 50 ? "Pass" : "Fail"}
             </p>
          </div>
          
          <div className="md:col-span-2 bg-card border border-border rounded-2xl p-6 shadow-sm grid grid-cols-2 gap-4">
             <div className="bg-secondary/50 p-4 rounded-xl border border-border">
               <span className="text-muted-foreground font-medium text-sm">Time Remaining</span>
               <div className="text-2xl font-bold text-foreground">{formatTime(timeLeft)}</div>
             </div>
             <div className="bg-destructive/10 p-4 rounded-xl border border-destructive/20 text-destructive-foreground">
               <span className="font-medium text-sm">Unanswered</span>
               <div className="text-2xl font-bold">{unanswered}</div>
             </div>
             <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20 text-green-700 dark:text-green-400">
               <span className="font-medium text-sm">Correct</span>
               <div className="text-2xl font-bold">{correct}</div>
             </div>
             <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/20 text-amber-600 dark:text-amber-500">
               <span className="font-medium text-sm">Incorrect</span>
               <div className="text-2xl font-bold">{questions.length - correct - unanswered}</div>
             </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Detailed Review</h2>
          <div className="space-y-6">
            {questions.map((q, idx) => {
               const ans = answers[idx];
               const isCorrect = ans === q.correctAnswer;
               const notAns = ans === undefined;
               return (
                 <div key={idx} className={cn("p-5 border rounded-xl", isCorrect ? "border-green-500/50 bg-green-500/5" : (notAns ? "border-border bg-secondary" : "border-destructive/50 bg-destructive/5"))}>
                   <div className="flex gap-2 mb-2 font-bold text-sm">
                     <span className="text-muted-foreground">Q{idx+1}.</span> 
                     <span className={isCorrect ? "text-green-500" : (notAns ? "text-muted-foreground" : "text-destructive")}>
                       {isCorrect ? "Correct" : (notAns ? "Unanswered" : "Incorrect")}
                     </span>
                   </div>
                   <p className="font-bold text-lg mb-3">{q.question}</p>
                   <p className="text-muted-foreground font-medium mb-1">Your answer: {notAns ? "None" : q.options[ans]}</p>
                   {!isCorrect && <p className="text-green-500 font-bold mb-3">Correct answer: {q.options[q.correctAnswer]}</p>}
                 </div>
               )
            })}
          </div>
        </div>
        
        <button onClick={() => setSetup(true)} className="w-full py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:bg-primary/90 transition-colors">
          Return to Setup
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="h-full flex flex-col md:flex-row gap-6 animate-in fade-in">
      
      {/* Main Question Area */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto bg-card border border-border rounded-2xl shadow-sm p-6 md:p-8">
        <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
          <span className="font-bold text-lg text-primary">Question {currentIndex + 1}</span>
          <div className="flex items-center gap-4">
            <button onClick={toggleReview} className={cn("flex items-center gap-2 font-medium px-4 py-2 rounded-lg transition-colors border", reviewMarks[currentIndex] ? "bg-amber-500/20 text-amber-500 border-amber-500/50" : "bg-secondary text-muted-foreground border-border hover:bg-secondary/80")}>
              <Flag size={18} /> Mark Review
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-8 leading-relaxed flex-1">
          {currentQ.question}
        </h2>

        <div className="space-y-4 mb-8">
          {currentQ.options.map((opt, i) => {
            const isSelected = answers[currentIndex] === i;
            return (
              <button
                key={i}
                onClick={() => setAnswers({...answers, [currentIndex]: i})}
                className={cn(
                  "w-full text-left p-5 rounded-xl border-2 transition-all font-medium text-lg flex items-center gap-4",
                  isSelected ? "bg-primary/10 border-primary text-primary" : "bg-background border-border hover:border-primary/50 text-foreground"
                )}
              >
                <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0", isSelected ? "border-primary" : "border-muted-foreground")}>
                  {isSelected && <div className="w-3 h-3 bg-primary rounded-full" />}
                </div>
                {opt}
              </button>
            )
          })}
        </div>
        
        <div className="flex justify-between mt-auto pt-4 border-t border-border">
          <button 
            onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
            className="px-6 py-3 font-bold rounded-lg border border-border bg-secondary hover:bg-secondary/80 disabled:opacity-50 disabled:pointer-events-none"
          >
            Previous
          </button>
          <button 
            onClick={() => setCurrentIndex(i => Math.min(questions.length - 1, i + 1))}
            disabled={currentIndex === questions.length - 1}
            className="px-6 py-3 font-bold rounded-lg border border-border bg-secondary hover:bg-secondary/80 disabled:opacity-50 disabled:pointer-events-none"
          >
            Next
          </button>
        </div>
      </div>

      {/* Sidebar Palette */}
      <div className="w-full md:w-72 flex flex-col gap-4">
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center">
           <ClockIcon size={32} className="text-primary mb-2" />
           <div className={cn("text-4xl font-bold font-mono tracking-wider", timeLeft < 300 ? "text-destructive" : "text-foreground")}>
             {formatTime(timeLeft)}
           </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex-1 flex flex-col">
          <h3 className="font-bold mb-4 flex items-center gap-2"><Hash size={18}/> Question Palette</h3>
          <div className="grid grid-cols-5 gap-2 overflow-y-auto pr-2 pb-4">
            {questions.map((_, idx) => {
               const answered = answers[idx] !== undefined;
               const reviewed = reviewMarks[idx];
               const isCurrent = currentIndex === idx;
               return (
                 <button 
                   key={idx}
                   onClick={() => setCurrentIndex(idx)}
                   className={cn(
                     "aspect-square rounded-md font-bold text-sm flex items-center justify-center transition-all relative",
                     isCurrent ? "ring-2 ring-primary ring-offset-2 ring-offset-card" : "",
                     reviewed ? "bg-amber-500 text-white" : (answered ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground border border-border")
                   )}
                 >
                   {idx + 1}
                 </button>
               )
            })}
          </div>
          
          <button onClick={finishExam} className="w-full mt-auto py-4 bg-destructive text-destructive-foreground font-bold rounded-xl hover:bg-destructive/90 transition-colors">
            Submit Exam
          </button>
        </div>
      </div>
      
    </div>
  );
}
