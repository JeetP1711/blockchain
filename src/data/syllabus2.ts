import type { SyllabusTopic } from "./syllabus1";

export const syllabusData2: SyllabusTopic[] = [
  {
    id: "blockchain-architecture",
    title: "5. Blockchain Architecture",
    importance: 5,
    timeEst: "45 min",
    whatIsIt: "The layered structure and technical components that make up a fully functioning blockchain network.",
    whyNeeded: "To understand how the abstract concepts of decentralization and cryptography are translated into a working software system.",
    simpleExp: "A blockchain isn't just one program. It's built in layers. At the bottom, there is the internet (P2P network). Above that is the rulebook (Consensus). Above that is the ledger (Blocks & Chain). Finally, at the top, are the users and apps interacting with the system.",
    detailedExp: "Blockchain architecture is typically conceptualized in layers:\n\n1. Hardware/Infrastructure Layer: The physical servers/nodes distributed globally.\n2. Data Layer: The physical structure of the blockchain. Includes blocks, transactions, digital signatures, and Merkle trees. Everything is serialized and saved to disk.\n3. Network Layer: The P2P protocol. Handles node discovery, broadcasting of transactions, and propagation of blocks.\n4. Consensus Layer: The most critical layer. Contains the rules for validating blocks (PoW, PoS) and resolving forks.\n5. Application/Presentation Layer: Smart contracts, dApps, user wallets, and RPC interfaces.\n\nThe entire architecture is designed to maintain a unified state across a trustless environment.",
    howItWorks: "Users interact with the Application layer (e.g., sending crypto via a wallet). The wallet signs a transaction and sends it to a node via RPC. The node (Network layer) broadcasts it to peers. Miners pick it up, hash it into a Merkle root (Data layer), solve the cryptographic puzzle (Consensus layer), and broadcast the new block back through the network.",
    components: [
      "Users/Wallets: Initiate transactions.",
      "Nodes: Maintain the network and ledger.",
      "P2P Network: Gossips data worldwide instantly.",
      "Consensus Engine: Decides the truth.",
      "Cryptographic Primitives: Hashing and Signatures."
    ],
    diagram: "              USERS\n                ↓\n          TRANSACTIONS\n                ↓\n        ┌───────────────┐\n        │  P2P NETWORK  │\n        └───────────────┘\n                ↓\n            VALIDATION\n                ↓\n            CONSENSUS\n                ↓\n              BLOCK\n                ↓\n          BLOCKCHAIN\n                ↓\n        DISTRIBUTED LEDGER",
    example: "In Ethereum architecture, a user signs a transaction with MetaMask. It goes to an Infura node, which broadcasts it to the P2P network. Proof of Stake validators reach consensus, and the state of the Ethereum Virtual Machine (EVM) is updated.",
    advantages: [
      "Modular design allows upgrading specific layers.",
      "Resilient: Failure in one node doesn't collapse the network.",
      "Transparent interaction from base layer to application layer."
    ],
    limitations: [
      "Layering creates latency.",
      "High complexity in ensuring security across all layers.",
      "Storage requirements balloon over time."
    ],
    relatedConcepts: ["Transaction Lifecycle", "Layer 1 vs Layer 2", "Node Types (Full, Light)"],
    commonMistakes: [
      "Confusing the Application (like a Wallet) with the Blockchain itself (the underlying Network and Data layers)."
    ],
    examAnswer: {
      marks2: "Blockchain architecture consists of layers: infrastructure (nodes), network (P2P), data (blocks and hashes), consensus (rules), and application (wallets/smart contracts).",
      marks5: "Architecture:\n1. Application: Where users generate transactions via wallets.\n2. Network: A P2P gossip protocol where nodes broadcast transactions without central routing.\n3. Data: Transactions are grouped into structured blocks using Merkle trees and chained with hashes.\n4. Consensus: Miners/Validators apply algorithmic rules (PoW/PoS) to agree on the next valid block.\nTogether, these layers form a secure, trustless state machine.",
      marks7: "The architecture of a blockchain is decentralized and layered.\n\nKey Components:\n- Node Network: Full nodes host the entire ledger; light nodes rely on full nodes.\n- Data Structure: The ledger is appending blocks of grouped transactions.\n- Cryptography: Transactions use asymmetric encryption (public/private keys) for identity and authorization.\n- Consensus: Algorithms ensure mathematical agreement in an untrusted environment.\n\nLifecycle:\nTransaction created -> Signed -> Broadcast -> Validated in Mempool -> Included in Block by Miner -> Block validated via Consensus -> Added to Chain -> State Updated.",
      marks10: "INTRODUCTION: A blockchain is a complex software architecture designed to achieve trustless consensus on a distributed ledger.\n\nLAYERS OF ARCHITECTURE:\n1. Hardware/Network Layer: Relies on the internet and a peer-to-peer (P2P) protocol. Nodes (computers) communicate via 'gossip protocols' to ensure all participants have the latest data.\n2. Data Layer: Defines how information is stored. This involves Blocks (header and body), Cryptographic Hashes (SHA-256), Digital Signatures (ECDSA), and Merkle Trees for efficient data verification.\n3. Consensus Layer: The core innovation. It determines how nodes agree on the network state. E.g., Proof of Work requires computational expenditure; Proof of Stake requires capital lockup.\n4. Execution/Application Layer: Where the logic runs. It handles the processing of transactions, UTXO model or Account model state changes, and Smart Contract execution (e.g., EVM).\n\nTRANSACTION FLOW:\nUser -> Sign Tx -> P2P Broadcast -> Mempool -> Miner Selection -> Block Creation -> Network Validation -> Ledger Update.\n\nCONCLUSION: The multi-layered architecture ensures that no single entity can alter the execution or data, providing extreme security and uptime."
    },
    quickRevision: "Architecture = Application + Consensus + Data + Network Layers. Understand the transaction flow from User -> P2P -> Miner -> Block -> Ledger.",
    selfTest: [
      "Describe the transaction lifecycle.",
      "What is the function of the Network layer in a blockchain?",
      "Why is the Consensus layer considered the most critical part of the architecture?"
    ]
  },
  {
    id: "blocks-and-chain-structure",
    title: "6. Blocks and Chain Structure",
    importance: 5,
    timeEst: "35 min",
    whatIsIt: "The fundamental data structure defining how transactions are batched, formatted, and cryptographically linked.",
    whyNeeded: "To ensure historical immutability. By linking blocks, altering one transaction requires altering the entire subsequent chain.",
    simpleExp: "A block is like a sealed envelope containing forms (transactions). On the outside of the envelope is written: 1) The time it was sealed, 2) A summary of the forms inside, and most importantly 3) The exact unique serial number of the PREVIOUS envelope. Because each envelope references the one before it, they form an unbreakable chain.",
    detailedExp: "A block is composed of a Block Header and a Block Body.\n\nThe Block Body contains a list of validated transactions. \n\nThe Block Header is small (e.g., 80 bytes in Bitcoin) and contains metadata:\n1. Version Number.\n2. Previous Block Hash: The cryptographic link to the parent block.\n3. Merkle Root: A single hash representing all transactions in the body.\n4. Timestamp: When the block was created.\n5. Difficulty Target: How hard the consensus puzzle currently is.\n6. Nonce: A random number adjusted by miners to solve the Proof of Work puzzle.\n\nThe 'Chain' is formed because Block 101's header contains the hash of Block 100's header. If a single bit of data changes in Block 100, its hash changes completely. This means Block 101's 'Previous Hash' reference is broken, invalidating the entire chain from that point onward.",
    howItWorks: "Miners collect transactions, hash them into a Merkle tree, and put the root in a new block header. They then repeatedly hash the header while incrementing the Nonce until the resulting hash meets the network's difficulty target. Once found, this hash becomes the block's identifier, and the next block will use it as its 'Previous Hash'.",
    components: [
      "Previous Hash: Ensures chain integrity.",
      "Timestamp: Provides temporal context.",
      "Transactions: The actual payload.",
      "Merkle Root: Summary of payload.",
      "Nonce: Random number for PoW.",
      "Block Hash: The final calculated ID of this block."
    ],
    diagram: "┌─────────────────────────────┐\n│           BLOCK             │\n├─────────────────────────────┤\n│ Block Number / Height       │\n│ Timestamp                  │\n│ Transactions               │\n│ Previous Block Hash        │\n│ Merkle Root                │\n│ Nonce                      │\n│ Block Hash                 │\n└─────────────────────────────┘\n\nBlock 1\n   ↓\nBlock 2\n   ↓\nBlock 3\n   ↓\nBlock 4",
    example: "The Genesis Block (Block 0) of Bitcoin has a hardcoded message and no previous hash. Every single block since 2009 traces its lineage chronologically and cryptographically back to that exact block.",
    advantages: [
      "Tamper-evident design: any change is immediately mathematically obvious.",
      "Lightweight verification: light clients only need block headers to verify the chain."
    ],
    limitations: [
      "Rigid structure means fixing errors or doing upgrades (forking) is very difficult.",
      "Data must be highly structured; large files cannot be effectively stored on-chain."
    ],
    relatedConcepts: ["Hash Functions", "Merkle Trees", "Genesis Block", "Hard Fork"],
    commonMistakes: [
      "Thinking the 'Previous Hash' links to the transactions directly. (It links to the Previous Block HEADER, which indirectly links to the transactions via the Merkle Root)."
    ],
    examAnswer: {
      marks2: "A block consists of a header and body. The header contains a timestamp, a nonce, a Merkle root of transactions (in the body), and the hash of the previous block, chaining them together.",
      marks5: "Block Structure:\n- Block Header: Contains metadata needed for validation.\n  - Previous Block Hash: Cryptographically links to the preceding block.\n  - Merkle Root: A hash representing all transactions in the block.\n  - Timestamp: Creation time.\n  - Nonce: A number mined to satisfy Proof of Work.\n- Block Body: Contains the list of transactions.\nThe continuous linking of 'Previous Hashes' creates a chain that is computationally impractical to alter, guaranteeing immutability.",
      marks7: "The fundamental data structure of blockchain is an append-only linked list protected by hashes.\n\nStructure:\n1. Previous Hash: This is the most crucial element. Because the hash of Block N is derived partly from the hash of Block N-1, any alteration in Block N-1 completely changes its hash, breaking the link in Block N.\n2. Merkle Root: Instead of hashing every transaction with the header, transactions are hashed into a Merkle Tree. Only the single 32-byte Merkle Root is stored in the header, making the header lightweight.\n3. Nonce: Used in consensus. Miners iterate this number to find a valid block hash.\n\nThis structure ensures that historical records are mathematically solidified as subsequent blocks are appended onto them.",
      marks10: "INTRODUCTION: The literal 'chain' in blockchain is established through the continuous algorithmic linking of discrete 'blocks' of data.\n\nBLOCK COMPONENTS:\n1. The Header: The operational core of the block.\n   - Version: Tracks protocol upgrades.\n   - Previous Block Hash: The cryptographic pointer to the parent block. This ensures chronology and immutability.\n   - Merkle Root: A compressed cryptographic summary of all transactions. Ensures transaction integrity without bloating the header.\n   - Timestamp: Unix time of creation.\n   - Difficulty Target & Nonce: Parameters specific to Proof of Work consensus.\n2. The Body: Contains the transaction list. The first transaction is usually the 'Coinbase' transaction, creating new coins for the miner.\n\nTHE CHAINING MECHANISM:\nThe integrity of the blockchain relies on the Avalanche Effect of hash functions. If an attacker modifies Transaction X in Block 50, the Merkle Root of Block 50 changes. This changes the entire Header of Block 50, altering Block 50's Hash. Therefore, Block 51 (which points to the old hash of Block 50) is now invalid, as are Blocks 52, 53, etc. The attacker would have to re-mine the Nonce for Block 50 and every subsequent block simultaneously, which requires controlling the majority of the network's computing power (51% attack).\n\nCONCLUSION: The block and chain structure elegantly combines hashing and tree data structures to create a tamper-proof historical ledger."
    },
    quickRevision: "Header (PrevHash, MerkleRoot, Nonce, Time) + Body (Transactions). PrevHash creates the chain. Changing history requires breaking and recalculating all subsequent blocks.",
    selfTest: [
      "What is a Nonce, and why is it needed?",
      "How does changing one transaction affect the whole block?",
      "Why does a light client only need the block headers?"
    ]
  },
  {
    id: "hash-functions",
    title: "7. Hash Functions",
    importance: 5,
    timeEst: "45 min",
    whatIsIt: "A mathematical algorithm that maps data of any arbitrary size to a bit array of a fixed size (the hash digest).",
    whyNeeded: "Hashing provides the cryptographic foundation for block linking, transaction integrity (Merkle trees), and consensus (PoW) in a blockchain.",
    simpleExp: "Think of a hash function as a digital meat grinder. You can drop a whole cow (a massive file) or a single steak (a small password) into it, and you'll always get exactly a 1-pound hamburger patty (the fixed-length hash) out. But looking at the patty, you can NEVER figure out what the cow looked like. Furthermore, if you change one hair on the cow before grinding, the resulting patty looks completely, 100% different.",
    detailedExp: "A cryptographic hash function (like SHA-256) is a deterministic one-way algorithm.\n\nProperties:\n1. Deterministic: The exact same input will always produce the exact same output.\n2. Fixed-length output: Inputting 'A' or the entire works of Shakespeare both yield exactly 256 bits (64 hex characters) in SHA-256.\n3. Pre-image resistance (One-way): It is computationally infeasible to reverse-engineer the input from the hash.\n4. Avalanche effect: A tiny change in input (even flipping 1 bit) results in an uncorrelated, completely different output hash.\n5. Collision resistance: It is statistically practically impossible for two different inputs to ever produce the exact same output hash.\n\nNOTE: Hashing is NOT encryption! Encryption is designed to be reversible with a key. Hashing is explicitly one-way.",
    howItWorks: "The algorithm breaks the input data into chunks and processes them through a series of logical and mathematical operations (AND, OR, XOR, rotations), heavily mixing the bits. The result is the final digest.",
    components: [
      "Input Message: Any digital data.",
      "Hash Algorithm: e.g., SHA-256, Keccak-256.",
      "Digest / Hash: The fixed-length output."
    ],
    diagram: "INPUT (Any size)\n  ↓\nHASH FUNCTION (Math)\n  ↓\nFIXED-LENGTH DIGEST\n\nExample:\n\"Hello Blockchain\"\n       ↓\n    SHA-256\n       ↓\n8a4f....9c21\n\n\"hello Blockchain\" (small 'h')\n       ↓\n    SHA-256\n       ↓\nf7b9....d45e (Completely different!)",
    example: "Bitcoin uses SHA-256 twice (Double SHA-256) for creating the block hash and Merkle root. Ethereum uses Keccak-256 (a variant of SHA-3).",
    advantages: [
      "Extremely fast to compute.",
      "Perfect for verifying data integrity without sending the massive data itself.",
      "Creates pseudorandomness required for Proof of Work."
    ],
    limitations: [
      "Susceptible to quantum computing attacks long-term (though hash functions are generally more quantum-resistant than public key cryptography).",
      "Prone to dictionary/rainbow table attacks if inputs are short and predictable (e.g. passwords, not an issue for complex blocks)."
    ],
    relatedConcepts: ["Public Key Cryptography", "Avalanche Effect", "Merkle Trees", "SHA-256"],
    commonMistakes: [
      "Calling hashing \"encryption/decryption\". (Hashing CANNOT be decrypted. It is one-way).",
      "Thinking hashes can organically collide easily. (The number of possible SHA-256 hashes is roughly equal to the number of atoms in the visible universe)."
    ],
    examAnswer: {
      marks2: "A cryptographic hash function mathematically maps data of any size to a unique, fixed-size string (digest). It is one-way, deterministic, and highly sensitive to input changes.",
      marks5: "Hash functions are the backbone of blockchain security. Key properties:\n1. Deterministic: Identical inputs always yield identical hashes.\n2. Avalanche Effect: A minute change in input completely alters the output hash.\n3. One-Way: Impossible to reverse the hash to find the original data.\n4. Collision Resistant: Infeasible to find two different inputs that produce the same hash.\nThey are used to link blocks (Previous Hash) and summarize transactions (Merkle Root).",
      marks7: "Cryptographic hash functions (like SHA-256) transform arbitrary input into fixed-length output. Unlike encryption, hashing is a non-reversible operation.\n\nFive Core Principles:\n1. Determinism: Ensure network-wide agreement on data.\n2. Rapid Computation: Nodes can verify data instantly.\n3. Pre-image Resistance: Secures against reverse engineering.\n4. Small variations (Avalanche Effect): Changing 'Jon' to 'John' results in a completely disparate hash, making tampering blatantly obvious.\n5. Collision Resistance: Secures against identical hash generation by attackers.\n\nIn blockchain, hashes act as unique, unforgeable digital fingerprints for data.",
      marks10: "INTRODUCTION: Cryptographic hashing is the fundamental algorithmic pillar upon which distributed ledger immutability relies.\n\nDEFINITION: A hash function takes an input message of arbitrary length and outputs a fixed-length string, called a digest.\n\nCHARACTERISTICS & BLOCKCHAIN APPLICATIONS:\n1. Determinism: Ensures that any node hashing the same block header will derive the exact same block hash, reaching consensus.\n2. Fixed Size: Regardless of whether a block has 10 transactions or 10,000, the Merkle Root remains 32 bytes (in SHA-256). This keeps block headers uniformly small.\n3. Pre-image Resistance (One-Way Property): Ensures data cannot be reverse-engineered. This is critical for address generation from public keys.\n4. Avalanche Effect: Demonstrates immutability. If a hacker alters a transaction by a single bit, the transaction hash changes radically -> the Merkle root changes radically -> the block header hash changes radically -> the chain is broken.\n5. Puzzle Friendliness / Target Difficulty: In Proof of Work, miners must find an input that produces a hash starting with a certain number of zeroes. Because hashes are pseudo-random, the only way to find this is brute-force power.\n\nCONCLUSION: Without cryptographic hash functions, blockchain could not maintain its chaining mechanism, transactional integrity, or mining consensus."
    },
    quickRevision: "Hashing is NOT encryption—it's one-way. Remember the 5 properties: Deterministic, Fixed-length, One-way (pre-image resistant), Avalanche effect, Collision resistant.",
    selfTest: [
      "Why is it incorrect to say that a blockchain 'encrypts' data using SHA-256?",
      "Explain the Avalanche effect.",
      "How does the fixed-length property help block header design?"
    ]
  },
  {
    id: "merkle-trees",
    title: "8. Merkle Trees",
    importance: 5,
    timeEst: "40 min",
    whatIsIt: "A binary tree data structure used specifically to efficiently summarize and verify the integrity of large sets of data (transactions).",
    whyNeeded: "If a block has 2,000 transactions, putting all their hashes in the block header would make it massive. A Merkle tree compresses this down to ONE single hash (the root), while still mathematically proving that all 2,000 transactions exist.",
    simpleExp: "Imagine an elimination tournament bracket (like a tennis tournament or the World Cup), but running backwards. At the bottom, you have 4 players (transactions). You hash player 1 and 2 together to win a spot. You hash 3 and 4 together. Then you hash the two winners together to get the ultimate champion. The final champion is the 'Merkle Root'. If ANY player at the bottom changes their name, the champion at the top changes completely.",
    detailedExp: "A Merkle tree (or Hash tree) is a structure where every 'leaf node' is labelled with the cryptographic hash of a data block (transaction), and every non-leaf node (branch) is labelled with the combined hash of its child nodes.\n\nTransactions are grouped in pairs. T1 and T2 are hashed separately to get H1 and H2. Then H1 and H2 are concatenated and hashed together to get H12. This pairwise hashing continues up the tree until a single hash remains: the Merkle Root.\n\nCrucially, it allows for 'Simple Payment Verification' (SPV). A user can prove a specific transaction is in a block without downloading the whole block. They only need the transaction hash, the Merkle root, and the specific 'Merkle Path' (the sibling branch hashes).",
    howItWorks: "1. Hash every transaction individually.\n2. Group hashes in pairs.\n3. Hash the paired hashes together.\n4. Repeat layer by layer upwards.\n5. If there is an odd number of hashes, duplicate the last one to make a pair.\n6. The final single hash is the Merkle Root.",
    components: [
      "Leaf Nodes: Hashes of individual transactions.",
      "Branch Nodes: Hashes of the child nodes below them.",
      "Merkle Root: The final root node hash summarizing the entire tree.",
      "Merkle Path/Proof: The specific subset of hashes needed to verify one transaction."
    ],
    diagram: "                    MERKLE ROOT\n                         H1234\n                       /       \\\n                    H12         H34\n                   /  \\       /  \\\n                 H1    H2    H3    H4\n                 │     │     │     │\n                T1    T2    T3    T4",
    example: "If T2 is maliciously altered, H2 changes. Since H2 is different, Hash(H1+H2) = H12 changes. Since H12 is different, Hash(H12+H34) = H1234 (Root) changes. The entire chain linkage is thus broken by altering one transaction.",
    advantages: [
      "Extreme space efficiency (compresses thousands of txs into 32 bytes).",
      "Fast verification ( logarithmic time complexity O(log N) instead of linear).",
      "Enables light nodes (SPV) on mobile devices."
    ],
    limitations: [
      "Requires tree recalculation if a transaction is added or removed dynamically (though blocks are static once mined)."
    ],
    relatedConcepts: ["Simple Payment Verification (SPV)", "Hash Functions", "Binary Trees"],
    commonMistakes: [
      "Thinking the Merkle Root contains the data itself. (It is just a hash summary; the data remains in the block body).",
      "Not knowing what happens with an odd number of transactions. (The last transaction hash is duplicated to form a pair)."
    ],
    examAnswer: {
      marks2: "A Merkle tree is a binary hash tree used to efficiently summarize all transactions in a block into a single hash, called the Merkle root, ensuring data integrity.",
      marks5: "A Merkle tree organizes transaction hashes into a hierarchical tree data structure.\n- Bottom Layer: Individual transaction hashes (leaves).\n- Middle Layers: Parent nodes formed by hashing two child nodes together.\n- Top: The Merkle Root, a single 32-byte hash summarizing the whole tree.\nBenefit: It allows light clients to verify a transaction using a Merkle Proof (O(log n) complexity) without downloading the entire blockchain.",
      marks7: "The Merkle tree mathematically secures the contents of a block while maintaining efficiency.\n\nMechanism:\nTransactions A, B, C, D are hashed (Ha, Hb, Hc, Hd).\nHa and Hb are combined -> Hash(Ha+Hb) = Hab.\nHc and Hd -> Hcd.\nHab and Hcd -> Habcd (Merkle Root).\n\nIf Transaction B is altered, Hb changes -> Hab changes -> Habcd (Root) changes. \nThe root is placed in the block header. This means to tamper with a transaction, an attacker must recalculate the root and thus the PoW block hash. It also enables SPV (Simplified Payment Verification) for mobile wallets.",
      marks10: "INTRODUCTION: Within blockchain architectures, scalability and verification efficiency are maintained using Merkle Trees, an invention by Ralph Merkle in 1979.\n\nCONSTRUCTION:\n1. All transactions in a proposed block are cryptographically hashed (e.g., Double SHA-256).\n2. These leaf hashes are paired. If the number of leaves is odd, the final hash is duplicated.\n3. Paired hashes are concatenated and hashed again to form a parent node.\n4. This recursive process bubbles up to a single top node: the Merkle Root.\n\nROLE IN IMMUTABILITY:\nDue to the avalanche effect of hash functions, completely altering one bit in one transaction propagates up the tree, drastically changing the Merkle Root. Since the Merkle Root resides in the Block Header, the Block Hash changes, securing the transactions.\n\nROLE IN SCALABILITY (SPV):\nFull nodes download the entire block body (gigabytes of data). Light wallets cannot. Using a Merkle Proof, a light wallet checks if Tx B is in the block by requesting just the Merkle Root from the header, and the sibling hashes (Ha and Hcd). The wallet calculates Hash([Hash(Ha+Hb)] + Hcd). If it matches the Root, the transaction is mathematically guaranteed to be in the block, requiring only O(log N) data transfer.\n\nCONCLUSION: Merkle trees are indispensable for providing a lightweight, robust cryptographic summary of block contents."
    },
    quickRevision: "Binary tree of pairwise hashes. Leaf = Tx Hash, Root = Final block summary. Allows fast SPV (light wallets) verification without downloading the whole block.",
    selfTest: [
      "How does a Merkle tree handle an odd number of transactions?",
      "Trace the effect of altering transaction T3 up to the Root.",
      "What is SPV and why does it rely on Merkle trees?"
    ]
  }
];
