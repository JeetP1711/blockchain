import type { Flashcard } from "./flashcards1";

export const flashcards2: Flashcard[] = [
  { id: 26, topic: "Consensus", front: "What is a 51% Attack?", back: "When a single entity gains control of more than 50% of the network's hash power, allowing them to reverse recent transactions." },
  { id: 27, topic: "Network", front: "What is a Mempool?", back: "A node's local holding area for unconfirmed transactions that are waiting to be picked up by a miner and placed into a block." },
  { id: 28, topic: "Blocks", front: "What is a Hard Fork?", back: "A permanent, backwards-incompatible divergence in the blockchain software rules, splitting the network essentially into two separate blockchains." },
  { id: 29, topic: "Use Cases", front: "What is Tokenization?", back: "The process of issuing a digital representation of a real-world asset (like property or stocks) onto a blockchain." },
  { id: 30, topic: "Use Cases", front: "What does DeFi mean?", back: "Decentralized Finance. The ecosystem of financial applications built on blockchain that operate without central intermediaries." },
  { id: 31, topic: "Cryptography", front: "What does Deterministic mean in hashing?", back: "Passing the exact same input through the function will consistently yield the exact same output hash." },
  { id: 32, topic: "Cryptography", front: "Why are hashes called 'One-Way' functions?", back: "Because it is computationally infeasible to mathematically reverse the output hash to discover the original input data (Pre-image resistance)." },
  { id: 33, topic: "Network", front: "What is SPV?", back: "Simplified Payment Verification. It allows \"Light\" clients to verify transactions using only block headers and a Merkle proof, without downloading the whole ledger." },
  { id: 34, topic: "Consensus", front: "What is the Byzantine Generals Problem?", back: "A logical challenge describing the difficulty of achieving consensus in a distributed system where components may fail or act maliciously." },
  { id: 35, topic: "Challenges", front: "What is the 'Oracle Problem'?", back: "The challenge of bringing external, real-world data onto the blockchain reliably, since the blockchain only verifies on-chain data." },
  { id: 36, topic: "Properties", front: "What is Double Spending?", back: "The risk that a digital currency can be spent twice. Blockchain solves this via distributed consensus." },
  { id: 37, topic: "Properties", front: "What does Trustless mean in blockchain?", back: "It doesn't mean trusting nobody; it means you trust the cryptographic math and protocol rules instead of a human intermediary." },
  { id: 38, topic: "Use Cases", front: "What is Supply Chain Provenance?", back: "Using blockchain to securely and transparently trace a physical product from its origin through all supply chain steps to the consumer." },
  { id: 39, topic: "Challenges", front: "What is a Layer 2 solution?", back: "An off-chain protocol (like Lightning Network or Rollup) that processes transactions quickly and cheaply, settling the final proof on the main blockchain." },
  { id: 40, topic: "Consensus", front: "What is Slashing?", back: "An economic penalty in Proof of Stake where a malicious validator loses a portion of their staked funds." },
  { id: 41, topic: "Blocks", front: "Why is the Merkle Root important in the Block Header?", back: "It provides a robust, fixed-size summary of all transactions, securing them while keeping the header lightweight." },
  { id: 42, topic: "Cryptography", front: "What is Collision Resistance?", back: "The mathematical improbability that two entirely different inputs will ever produce the exact same output hash." },
  { id: 43, topic: "Advanced", front: "What is a Directed Acyclic Graph (DAG)?", back: "An alternative DLT data structure (used by projects like IOTA or Hedera) that links transactions directly rather than batching them into blocks." },
  { id: 44, topic: "Advanced", front: "What does 'Turing Complete' mean regarding blockchains?", back: "The ability of a blockchain (like Ethereum) to execute arbitrary, complex code loops in its smart contracts, unlike Bitcoin's limited script." },
  { id: 45, topic: "Challenges", front: "What is State Bloat?", back: "The issue where the overall size of the blockchain ledger grows so massive that it becomes difficult for average users to run a full node." },
  { id: 46, topic: "Network", front: "What is a Full Node?", back: "A computer that independently downloads, stores, and validates the entire history of the blockchain." },
  { id: 47, topic: "Network", front: "What is an Eclipse Attack?", back: "When a malicious actor monopolizes all of a victim node's P2P connections to feed them fake block data." },
  { id: 48, topic: "Types", front: "Why do Private blockchains process transactions faster than Public ones?", back: "They use trusted nodes and avoid heavy PoW or global P2P gossip, enabling highly optimized throughput." },
  { id: 49, topic: "Consensus", front: "What is the Longest Chain Rule?", back: "The network rule stipulating that the chain with the most accumulated Proof of Work is considered the valid historical truth." },
  { id: 50, topic: "Network", front: "What is a Client-Server Architecture compared to P2P?", back: "In Client-Server, clients request data from a central hub. In P2P, all nodes both request and serve data directly to each other." }
];
