import React from "react";
import { Link } from "react-router-dom";
import { useAppProgress } from "../hooks/useAppContext";
import { completeSyllabus } from "../data/syllabus";
import { allQuizQuestions } from "../data/quiz";
import { flashcardsData } from "../data/flashcards";
import { PlayCircle, Target, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

export default function Dashboard() {
  const { progress } = useAppProgress();
  
  const totalTopics = completeSyllabus.length;
  const topicsCompleted = progress.completedTopics.length;
  const progressPercent = totalTopics === 0 ? 0 : Math.round((topicsCompleted / totalTopics) * 100);
  
  const totalQuizzesTaken = progress.quizScores.length;
  const avgQuizScore = totalQuizzesTaken > 0 
    ? Math.round(progress.quizScores.reduce((a, b) => a + b, 0) / totalQuizzesTaken) 
    : 0;

  let recommendation = "Start learning with the first topic.";
  if (topicsCompleted > 0 && avgQuizScore < 60 && totalQuizzesTaken > 0) {
    recommendation = "Your quiz scores are low. Consider revisiting your weak topics or reading the Revision guide.";
  } else if (topicsCompleted > 0 && avgQuizScore >= 60 && avgQuizScore < 80) {
    recommendation = "You have a solid foundation. Practice with Flashcards or take a Mock Exam.";
  } else if (avgQuizScore >= 80) {
    recommendation = "You're doing great! Move forward to new topics or take a full-length Exam Mode challenge.";
  }

  const nextTopicId = completeSyllabus.find(t => !progress.completedTopics.includes(t.id))?.id || completeSyllabus[0].id;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome to Exam Prep</h1>
          <p className="text-muted-foreground mt-1">Master the concepts. Practice the questions. Ace the exam.</p>
        </div>
        <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium border border-primary/20">
          Exam Date: <span className="font-bold">Tomorrow</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 text-muted-foreground mb-2">
            <Target size={18} />
            <h3 className="font-medium text-sm">Overall Progress</h3>
          </div>
          <div className="text-3xl font-bold">{progressPercent}%</div>
          <div className="w-full bg-secondary h-2.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-primary h-full transition-all duration-1000 ease-out" style={{ width: `${progressPercent}%` }} />
          </div>
          <p className="text-xs text-muted-foreground mt-2">{topicsCompleted} of {totalTopics} topics</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 text-muted-foreground mb-2">
            <TrendingUp size={18} />
            <h3 className="font-medium text-sm">Quiz Accuracy</h3>
          </div>
          <div className="text-3xl font-bold">{avgQuizScore}%</div>
          <p className="text-xs text-muted-foreground mt-3">From {totalQuizzesTaken} attempts</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 text-muted-foreground mb-2">
            <AlertTriangle size={18} />
            <h3 className="font-medium text-sm">Weak Areas</h3>
          </div>
          <div className="text-3xl font-bold">{progress.weakTopics.length}</div>
          <p className="text-xs text-muted-foreground mt-3">Topics needing review</p>
        </div>
        
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col justify-center">
          <h3 className="font-medium text-sm text-muted-foreground mb-2">Total Resources</h3>
          <ul className="text-sm space-y-1">
            <li className="flex justify-between"><span>Topics:</span> <span className="font-bold">{totalTopics}</span></li>
            <li className="flex justify-between"><span>Questions:</span> <span className="font-bold">{allQuizQuestions.length}</span></li>
            <li className="flex justify-between"><span>Flashcards:</span> <span className="font-bold">{flashcardsData.length}</span></li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recommendation Engine */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Study Recommendation</h2>
          <div className="bg-secondary/50 p-4 rounded-lg border border-border/50 mb-6">
            <p className="text-foreground font-medium">{recommendation}</p>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-4">
            <Link to={`/learn/${nextTopicId}`} className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-medium hover:bg-primary/90 transition-colors">
              <PlayCircle size={18} />
              Continue Learning
            </Link>
            <Link to="/quiz" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-md font-medium hover:bg-secondary/80 transition-colors border border-border">
              Take a Quiz
            </Link>
            <Link to="/revision" className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-medium hover:bg-accent/80 transition-colors border border-border">
              Quick Revision
            </Link>
          </div>
        </div>

        {/* Weak Topics */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Focus Areas</h2>
          {progress.weakTopics.length > 0 ? (
            <ul className="space-y-3">
              {progress.weakTopics.slice(0, 5).map(topicName => (
                <li key={topicName} className="bg-destructive/10 text-destructive-foreground p-3 rounded-md border border-destructive/20 text-sm font-medium">
                  {topicName}
                </li>
              ))}
            </ul>
          ) : (
            <div className="h-full min-h-[150px] flex flex-col items-center justify-center text-muted-foreground text-center">
              <CheckCircle size={32} className="mb-2 opacity-50" />
              <p className="text-sm">No weak areas identified yet.<br/>Take more quizzes!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
