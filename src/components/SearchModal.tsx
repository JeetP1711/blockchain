import React, { useState, useEffect, useRef } from "react";
import { Search as SearchIcon, X, BookOpen, CheckCircle, Copy, BookA } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { completeSyllabus } from "../data/syllabus";
import { allQuizQuestions } from "../data/quiz";
import { flashcardsData } from "../data/flashcards";
import { glossaryData } from "../data/glossary";

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const qLower = query.toLowerCase();
  
  const results: { type: string; title: string; link: string; icon: any }[] = [];
  
  if (qLower.length > 1) {
    // Search Syllabus + Exam Answers
    completeSyllabus.forEach(t => {
      if (t.title.toLowerCase().includes(qLower) || 
          t.whatIsIt.toLowerCase().includes(qLower) ||
          t.examAnswer.marks5.toLowerCase().includes(qLower)) {
        results.push({ type: "Topic", title: t.title, link: `/learn/${t.id}`, icon: BookOpen });
      }
    });
    
    // Search Glossary
    glossaryData.forEach(g => {
      if (g.term.toLowerCase().includes(qLower) || g.simpleDef.toLowerCase().includes(qLower)) {
        results.push({ type: "Glossary", title: g.term, link: `/glossary`, icon: BookA });
      }
    });

    // Search Quiz
    allQuizQuestions.forEach(q => {
      if (q.question.toLowerCase().includes(qLower)) {
        results.push({ type: "Quiz Question", title: q.question, link: `/quiz`, icon: CheckCircle });
      }
    });

    // Search Flashcards
    flashcardsData.forEach(f => {
      if (f.front.toLowerCase().includes(qLower)) {
        results.push({ type: "Flashcard", title: f.front, link: `/flashcards`, icon: Copy });
      }
    });
  }

  const handleNav = (link: string) => {
    navigate(link);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-start justify-center pt-24 px-4 animate-in fade-in duration-200">
      <div className="bg-card w-full max-w-2xl border border-border rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[70vh]">
        
        <div className="flex items-center px-4 py-3 border-b border-border bg-secondary/30 relative">
          <SearchIcon size={20} className="text-muted-foreground mr-3" />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Search across topics, features, and questions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none focus:outline-none text-lg text-foreground placeholder:text-muted-foreground"
          />
          <button onClick={onClose} className="p-2 hover:bg-secondary rounded-full absolute right-2 text-muted-foreground">
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto p-2">
          {query.length <= 1 && (
            <div className="py-12 text-center text-muted-foreground text-sm">
              Type at least 2 characters to search...
            </div>
          )}
          
          {query.length > 1 && results.length === 0 && (
            <div className="py-12 text-center text-muted-foreground text-sm">
              No results found for "{query}"
            </div>
          )}
          
          {results.length > 0 && (
            <ul className="space-y-1">
              {results.slice(0, 50).map((r, i) => (
                <li key={i}>
                  <button 
                    onClick={() => handleNav(r.link)}
                    className="w-full flex items-center gap-3 p-3 text-left hover:bg-secondary rounded-xl transition-colors"
                  >
                    <div className="bg-background border border-border p-2 rounded-lg text-muted-foreground shrink-0">
                      <r.icon size={16} />
                    </div>
                    <div className="flex flex-col truncate">
                      <span className="font-bold text-sm text-foreground truncate">{r.title}</span>
                      <span className="text-xs text-muted-foreground font-medium">{r.type}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
