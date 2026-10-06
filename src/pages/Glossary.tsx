import React, { useState } from "react";
import { completeSyllabus } from "../data/syllabus";
import { BookOpen, Search } from "lucide-react";

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState("");

  const glossaryData = [
    { term: "Blockchain", simpleDef: "A digital public ledger where transactions are recorded in chained pages (blocks) that cannot be altered." },
    { term: "Block", simpleDef: "A container that holds a batch of recent transactions." },
    { term: "Ledger", simpleDef: "A record book of transactions." },
    { term: "DLT", simpleDef: "A shared database where everyone has their own identical copy." },
    { term: "Node", simpleDef: "A computer connected to the blockchain network." },
    { term: "Peer", simpleDef: "Another node that your specific computer is talking to." },
    { term: "P2P", simpleDef: "Computers talking directly to each other without a central server." },
    { term: "Hash", simpleDef: "A unique digital fingerprint for data." },
    { term: "SHA-256", simpleDef: "The specific math formula Bitcoin uses to create digital fingerprints." },
    { term: "Digest", simpleDef: "The output of a hash function." },
    { term: "Merkle Tree", simpleDef: "A tree of hashes used to squeeze thousands of transactions into one hash." },
    { term: "Merkle Root", simpleDef: "The single hash at the top of a Merkle Tree." },
    { term: "Nonce", simpleDef: "A random number miners guess to solve the puzzle." },
    { term: "Consensus", simpleDef: "The mechanism for everyone to agree on the rules and true state." },
    { term: "PoW (Proof of Work)", simpleDef: "Miners burning electricity to solve puzzles to win the right to create a block." },
    { term: "PoS (Proof of Stake)", simpleDef: "Validators locking up money (crypto) to win the right to create a block." },
    { term: "Decentralization", simpleDef: "No single boss or server controls the network." },
    { term: "Immutability", simpleDef: "Cannot be changed, deleted, or edited." },
    { term: "Public Blockchain", simpleDef: "Open to anyone, anywhere." },
    { term: "Private Blockchain", simpleDef: "Closed and controlled by one company." },
    { term: "Consortium Blockchain", simpleDef: "Shared and controlled by a group of companies." }
  ];

  const filtered = glossaryData.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.simpleDef.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Glossary</h1>
        <p className="text-muted-foreground mt-1">Search and review key blockchain terminology.</p>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        <input 
          type="text" 
          placeholder="Search glossary..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-card border border-border rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, i) => (
          <div key={i} className="bg-card border border-border p-5 rounded-xl shadow-sm hover:border-primary/50 transition-colors">
            <h3 className="font-bold text-lg text-primary mb-2 flex items-start gap-2">
              <BookOpen size={18} className="mt-1 shrink-0" />
              {item.term}
            </h3>
            <p className="text-muted-foreground text-sm font-medium">{item.simpleDef}</p>
          </div>
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No terms found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
}
