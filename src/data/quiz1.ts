export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type QuizQuestion = {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index 0-3
  explanation: string;
  difficulty: Difficulty;
  examImportance: number; // 1-5
};

export const quizQuestions1: QuizQuestion[] = [
  {
    id: 1,
    topic: "Evolution of Digital Transactions",
    question: "What was the primary vulnerability of pre-blockchain digital transaction systems?",
    options: ["They required physical exchange of tokens.", "They relied solely on central authorities acting as trusted third parties.", "They operated on an inherently decentralized architecture.", "They used cryptographic proofs instead of identities."],
    correctAnswer: 1,
    explanation: "Traditional systems require a central intermediary (bank). This creates a single point of failure and necessity of trust.",
    difficulty: "Medium",
    examImportance: 4
  },
  {
    id: 2,
    topic: "Evolution of Digital Transactions",
    question: "Which of the following is considered the earliest fully peer-to-peer form of transaction?",
    options: ["Physical cash", "Internet Banking", "Mobile Wallets", "SWIFT transfers"],
    correctAnswer: 0,
    explanation: "Physical cash is exchanged directly between peers without any central routing or intermediary at the time of transaction.",
    difficulty: "Easy",
    examImportance: 2
  },
  {
    id: 3,
    topic: "Evolution of Digital Transactions",
    question: "The 'double-spending problem' in digital currency was traditionally solved by:",
    options: ["Peer-to-peer networking", "Cryptographic hashes", "A central clearinghouse or bank", "Distributed consensus algorithms"],
    correctAnswer: 2,
    explanation: "Before blockchain, only a central ledger managed by an administrator could verify if a digital token had already been spent.",
    difficulty: "Medium",
    examImportance: 5
  },
  {
    id: 4,
    topic: "Centralized vs Distributed vs Decentralized",
    question: "A system where computational resources are spread across multiple physical locations, but control belongs to a single corporation, is strictly:",
    options: ["Decentralized and Distributed", "Centralized and Distributed", "Centralized and Non-distributed", "Decentralized and Non-distributed"],
    correctAnswer: 1,
    explanation: "The servers are spread out (Distributed), but control is held by one entity (Centralized).",
    difficulty: "Hard",
    examImportance: 5
  },
  {
    id: 5,
    topic: "Centralized vs Distributed vs Decentralized",
    question: "Which architecture fundamentally removes a 'single point of failure' while also removing a 'single point of control'?",
    options: ["Centralized architecture", "Client-Server architecture", "Distributed Database (e.g. AWS)", "Decentralized P2P architecture"],
    correctAnswer: 3,
    explanation: "Decentralized P2P removes both the technical vulnerability (single server) and governance vulnerability (single admin).",
    difficulty: "Medium",
    examImportance: 4
  },
  {
    id: 6,
    topic: "Distributed Ledger Technology",
    question: "Are all Distributed Ledgers considered Blockchains?",
    options: ["Yes, the terms are strictly synonymous.", "No, blockchain is a specific type of DLT that chains blocks.", "No, DLT is a specific type of blockchain.", "Yes, both require mining to function."],
    correctAnswer: 1,
    explanation: "Blockchain is a sub-category of DLT. Other DLTs (like DAGs) exist that do not use chained blocks.",
    difficulty: "Medium",
    examImportance: 5
  },
  {
    id: 7,
    topic: "Blockchain Fundamentals",
    question: "What guarantees the 'immutability' in a blockchain?",
    options: ["A legal contract between nodes.", "High-capacity server hardware.", "Cryptographic linking of sequential blocks.", "The anonymity of participants."],
    correctAnswer: 2,
    explanation: "Because each block contains the cryptographic hash of the previous one, tampering with history alters the mathematical chain.",
    difficulty: "Medium",
    examImportance: 5
  },
  {
    id: 8,
    topic: "Blockchain Architecture",
    question: "In the layered architecture of blockchain, where do Proof of Work and Proof of Stake primarily operate?",
    options: ["The Network Layer", "The Consensus Layer", "The Application Layer", "The Data Layer"],
    correctAnswer: 1,
    explanation: "PoW and PoS are consensus algorithms, operating on the Consensus Layer to agree on validity.",
    difficulty: "Easy",
    examImportance: 4
  },
  {
    id: 9,
    topic: "Blocks and Chain Structure",
    question: "What specific parameter connects Block N to Block N-1?",
    options: ["The Merkle Root", "The Timestamp", "The Previous Block Hash", "The Nonce"],
    correctAnswer: 2,
    explanation: "Block N stores the hash of Block N-1's header in its own header, forming a verifiable chronological chain.",
    difficulty: "Medium",
    examImportance: 5
  },
  {
    id: 10,
    topic: "Blocks and Chain Structure",
    question: "If a single transaction inside an older block is modified, what occurs?",
    options: ["Nothing, if the block was already mined.", "The modified transaction is automatically deleted.", "The Merkle Root changes, causing that block's hash to change, thus invalidating subsequent blocks.", "The network temporarily forks but accepts it."],
    correctAnswer: 2,
    explanation: "Due to the avalanche effect, modifying a transaction alters the Merkle Root, and consequently the block hash, breaking the previous hash link in the next block.",
    difficulty: "Hard",
    examImportance: 5
  },
  {
    id: 11,
    topic: "Hash Functions",
    question: "Which of the following is NOT a property of a cryptographic hash function?",
    options: ["Deterministic", "Reversible with a public key", "Avalanche effect", "Collision-resistant"],
    correctAnswer: 1,
    explanation: "Hash functions are strictly one-way (pre-image resistant). They cannot be reversed or decrypted.",
    difficulty: "Medium",
    examImportance: 5
  },
  {
    id: 12,
    topic: "Hash Functions",
    question: "If input 'HELLO' yields a 256-bit hash, how long will the output hash be for an input of a 5 GB movie file?",
    options: ["Calculated proportionally to size (e.g. 5 GB hash)", "256 bits", "Dependent on the computational power of the node", "It cannot hash a file that large"],
    correctAnswer: 1,
    explanation: "A core property of hash functions is fixed-length output regardless of input size.",
    difficulty: "Easy",
    examImportance: 4
  },
  {
    id: 13,
    topic: "Merkle Trees",
    question: "What is the primary purpose of using a Merkle Tree in a block header?",
    options: ["To encrypt the transactions for privacy.", "To reduce the computational effort of mining.", "To provide a single, lightweight hash summarizing all transactions for efficient verification.", "To allow miners to increase block sizes indefinitely."],
    correctAnswer: 2,
    explanation: "Merkle trees compress the proof of thousands of transactions into a single 32-byte root hash, enabling Simple Payment Verification (SPV).",
    difficulty: "Hard",
    examImportance: 5
  },
  {
    id: 14,
    topic: "Merkle Trees",
    question: "In a Merkle Tree with 4 transactions (A,B,C,D), how is the root calculated?",
    options: ["Hash(A+B+C+D)", "Hash(Hash(A+B) + Hash(C+D))", "Hash(A) + Hash(B) + Hash(C) + Hash(D)", "Hash(D - Hash(A+B+C))"],
    correctAnswer: 1,
    explanation: "It pairwise hashes from the bottom up. A and B are hashed. C and D are hashed. Their results are concatenated and hashed for the root.",
    difficulty: "Hard",
    examImportance: 4
  },
  {
    id: 15,
    topic: "Peer-to-Peer Networks",
    question: "How do transactions propagate through a blockchain network?",
    options: ["Via a central routing server.", "Using a Gossip Protocol where nodes relay valid data to peers.", "Directly sending an email to a miner.", "By uploading to a cloud storage bucket."],
    correctAnswer: 1,
    explanation: "Nodes use an epidemic gossip protocol to rapidly push/pull data to/from random interconnected peers.",
    difficulty: "Medium",
    examImportance: 3
  },
  {
    id: 16,
    topic: "Consensus Mechanisms",
    question: "What does the 'Nonce' do in a Proof of Work system?",
    options: ["It identifies the node.", "It is a random number iteratively changed to find a valid block hash.", "It decrypts the transactions.", "It timestamps the block creation."],
    correctAnswer: 1,
    explanation: "Miners iterate the Nonce (number used once) so the block header hash falls below the network's difficulty target.",
    difficulty: "Hard",
    examImportance: 5
  },
  {
    id: 17,
    topic: "Consensus Mechanisms",
    question: "Instead of burning energy to mine, Proof of Stake (PoS) achieves consensus by requiring validators to:",
    options: ["Perform hardware benchmarks.", "Lock up native cryptocurrency as collateral.", "Solve highly complex Sudoku variants.", "Achieve high up-time on centralized servers."],
    correctAnswer: 1,
    explanation: "PoS uses economic stakes. If a validator acts maliciously, their 'staked' funds are slashed.",
    difficulty: "Medium",
    examImportance: 5
  },
  {
    id: 18,
    topic: "Consensus Mechanisms",
    question: "What is the primary vulnerability targeted by consensus mechanisms?",
    options: ["Data storage bloat", "Double spending and malicious history alteration", "P2P network discovery", "User password loss"],
    correctAnswer: 1,
    explanation: "Byzantine agreement aims to prevent nodes from contradicting the single truth (e.g. spending funds twice).",
    difficulty: "Medium",
    examImportance: 4
  },
  {
    id: 19,
    topic: "Blockchain Types",
    question: "A blockchain controlled by a group of five regional banks to settle cross-border trades is an example of:",
    options: ["Public Blockchain", "Private Blockchain", "Consortium Blockchain", "Traditional Database"],
    correctAnswer: 2,
    explanation: "A Consortium blockchain is federated; control is shared among a group of pre-approved organizations.",
    difficulty: "Medium",
    examImportance: 4
  },
  {
    id: 20,
    topic: "Blockchain Types",
    question: "Which blockchain type offers the highest degree of decentralization and censorship resistance?",
    options: ["Public Permissionless Blockchain", "Private Blockchain", "Consortium Blockchain", "Federated Database"],
    correctAnswer: 0,
    explanation: "Public blockchains (like Bitcoin) allow anyone to participate, making them extremely hard to censor or shut down.",
    difficulty: "Easy",
    examImportance: 5
  },
  // Adding more concepts quickly...
  {
    id: 21,
    topic: "Use Cases",
    question: "What is the primary advantage of using blockchain in supply chain management?",
    options: ["Speeding up physical transport", "Providing an immutable, verifiable trail of custody (provenance)", "Lowering the cost of fuel", "Hiding transport data from competitors"],
    correctAnswer: 1,
    explanation: "Provenance allows instant verification of an item's origin and journey through the supply chain.",
    difficulty: "Easy",
    examImportance: 4
  },
  {
    id: 22,
    topic: "Challenges",
    question: "What constitutes the 'Blockchain Trilemma'?",
    options: ["Speed, Cost, and UI", "Decentralization, Security, and Scalability", "Privacy, Hash Rate, and Tokens", "Public, Private, and Consortium"],
    correctAnswer: 1,
    explanation: "The Trilemma states that it is tremendously difficult to maximize Decentralization, Security, and Scalability simultaneously.",
    difficulty: "Medium",
    examImportance: 5
  },
  {
    id: 23,
    topic: "Blockchain Fundamentals",
    question: "Smart Contracts are:",
    options: ["Legal documents uploaded as PDFs.", "Self-executing code residing on the blockchain.", "Manual agreements between node operators.", "The consensus rules of the entire network."],
    correctAnswer: 1,
    explanation: "Smart Contracts are deterministic programs deployed on the blockchain that execute automatically when conditions are met.",
    difficulty: "Medium",
    examImportance: 4
  },
  {
    id: 24,
    topic: "Challenges",
    question: "What does 'State Bloat' refer to?",
    options: ["The network generating too many useless tokens.", "The continuously growing size of the ledger that full nodes must store.", "High transaction fees during bull markets.", "Nodes producing orphaned blocks."],
    correctAnswer: 1,
    explanation: "Because blockchain is append-only, the ledger strictly grows, making it harder to run a full node over time.",
    difficulty: "Hard",
    examImportance: 3
  },
  {
    id: 25,
    topic: "Hash Functions",
    question: "What does the 'Avalanche Effect' imply in cryptography?",
    options: ["A massive surge in network traffic.", "A small change in input causes a drastic change in output.", "Miner rewards decreasing over time.", "Nodes going offline simultaneously."],
    correctAnswer: 1,
    explanation: "A 1-bit change in the input cascades through the hashing algorithm to produce a statistically uncorrelated output.",
    difficulty: "Medium",
    examImportance: 5
  }
];
