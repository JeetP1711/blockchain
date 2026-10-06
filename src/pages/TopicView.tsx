import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { completeSyllabus } from "../data/syllabus";
import { useAppProgress } from "../hooks/useAppContext";
import { ChevronLeft, Star, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function TopicView() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { progress, markTopicComplete } = useAppProgress();
  
  const topic = completeSyllabus.find(t => t.id === topicId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId]);

  if (!topic) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <h2 className="text-2xl font-bold">Topic Not Found</h2>
        <button onClick={() => navigate("/learn")} className="text-primary hover:underline">Return to Syllabus</button>
      </div>
    );
  }

  const isCompleted = progress.completedTopics.includes(topic.id);
  const currentIndex = completeSyllabus.findIndex(t => t.id === topic.id);
  const nextTopic = currentIndex < completeSyllabus.length - 1 ? completeSyllabus[currentIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto pb-12 animate-in fade-in duration-300">
      <Link to="/learn" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6 transition-colors">
        <ChevronLeft size={16} className="mr-1" /> Back to Syllabus
      </Link>

      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm mb-8">
        <div className="p-6 md:p-8 border-b border-border bg-secondary/30">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">{topic.title}</h1>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium text-muted-foreground">Exam Importance:</span>
              <div className="flex items-center text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill={i < topic.importance ? "currentColor" : "transparent"} className={i < topic.importance ? "text-amber-500" : "text-muted-foreground/30"} />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
              <Clock size={16} />
              Estimated Study Time: {topic.timeEst}
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-12 text-foreground/90 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">1. What is it?</h2>
            <div className="bg-primary/5 border border-primary/20 p-5 rounded-xl">
              <p className="text-lg">{topic.whatIsIt}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Why do we need it?</h2>
            <p className="text-lg">{topic.whyNeeded}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. Simple Explanation</h2>
            <p className="text-lg bg-secondary/50 p-5 rounded-xl border border-border italic text-muted-foreground">"{topic.simpleExp}"</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Detailed Explanation</h2>
            <div className="space-y-4">
              {topic.detailedExp.split('\n\n').map((para, i) => (
                <p key={i} className="text-lg">{para}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. How it Works</h2>
            <p className="text-lg bg-card border border-border p-5 rounded-xl shadow-sm">{topic.howItWorks}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. Architecture & Components</h2>
            <ul className="list-disc list-inside space-y-2 text-lg ml-2">
              {topic.components.map((comp, i) => (
                <li key={i}><span className="font-medium text-foreground">{comp.split(':')[0]}:</span>{comp.includes(':') ? comp.split(':')[1] : ''}</li>
              ))}
            </ul>
          </section>

          {topic.diagram && (
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Conceptual Diagram</h2>
              <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm leading-tight whitespace-pre-wrap">{topic.diagram}</pre>
              </div>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. Real-world Example</h2>
            <p className="text-lg bg-accent/30 border border-border p-5 rounded-xl">{topic.example}</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-xl font-bold mb-4 text-green-500">9. Advantages</h2>
              <ul className="space-y-2 text-lg">
                {topic.advantages.map((adv, i) => (
                  <li key={i} className="flex gap-2"><CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5" /> <span>{adv}</span></li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4 text-destructive">10. Limitations</h2>
              <ul className="space-y-2 text-lg">
                {topic.limitations.map((lim, i) => (
                  <li key={i} className="flex gap-2"><span className="text-destructive font-bold text-xl leading-none shrink-0">•</span> <span>{lim}</span></li>
                ))}
              </ul>
            </section>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">11. Common Exam Mistakes</h2>
            <div className="bg-destructive/10 border border-destructive/20 p-5 rounded-xl space-y-3">
              {topic.commonMistakes.map((mistake, i) => (
                <p key={i} className="text-destructive-foreground font-medium flex gap-2">
                  <span className="font-bold">⚠</span> {mistake}
                </p>
              ))}
            </div>
          </section>

          <section className="bg-secondary/30 p-6 rounded-xl border border-primary/20">
            <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
              <Star className="fill-primary" /> Exam Model Answers
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">2-Mark Answer</h3>
                <p className="text-lg">{topic.examAnswer.marks2}</p>
              </div>
              <div className="border-t border-border pt-4">
                <h3 className="font-bold text-lg mb-2">5-Mark Answer</h3>
                <p className="text-lg whitespace-pre-wrap">{topic.examAnswer.marks5}</p>
              </div>
              {topic.examAnswer.marks7 && (
                <div className="border-t border-border pt-4">
                  <h3 className="font-bold text-lg mb-2">7-Mark Answer</h3>
                  <p className="text-lg whitespace-pre-wrap">{topic.examAnswer.marks7}</p>
                </div>
              )}
              {topic.examAnswer.marks10 && (
                <div className="border-t border-border pt-4">
                  <h3 className="font-bold text-lg mb-2">10-Mark Answer</h3>
                  <p className="text-lg whitespace-pre-wrap">{topic.examAnswer.marks10}</p>
                </div>
              )}
            </div>
          </section>

          <section className="bg-card border border-border p-5 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-3 text-foreground">Quick Revision Notes</h2>
            <p className="text-lg font-medium">{topic.quickRevision}</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Self-Test Questions</h2>
            <ul className="list-decimal list-outside ml-6 space-y-2 text-lg font-medium">
              {topic.selfTest.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </section>

        </div>
        
        {/* Completion Bar */}
        <div className="bg-secondary p-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          {!isCompleted ? (
            <button 
              onClick={() => markTopicComplete(topic.id)}
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto"
            >
              <CheckCircle size={20} /> Mark Topic as Completed
            </button>
          ) : (
            <div className="flex items-center gap-2 text-green-500 font-bold px-4 py-2">
              <CheckCircle size={24} /> Topic Completed!
            </div>
          )}
          
          {nextTopic && (
            <Link 
              to={`/learn/${nextTopic.id}`}
              className="flex items-center justify-center gap-2 bg-card text-foreground border border-border font-bold py-3 px-8 rounded-lg hover:bg-secondary transition-colors w-full sm:w-auto"
            >
              Next Topic <ArrowRight size={20} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
