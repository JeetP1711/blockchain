import React, { useState, useEffect } from "react";
import { Copy, RefreshCw, Network, Play, Pause, RotateCcw } from "lucide-react";
import { cn } from "../lib/utils";

async function sha256(message: string) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

export default function Visualize() {
  const [activeTab, setActiveTab] = useState<"hash" | "merkle" | "p2p">("hash");

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Interactive Visualizers</h1>
        <p className="text-muted-foreground mt-1">See how the core mechanisms of blockchain actually work.</p>
      </div>

      <div className="flex bg-card p-1 rounded-xl border border-border overflow-x-auto shadow-sm">
        <button onClick={() => setActiveTab("hash")} className={`px-6 py-3 rounded-lg font-bold text-sm transition-colors whitespace-nowrap ${activeTab === "hash" ? "bg-primary text-primary-foreground" : "hover:bg-secondary text-muted-foreground"}`}>Hash Functions</button>
        <button onClick={() => setActiveTab("merkle")} className={`px-6 py-3 rounded-lg font-bold text-sm transition-colors whitespace-nowrap ${activeTab === "merkle" ? "bg-primary text-primary-foreground" : "hover:bg-secondary text-muted-foreground"}`}>Merkle Trees</button>
        <button onClick={() => setActiveTab("p2p")} className={`px-6 py-3 rounded-lg font-bold text-sm transition-colors whitespace-nowrap ${activeTab === "p2p" ? "bg-primary text-primary-foreground" : "hover:bg-secondary text-muted-foreground"}`}>P2P Network</button>
      </div>

      {activeTab === "hash" && <HashVisualizer />}
      {activeTab === "merkle" && <MerkleVisualizer />}
      {activeTab === "p2p" && <P2PVisualizer />}
      
    </div>
  );
}

function HashVisualizer() {
  const [input, setInput] = useState("Hello Blockchain");
  const [hashResult, setHashResult] = useState("");

  useEffect(() => {
    sha256(input).then(setHashResult);
  }, [input]);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-8 animate-in slide-in-from-bottom-4">
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 p-3 rounded-xl text-primary"><RefreshCw size={24} /></div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Cryptographic Hash (SHA-256)</h2>
          <p className="text-muted-foreground text-sm mt-1">Change a single character and watch the entire hash change (Avalanche effect).</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-muted-foreground mb-2">Input Data</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-32 bg-background border border-border rounded-xl p-4 font-mono text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none"
            placeholder="Type anything here..."
          />
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-1 h-8 bg-border"></div>
          <div className="bg-secondary px-4 py-1 rounded-full text-xs font-bold font-mono border border-border">SHA-256</div>
          <div className="w-1 h-8 bg-border"></div>
        </div>

        <div>
          <label className="block text-sm font-bold text-muted-foreground mb-2">Fixed-Length Output Digest (256 bits / 64 hex chars)</label>
          <div className="w-full bg-slate-900 border border-slate-700 rounded-xl p-6 relative overflow-hidden break-all">
            <p className="font-mono text-green-400 text-lg md:text-xl tracking-wider leading-relaxed">{hashResult || "..."}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-6 border-t border-border">
        {['✓ Deterministic', '✓ Fixed length', '✓ One-way', '✓ Avalanche effect', '✓ Collision resistance'].map(t => (
           <div key={t} className="bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold p-3 rounded-lg text-center flex items-center justify-center">
             {t}
           </div>
        ))}
      </div>
    </div>
  );
}

function MerkleVisualizer() {
  const [txs, setTxs] = useState(["Tx1 Data", "Tx2 Data", "Tx3 Data", "Tx4 Data"]);
  const [hashes, setHashes] = useState<string[]>([]);
  const [midLevel, setMidLevel] = useState<string[]>([]);
  const [root, setRoot] = useState<string>("");

  useEffect(() => {
    async function calc() {
      const h = await Promise.all(txs.map(t => sha256(t)));
      setHashes(h.map(x => x.substring(0, 8))); // abbreviate
      
      const m1 = await sha256(h[0] + h[1]);
      const m2 = await sha256(h[2] + h[3]);
      setMidLevel([m1.substring(0,8), m2.substring(0,8)]);
      
      const r = await sha256(m1 + m2);
      setRoot(r.substring(0, 8));
    }
    calc();
  }, [txs]);

  const handleTxChange = (idx: number, val: string) => {
    const n = [...txs];
    n[idx] = val;
    setTxs(n);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-8 animate-in slide-in-from-bottom-4">
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 p-3 rounded-xl text-primary"><Network size={24} /></div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Merkle Tree Constructor</h2>
          <p className="text-muted-foreground text-sm mt-1">Edit any transaction to see how the change propagates up to the Merkle Root.</p>
        </div>
      </div>

      <div className="relative py-12 flex flex-col items-center gap-12 overflow-x-auto min-w-[600px]">
        {/* ROOT */}
        <div className="flex flex-col items-center relative">
          <div className="bg-primary text-primary-foreground font-mono font-bold p-4 rounded-xl shadow-lg border-2 border-primary/50 relative z-10 w-48 text-center transition-all duration-300">
             ROOT<br/>{root}
          </div>
          {/* Lines */}
          <svg className="absolute top-12 -z-10 w-[300px] h-12 overflow-visible">
             <path d="M 150 0 L 0 48" stroke="hsl(var(--border))" strokeWidth="2" fill="none" />
             <path d="M 150 0 L 300 48" stroke="hsl(var(--border))" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* MID LEVEL */}
        <div className="flex gap-20 relative w-full justify-center">
          {midLevel.map((m, i) => (
            <div key={i} className="flex flex-col items-center relative w-48">
              <div className="bg-secondary text-foreground font-mono font-bold p-3 rounded-xl border-2 border-border relative z-10 w-full text-center transition-all duration-300">
                 H{i*2+1}{i*2+2}<br/>{m}
              </div>
              <svg className="absolute top-10 -z-10 w-[160px] h-12 overflow-visible">
                 <path d="M 80 0 L 0 48" stroke="hsl(var(--border))" strokeWidth="2" fill="none" />
                 <path d="M 80 0 L 160 48" stroke="hsl(var(--border))" strokeWidth="2" fill="none" />
              </svg>
            </div>
          ))}
        </div>

        {/* LEAF HASHES */}
        <div className="flex gap-4 relative w-full justify-center mt-2">
           {hashes.map((h, i) => (
             <div key={i} className="bg-secondary/50 text-muted-foreground font-mono font-bold p-2 text-sm rounded-lg border border-border w-[130px] text-center transition-all duration-300">
                H{i+1}: {h}
             </div>
           ))}
        </div>
        
        {/* TRANSACTIONS */}
        <div className="flex gap-4 relative w-full justify-center mt-2">
           {txs.map((tx, i) => (
             <input 
               key={i}
               value={tx}
               onChange={(e) => handleTxChange(i, e.target.value)}
               className="bg-background text-foreground font-bold p-3 text-sm rounded-lg border-2 border-primary focus:ring-2 focus:ring-primary focus:outline-none w-[130px] text-center"
             />
           ))}
        </div>
      </div>
    </div>
  );
}

function P2PVisualizer() {
  const [nodes, setNodes] = useState<{id:number, x:number, y:number, hasTx:boolean}[]>([]);
  const [edges, setEdges] = useState<[number, number][]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tick, setTick] = useState(0);

  // Initialize network
  useEffect(() => {
    const n = [];
    const radius = 120;
    for (let i=0; i<8; i++) {
       const angle = (i / 8) * Math.PI * 2;
       n.push({
         id: i,
         x: Math.cos(angle) * radius + 150,
         y: Math.sin(angle) * radius + 150,
         hasTx: false
       });
    }
    setNodes(n);
    
    // Connect them somewhat randomly (P2P mesh)
    const e: [number, number][] = [
      [0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,0],
      [0,4], [1,5], [2,6]
    ];
    setEdges(e);
  }, []);

  // Gossip simulation
  useEffect(() => {
    if (!isPlaying) return;
    const t = setInterval(() => {
       setNodes(prev => {
         const next = [...prev];
         const hasTxIds = next.filter(x => x.hasTx).map(x => x.id);
         
         if (hasTxIds.length === next.length) {
           setIsPlaying(false);
           return next;
         }

         // For each node that has it, spread to 1 random connected neighbor that doesn't have it
         let changed = false;
         for (let id of hasTxIds) {
            const neighbors = edges.filter(e => e[0] === id || e[1] === id).map(e => e[0] === id ? e[1] : e[0]);
            const uninfected = neighbors.filter(nId => !next[nId].hasTx);
            if (uninfected.length > 0) {
               // Infect one
               const target = uninfected[Math.floor(Math.random() * uninfected.length)];
               next[target] = {...next[target], hasTx: true};
               changed = true;
               break; // One spread per tick looks better visually
            }
         }
         
         if (!changed) {
            // Force spread if stuck
            const uninfected = next.findIndex(x => !x.hasTx);
            if (uninfected !== -1) next[uninfected] = {...next[uninfected], hasTx: true};
         }

         setTick(k => k + 1);
         return next;
       });
    }, 800);
    return () => clearInterval(t);
  }, [isPlaying, edges]);

  const startGossip = () => {
    setNodes(n => n.map((x, i) => i === 0 ? {...x, hasTx: true} : {...x, hasTx: false}));
    setIsPlaying(true);
    setTick(0);
  };

  const reset = () => {
    setNodes(n => n.map(x => ({...x, hasTx: false})));
    setIsPlaying(false);
    setTick(0);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-8 animate-in slide-in-from-bottom-4">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-primary/10 p-3 rounded-xl text-primary"><Network size={24} /></div>
        <div>
          <h2 className="text-xl font-bold text-foreground">P2P Gossip Protocol</h2>
          <p className="text-muted-foreground text-sm mt-1">Watch how a transaction propagates epidemically avoiding any central server.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 justify-center py-4 text-sm font-medium">
         <div className="flex flex-col items-center gap-4">
            <div className="relative w-[300px] h-[300px] border border-border/50 rounded-xl bg-card overflow-hidden">
               {/* Edges */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none">
                 {edges.map((e, i) => {
                    const n1 = nodes[e[0]];
                    const n2 = nodes[e[1]];
                    if(!n1 || !n2) return null;
                    const active = n1.hasTx && n2.hasTx;
                    return (
                      <line 
                        key={i} 
                        x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} 
                        stroke={active ? "hsl(var(--primary))" : "hsl(var(--border))"} 
                        strokeWidth={active ? 3 : 1}
                        className="transition-all duration-500" 
                      />
                    )
                 })}
               </svg>
               {/* Nodes */}
               {nodes.map(n => (
                 <div 
                   key={n.id}
                   className={cn(
                     "absolute w-10 h-10 -ml-5 -mt-5 rounded-full flex items-center justify-center font-bold text-white shadow-md transition-all duration-500",
                     n.hasTx ? "bg-primary scale-110" : "bg-slate-700"
                   )}
                   style={{ left: n.x, top: n.y }}
                 >
                   {n.id}
                 </div>
               ))}
            </div>

            <div className="flex gap-4">
              <button onClick={startGossip} disabled={isPlaying} className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 disabled:opacity-50">
                <Play size={16}/> Broadcast
              </button>
               <button onClick={reset} className="flex items-center gap-2 px-6 py-2.5 bg-secondary text-foreground border border-border rounded-lg font-bold hover:bg-secondary/80">
                <RotateCcw size={16}/> Reset
              </button>
            </div>
         </div>
         
         <div className="max-w-sm bg-secondary/50 p-6 rounded-xl border border-border space-y-4">
            <h3 className="font-bold text-lg">Event Log</h3>
            <div className="h-48 overflow-y-auto space-y-2 font-mono text-xs">
              <div className="text-muted-foreground">Network Idle.</div>
              {nodes[0]?.hasTx && <div className="text-primary font-bold">➢ Node 0 created transaction.</div>}
              {tick > 0 && <div className="text-green-500">➢ Gossip propagating...</div>}
              {nodes.every(x => x.hasTx) && nodes.length > 0 && <div className="text-green-500 font-bold border-t border-border pt-2 mt-2">✓ 100% Network Saturation</div>}
            </div>
         </div>
      </div>
    </div>
  );
}
