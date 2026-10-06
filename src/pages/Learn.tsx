import React from "react";
import { Link } from "react-router-dom";
import { completeSyllabus } from "../data/syllabus";
import { useAppProgress } from "../hooks/useAppContext";
import { CheckCircle, Clock, Star } from "lucide-react";

export default function Learn() {
  const { progress } = useAppProgress();

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Subject Syllabus</h1>
        <p className="text-muted-foreground mt-1">Select a topic to start learning. High importance topics are marked with stars.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {completeSyllabus.map((topic) => {
          const isCompleted = progress.completedTopics.includes(topic.id);
          
          return (
            <Link 
              key={topic.id} 
              to={`/learn/${topic.id}`}
              className={`group flex flex-col justify-between p-5 rounded-xl border transition-all duration-200 hover:shadow-md hover:border-primary/50 relative overflow-hidden ${
                isCompleted ? "bg-card border-border" : "bg-card border-border"
              }`}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors pr-6">
                    {topic.title}
                  </h3>
                  {isCompleted && (
                    <CheckCircle className="text-green-500 absolute top-5 right-5" size={20} />
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {topic.whatIsIt}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Clock size={14} />
                  {topic.timeEst}
                </div>
                <div className="flex items-center text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      fill={i < topic.importance ? "currentColor" : "transparent"} 
                      className={i < topic.importance ? "text-amber-500" : "text-muted-foreground/30"} 
                    />
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
