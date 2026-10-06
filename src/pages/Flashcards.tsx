import React, { useState } from "react";
import { flashcardsData } from "../data/flashcards";
import { Copy, RotateCw, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

export default function Flashcards() {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);

  const card = flashcardsData[index];

  const handleNext = (known: boolean) => {
    if (known) setKnownCount(c => c + 1);
    setIsFlipped(false);
    setTimeout(() => {
      setIndex(i => (i + 1) % flashcardsData.length);
    }, 150); // wait for flip back animation start
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Flashcards</h1>
          <p className="text-muted-foreground mt-1">Review {flashcardsData.length} key terms and definitions.</p>
        </div>
        <div className="bg-secondary px-4 py-2 rounded-lg font-medium border border-border">
          Card {index + 1} of {flashcardsData.length}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-8">
        {/* Flashcard 3D container */}
        <div 
          className="relative w-full max-w-xl h-80 perspective-1000 cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={cn(
            "w-full h-full duration-500 preserve-3d relative",
            isFlipped ? "rotate-y-180" : ""
          )}>
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden bg-card border-2 border-border rounded-2xl shadow-lg flex flex-col items-center justify-center p-8 text-center hover:border-primary/50 transition-colors">
              <span className="absolute top-4 left-4 bg-secondary text-xs px-2 py-1 rounded font-medium">{card.topic}</span>
              <Copy size={32} className="text-primary mb-4 opacity-50" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">{card.front}</h2>
              <p className="absolute bottom-6 text-sm text-muted-foreground flex items-center gap-2">
                <RotateCw size={14} /> Click to reveal
              </p>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full backface-hidden bg-primary/5 border-2 border-primary/30 rounded-2xl shadow-lg flex flex-col items-center justify-center p-8 text-center rotate-y-180">
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded font-medium">Definition</span>
              <h2 className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">{card.back}</h2>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-4 mt-12 w-full max-w-xl">
          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(false); }}
            className="flex-1 flex flex-col items-center gap-2 py-3 bg-card border border-border rounded-xl font-bold hover:bg-secondary/80 transition-colors"
          >
             <span className="text-muted-foreground">Review Again</span>
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(true); }}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors"
          >
             <CheckCircle size={18} /> I Know This
          </button>
        </div>
      </div>
    </div>
  );
}
