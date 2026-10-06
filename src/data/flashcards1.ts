export type Flashcard = {
  id: number;
  topic: string;
  front: string;
  back: string;
};

export const flashcards1: Flashcard[] = [
  { id: 1, topic: "Blockchain", front: "What is a Blockchain?", back: "A decentralized, distributed ledger that chains blocks of transactions together using cryptography, making it immutable and transparent." },
  { id: 2, topic: "DLT", front: "What does DLT stand for?", back: "Distributed Ledger Technology." },
  { id: 3, topic: "DLT", front: "What is Distributed Ledger Technology?", back: "A database maintained across multiple nodes without a central administrator, allowing all participants to share a unified state." },
  { id: 4, topic: "Network", front: "What is a Peer-to-Peer (P2P) Network?", back: "A network architecture where nodes communicate directly with each other without routing through a central server." },
  { id: 5, topic: "Network", front: "What is a Node?", back: "Any computer or device connected to the blockchain network that holds a copy of the ledger or participates in validation." },
  { id: 6, topic: "Blocks", front: "What is the Genesis Block?", back: "The very first block ever mined in a blockchain. It has no 'Previous Hash'." },
  { id: 7, topic: "Cryptography", front: "What is a Cryptographic Hash Function?", back: "A one-way mathematical function that converts data of any size into a unique, fixed-size string of characters." },
  { id: 8, topic: "Cryptography", front: "What is the Avalanche Effect?", back: "A property of hash functions where a tiny change in the input (even one bit) causes a radically different output." },
  { id: 9, topic: "Cryptography", front: "What does SHA-256 stand for?", back: "Secure Hash Algorithm 256-bit, used heavily in Bitcoin for consensus and block linking." },
  { id: 10, topic: "Blocks", front: "What does the 'Previous Block Hash' do?", back: "It is stored in the header of the new block, cryptographically linking it to the predecessor, securing the chain from tampering." },
  { id: 11, topic: "Blocks", front: "What is a Merkle Tree?", back: "A binary tree of hashes used to efficiently summarize and verify large sets of transactions within a block." },
  { id: 12, topic: "Blocks", front: "What is a Merkle Root?", back: "The single top hash of a Merkle Tree, representing the summary of all transactions. It is stored in the block header." },
  { id: 13, topic: "Consensus", front: "What is a Nonce?", back: "A 'Number Used Once'. It is iteratively changed by miners to alter the block header hash during Proof of Work." },
  { id: 14, topic: "Consensus", front: "What is Consensus?", back: "The mathematical and economic mechanism by which distributed nodes agree on the validity of transactions and the state of the ledger." },
  { id: 15, topic: "Consensus", front: "What is Proof of Work (PoW)?", back: "A consensus mechanism requiring miners to expend heavy computational energy to solve a cryptographic puzzle to propose a block." },
  { id: 16, topic: "Consensus", front: "What is Proof of Stake (PoS)?", back: "A consensus mechanism where validators lock up native cryptocurrency as collateral to propose and attest to blocks." },
  { id: 17, topic: "Properties", front: "What is Immutability in blockchain?", back: "The inability to alter or delete past data once it has been validated and appended to the chain." },
  { id: 18, topic: "Properties", front: "What is Decentralization?", back: "The dispersion and distribution of control, authority, and processing away from a central entity." },
  { id: 19, topic: "Types", front: "What is a Public Blockchain?", back: "An open, permissionless network where anyone can read, write, and participate in consensus." },
  { id: 20, topic: "Types", front: "What is a Private Blockchain?", back: "A permissioned network controlled by a single organization that dictates node participation and data access." },
  { id: 21, topic: "Types", front: "What is a Consortium Blockchain?", back: "A federated network where multiple organizations share governance and host a pre-approved set of consensus nodes." },
  { id: 22, topic: "Advanced", front: "What is a Smart Contract?", back: "Self-executing programmable code residing on the blockchain that triggers autonomously when predefined conditions are met." },
  { id: 23, topic: "Advanced", front: "What is the Blockchain Trilemma?", back: "The difficulty of achieving Decentralization, Security, and Scalability simultaneously." },
  { id: 24, topic: "Cryptography", front: "What is an Asymmetric Key Pair?", back: "A matched pair of a Public Key (used as an address to receive funds) and a Private Key (kept secret to sign transactions)." },
  { id: 25, topic: "Network", front: "What is a Gossip Protocol?", back: "The method by which nodes broadcast new transactions and blocks to their immediate peers, causing the data to spread epidemically across the network." }
];
