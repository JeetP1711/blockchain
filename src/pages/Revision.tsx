import React, { useState } from "react";
import { completeSyllabus } from "../data/syllabus";
import { Clock, Zap, BookOpen } from "lucide-react";

export default function Revision() {
  const [mode, setMode] = useState<"5min" | "15min" | "30min">("5min");

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Rapid Revision</h1>
        <p className="text-muted-foreground mt-1">Select your available time before the exam.</p>
      </div>

      <div className="flex bg-card p-1 rounded-xl border border-border w-fit shadow-sm">
        <button 
          onClick={() => setMode("5min")}
          className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-colors flex items-center gap-2 ${mode === "5min" ? "bg-primary text-primary-foreground" : "hover:bg-secondary text-muted-foreground"}`}
        >
          <Zap size={16} /> 5 Minutes
        </button>
        <button 
          onClick={() => setMode("15min")}
          className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-colors flex items-center gap-2 ${mode === "15min" ? "bg-primary text-primary-foreground" : "hover:bg-secondary text-muted-foreground"}`}
        >
          <Clock size={16} /> 15 Minutes
        </button>
        <button 
          onClick={() => setMode("30min")}
          className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-colors flex items-center gap-2 ${mode === "30min" ? "bg-primary text-primary-foreground" : "hover:bg-secondary text-muted-foreground"}`}
        >
          <BookOpen size={16} /> 30 Minutes
        </button>
      </div>

      <div className="space-y-6">
        {mode === "5min" && (
          <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-primary mb-6">Absolute Essentials</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary/50 p-4 rounded-xl border border-border">
                <span className="font-bold block text-lg mb-1 text-foreground">BLOCKCHAIN</span>
                <span className="text-muted-foreground font-medium">Distributed ledger with cryptographically linked blocks.</span>
              </div>
              <div className="bg-secondary/50 p-4 rounded-xl border border-border">
                <span className="font-bold block text-lg mb-1 text-foreground">HASH</span>
                <span className="text-muted-foreground font-medium">A fixed-length one-way digital fingerprint (e.g. SHA-256).</span>
              </div>
              <div className="bg-secondary/50 p-4 rounded-xl border border-border">
                <span className="font-bold block text-lg mb-1 text-foreground">PREVIOUS HASH</span>
                <span className="text-muted-foreground font-medium">The link connecting blocks. Break it, you break the chain.</span>
              </div>
              <div className="bg-secondary/50 p-4 rounded-xl border border-border">
                <span className="font-bold block text-lg mb-1 text-foreground">MERKLE TREE</span>
                <span className="text-muted-foreground font-medium">Binary tree summarizing transactions into a single Root.</span>
              </div>
              <div className="bg-secondary/50 p-4 rounded-xl border border-border">
                <span className="font-bold block text-lg mb-1 text-foreground">CONSENSUS</span>
                <span className="text-muted-foreground font-medium">Distributed agreement (PoW = burn energy, PoS = lock collateral).</span>
              </div>
              <div className="bg-secondary/50 p-4 rounded-xl border border-border">
                <span className="font-bold block text-lg mb-1 text-foreground">P2P NETWORK</span>
                <span className="text-muted-foreground font-medium">Nodes gossiping directly, entirely removing central servers.</span>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
               <h3 className="font-bold text-lg mb-4 text-foreground">The Types:</h3>
               <ul className="space-y-2 font-medium">
                 <li><span className="font-bold text-primary">PUBLIC</span> = Open to everyone</li>
                 <li><span className="font-bold text-primary">PRIVATE</span> = One organization</li>
                 <li><span className="font-bold text-primary">CONSORTIUM</span> = Multiple allied organizations</li>
               </ul>
            </div>
          </div>
        )}

        {mode !== "5min" && (
          <div className="space-y-6">
            {completeSyllabus.slice(0, mode === "15min" ? 8 : 15).map(topic => (
              <div key={topic.id} className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-xl mb-3 text-foreground">{topic.title}</h3>
                <p className="font-medium text-muted-foreground bg-primary/5 p-4 border border-primary/20 rounded-xl mb-4 italic">
                  "{topic.simpleExp}"
                </p>
                <div className="p-4 bg-secondary/30 rounded-xl border border-border">
                  <h4 className="font-bold mb-2">Key Takeaway:</h4>
                  <p className="font-medium">{topic.quickRevision}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
