export type SyllabusTopic = {
  id: string;
  title: string;
  importance: number; // 1 to 5
  timeEst: string;
  whatIsIt: string;
  whyNeeded: string;
  simpleExp: string;
  detailedExp: string;
  howItWorks: string;
  components: string[];
  diagram: string;
  example: string;
  advantages: string[];
  limitations: string[];
  relatedConcepts: string[];
  commonMistakes: string[];
  examAnswer: {
    marks2: string;
    marks5: string;
    marks7: string;
    marks10: string;
  };
  quickRevision: string;
  selfTest: string[];
};

export const syllabusData: SyllabusTopic[] = [
  {
    id: "evolution-digital-transactions",
    title: "1. Evolution of Digital Transactions",
    importance: 4,
    timeEst: "30 min",
    whatIsIt: "The historical progression of how value transfer has changed from physical currencies and ledgers to completely decentralized digital networks.",
    whyNeeded: "To understand why blockchain was invented, one must first understand the limitations and failures of centralized banking and earlier digital transaction systems.",
    simpleExp: "Before computers, people handed each other cash or gold. Then banks started keeping ledgers of who owned what. Later, this moved online (internet banking). Finally, mobile payments made it faster. But all these rely on a central middleman (the bank). Blockchain is the next step: digital transactions without a middleman.",
    detailedExp: "The evolution occurred in distinct stages.\n\nStage 1: Physical/Cash Transactions. Exchange of physical tokens of value. Slow, limited geographically, hard to secure large amounts, but fully peer-to-peer.\n\nStage 2: Banking and Centralized Ledgers. Introduction of trusted third parties (banks). Ledgers strictly maintained by these central authorities.\n\nStage 3: Electronic Banking. Central ledgers were digitized. ATMs and wire transfers emerged.\n\nStage 4: Internet Banking. Web interfaces for central ledgers became available to the masses. Greatly increased accessibility.\n\nStage 5: Mobile Payments and Digital Wallets. High convenience through apps (Venmo, PayPal, UPI). However, still completely reliant on centralized banking infrastructure and single points of failure.\n\nStage 6: Blockchain / DLT. First truly decentralized digital transaction system. Value is transferred directly between peers without a central authority, relying instead on cryptographic proofs and distributed consensus.",
    howItWorks: "As technology advanced, the 'ledger' (record of transactions) moved from paper → centralized databases → distributed decentralized databases (blockchain). Each stage abstracted the physical exchange deeper into digital cryptography.",
    components: [
      "Physical Cash: Physical exchange, high trust in issuer.",
      "Banks: Centralized ledger, trusted intermediary.",
      "Electronic Banking: Inter-bank communication networks (SWIFT).",
      "Digital Wallets: Convenience layer over banking.",
      "Blockchain: Cryptography, P2P network, Consensus."
    ],
    diagram: "Physical Cash\n     ↓\nBanking\n     ↓\nElectronic Banking\n     ↓\nInternet Banking\n     ↓\nMobile Payments\n     ↓\nBlockchain / Distributed Ledger",
    example: "Suppose Alice wants to send Bob money. In 1990, she physically gives cash. In 2005, she uses a bank transfer (takes days). In 2020, she uses a mobile wallet (instant, but bank controls it). In blockchain, she signs a transaction with a private key, broadcasting it to peers, completing it without any bank.",
    advantages: [
      "Each stage improved speed and accessibility.",
      "Blockchain removes the need for trusted intermediaries.",
      "Blockchain provides 24/7 continuous operation unlike traditional banks."
    ],
    limitations: [
      "Earlier stages required absolute trust in central entities.",
      "Earlier stages had single points of failure (hacks, bank runs).",
      "Blockchain is technically complex and has scalability challenges compared to Visa."
    ],
    relatedConcepts: ["Centralization", "Decentralization", "Double Spending Problem", "Trusted Third Party"],
    commonMistakes: [
      "Thinking mobile payments (like PayPal) are decentralized (they are strictly centralized on their databases).",
      "Assuming digital transactions began with blockchain (digital transactions were a prerequisite, blockchain just removed the central authority)."
    ],
    examAnswer: {
      marks2: "The evolution of digital transactions moved from physical cash to centralized banking ledgers, then electronic/internet banking, and finally to decentralized blockchain systems to eliminate trusted third parties.",
      marks5: "The evolution happened in stages: 1. Physical Cash (P2P but slow/risky). 2. Banking (centralized trusted ledger). 3. Electronic/Internet Banking (digitized centralized ledgers). 4. Mobile wallets (high convenience, still centralized). 5. Blockchain (decentralized, distributed ledger using cryptography, removing intermediaries entirely). Each stage solved speed and distance, but only blockchain solved the centralization vulnerability.",
      marks7: "The evolution of value exchange progressed as: Cash -> Centralized Banking -> E-Banking -> Mobile Wallets -> Blockchain.\n\nTraditionally, a central server (bank) was required to prevent the 'double-spending problem' in digital currency. This meant the bank had total control, became a single point of failure, and imposed fees and delays.\nBlockchain revolutionized this by introducing Distributed Ledger Technology (DLT). Instead of a central server, thousands of nodes maintain the ledger, using consensus protocols to validate transactions. This eliminates the need for intermediaries while securing the network via cryptography.",
      marks10: "INTRODUCTION: The evolution of digital transactions represents a shift from centralized trust to distributed cryptographic systems.\n\nSTAGES:\n1. Physical Transactions: Direct exchange but geographically limited.\n2. Centralized Ledgers: Banks acted as trusted third parties. Solved distance but introduced central vulnerability.\n3. Electronic/Web Banking: Digitized the ledger for massive scale.\n4. Mobile Payments: Abstraction layers over banks (e.g., Apple Pay).\n5. Blockchain: The ultimate paradigm shift. Replaces the centralized database with a decentralized ledger maintained by a P2P network.\n\nWHY IT EVOLVED:\nIssues with centralized systems include single point of failure, censorship, high fees, delayed settlements, and reliance on trust.\n\nWORKING CONCEPT:\nRather than Bank A talking to Bank B to update centralized ledgers, a blockchain broadcasts the transaction to a network of independent nodes, validating it via consensus without relying on any single entity.\n\nADVANTAGES:\nEliminates intermediaries, enhances security via decentralization, provides transparency.\n\nCONCLUSION:\nBlockchain is not just another payment method; it is a fundamental architectural redesign of how transactional truth is maintained."
    },
    quickRevision: "Cash -> Central Banks -> E-Banking -> Mobile Wallets -> Blockchain/DLT. The key turning point is moving from Centralized (trusted middleman) to Decentralized (cryptographic proof).",
    selfTest: [
      "What is the main limitation of internet banking compared to blockchain?",
      "List the 5 stages of digital transaction evolution.",
      "How did digital wallets improve upon but fail to escape centralized banking?"
    ]
  },
  {
    id: "centralized-distributed-decentralized",
    title: "2. Centralized vs Distributed vs Decentralized",
    importance: 5,
    timeEst: "40 min",
    whatIsIt: "The three fundamental architectures for how networks, databases, and governance are structured.",
    whyNeeded: "To understand blockchain, you must strictly differentiate between 'where data lives' (distributed) and 'who controls it' (decentralized).",
    simpleExp: "Centralized: One boss, one central server. If the server dies, everything stops. \nDistributed: Multiple servers working together in different locations. If one dies, others keep working. However, they might all be owned by the same boss. \nDecentralized: Multiple servers holding the data, AND they are owned/controlled by multiple different independent people or entities.",
    detailedExp: "Centralized architecture relies on a single central node or authority that mediates all transactions and holds the primary database. It implies a single point of failure and absolute trust in the central entity.\n\nDistributed architecture means computation and data are spread across multiple physical nodes. A system can be distributed without being decentralized (e.g., Google's servers are distributed globally, but fully centralized in control by Google).\n\nDecentralized architecture means that control, decision-making, and trust are distributed among multiple independent entities. No single node or group has total authority. Blockchain primarily aims for extreme decentralization applied on top of a distributed network.",
    howItWorks: "Network topology defines how nodes communicate. \nIn Centralized, A wants to talk to C, A must route through the Central Server.\nIn Distributed, data is stored across multiple nodes, offering fault tolerance.\nIn Decentralized, rules and consensus govern the network instead of a central admin.",
    components: [
      "Centralized: Central authority, single database, single point of failure.",
      "Distributed: Multiple nodes, shared state, high availability.",
      "Decentralized: Multiple independent entities, distributed control, consensus mechanisms required."
    ],
    diagram: "Centralized:\n             CENTRAL SERVER\n            /      |      \\\n           A       B       C\n\nDistributed:\n        A ─── B ─── C\n        │     │     │\n        D ─── E ─── F\n\nDecentralized:\n          A\n        /   \\\n       B ─── C\n       │ \\   │\n       D ─── E",
    example: "Centralized: A traditional bank or Facebook. Distributed: AWS Cloud Services (many servers, one controller). Decentralized: Bitcoin network (many servers, thousands of independent controllers).",
    advantages: [
      "Centralized: Easy to update, highly efficient, simple governance.",
      "Distributed: Fault tolerant, scalable, high availability.",
      "Decentralized: Censorship resistant, no single point of failure, trustless (requires no trusted third party)."
    ],
    limitations: [
      "Centralized: Single point of failure, susceptible to censorship and hacks.",
      "Distributed: Complex to synchronize, split-brain problems.",
      "Decentralized: Very hard to upgrade, redundant, slower, highly complex consensus needed."
    ],
    relatedConcepts: ["Single Point of Failure", "Fault Tolerance", "Consensus", "P2P Network"],
    commonMistakes: [
      "Using 'Distributed' and 'Decentralized' interchangeably! Distributed refers to where the servers are; Decentralized refers to who controls them."
    ],
    examAnswer: {
      marks2: "Centralized systems have a single point of control. Distributed systems spread data across multiple nodes. Decentralized systems distribute both data AND control among independent entities.",
      marks5: "Centralized: Data and control reside in a central server. Example: Traditional banks. Highly efficient but has a single point of failure.\nDistributed: Data is physically spread across multiple nodes to prevent data loss. Example: Google servers. Provides fault tolerance, but control is still centralized.\nDecentralized: Both data and decision-making power are spread across independent participants. Example: Bitcoin. Removes the need for a trusted central authority, ensuring censorship resistance.",
      marks7: "1. Centralized: All nodes connect to a single central hub. Easy to manage, highly scalable linearly, but suffers from single points of failure. Trust is localized.\n2. Distributed: Processing and data are shared among interconnected nodes. It provides high availability. Wait times might increase for consistency (CAP theorem).\n3. Decentralized: A subset of distributed networks where authority is shared. No single entity can shut down or mutate the network. Blockchain is a decentralized distributed ledger.",
      marks10: "INTRODUCTION: System architecture determines fault tolerance, control, and trust within a network.\n\nCENTRALIZED SYSTEMS:\nArchitecture: Hub and spoke model.\nDetails: A central server handles all state changes.\nPros: Fast transaction speeds, immediate finality, easy governance.\nCons: Single Point of Failure (SPOF), vulnerable to hacking, requires total trust.\n\nDISTRIBUTED SYSTEMS:\nArchitecture: Multiple interconnected nodes sharing the workload.\nDetails: Solves the SPOF problem for infrastructure. E.g., Cloud database.\nKey Distinction: A network can be physically distributed but logically centralized (controlled by one company).\n\nDECENTRALIZED SYSTEMS:\nArchitecture: Peer-to-peer (P2P) network.\nDetails: Not only is the data distributed, but the governance and consensus involve mutually untrusted parties.\nPros: Censorship resistance, immutability, trustless operation.\nCons: Lower throughput, complex upgrades, energy/computation overhead.\n\nCONCLUSION: Blockchain leverages distributed P2P networking to achieve a decentralized environment, completely removing the centralized intermediary."
    },
    quickRevision: "Centralized = One boss. Distributed = Many computers, potentially one boss. Decentralized = Many computers, many independent bosses (no central control).",
    selfTest: [
      "Can a network be distributed but not decentralized? Give an example.",
      "What is the main risk of a centralized architecture?",
      "Why is upgrading a decentralized network more difficult than a centralized one?"
    ]
  },
  {
    id: "distributed-ledger-technology",
    title: "3. Distributed Ledger Technology (DLT)",
    importance: 4,
    timeEst: "25 min",
    whatIsIt: "A digital system for recording the transaction of assets in which the transactions and their details are recorded in multiple places at the same time.",
    whyNeeded: "To ensure that all participants in a network share an identical, synchronized copy of truth without relying on a central administrator.",
    simpleExp: "Imagine a group of friends keeping track of who owes who money. Instead of one person holding a master notebook, everybody has their own notebook. Whenever a transaction happens, everyone updates their own notebook simultaneously. If someone tries to cheat and change their notebook, the group compares notes and rejects the fake entry. This is DLT.",
    detailedExp: "A ledger is simply a record of economic transactions. Traditionally, these are centralized. DLT is a database spread across multiple nodes or computing devices. Each node replicates and saves an identical copy of the ledger natively.\n\nWhen a transaction is broadcast to the network, nodes must reach an agreement ('consensus') on the validity of the transaction. Once agreed, all nodes update their local copies. This ensures high availability and makes unauthorized manipulation extremely difficult, as an attacker would need to compromise a majority of the distributed nodes simultaneously.",
    howItWorks: "1. A user requests a transaction.\n2. The request is broadcast to a P2P network of nodes.\n3. Nodes validate the transaction against set rules.\n4. Nodes reach consensus on the transaction's validity.\n5. The transaction is added to the local ledger of every node simultaneously.",
    components: [
      "Nodes: Computers on the network holding the ledger.",
      "Ledger/State: The database of transactions.",
      "P2P Network: The communication channel between nodes.",
      "Consensus Mechanism: The algorithm allowing nodes to agree on the true state."
    ],
    diagram: "Traditional:\n             CENTRAL LEDGER\n              /   |   \\\n             A    B    C\n\nDistributed:\nNode A → Ledger/State\nNode B → Ledger/State\nNode C → Ledger/State\nNode D → Ledger/State",
    example: "Hyperledger Fabric is a DLT often used by enterprises to manage supply chains without using a 'blockchain' data structure specifically, but maintaining a consistently shared ledger across companies.",
    advantages: [
      "High transparency (everyone sees the same data).",
      "Immune to localized data loss (highly distributed).",
      "Reduced need for intermediaries."
    ],
    limitations: [
      "Slower than centralized databases due to required consensus.",
      "Data privacy can be an issue since multiple parties possess copies.",
      "Requires complex consensus protocol design."
    ],
    relatedConcepts: ["Blockchain (a subset of DLT)", "Consensus protocols", "Peer-to-peer networks"],
    commonMistakes: [
      "Assuming DLT is synonymous with Blockchain. (Blockchain is a specific type of DLT that chains blocks together. All blockchains are DLTs, but not all DLTs are blockchains, e.g., Hashgraph)."
    ],
    examAnswer: {
      marks2: "DLT is a decentralized database managed by multiple participants. There is no central authority; instead, nodes use a consensus mechanism to synchronize a shared ledger.",
      marks5: "Distributed Ledger Technology is a database held and updated independently by each participant (node) in a large network. The distribution is unique: records are not communicated to various nodes by a central node, but are instead independently constructed and held by every node.\nKey features include:\n- Distributed control\n- Synchronization via Consensus protocols\n- High availability and tamper resistance\nBlockchain is the most famous implementation of DLT.",
      marks7: "DLT refers to the technological infrastructure and protocols that allows simultaneous access, validation, and record updating in an immutable manner across a network spread across multiple entities.\n\nUnlike traditional databases where a central admin makes changes, DLT requires a consensus of nodes. \n\nComparison:\nCentral Ledger: Single admin, centralized trust, single point of failure.\nDistributed Ledger: Decentralized trust, network consensus, fault-tolerant. \n\nImportance: It shifts the paradigm of trust from an institution (like a bank) to cryptography and mathematics.",
      marks10: "INTRODUCTION: DLT is a fundamental shift in how data is recorded and shared across untrusted networks.\n\nDEFINITION: A distributed ledger is a database that is consensually shared and synchronized across multiple sites, institutions, or geographies, accessible by multiple people.\n\nWORKING MECHANISM:\n1. Transaction broadcast to network.\n2. Nodes individually receive and validate.\n3. Consensus protocol (like PoW or IBFT) is executed to agree on the order.\n4. Ledger is simultaneously updated across all nodes.\n\nBLOCKCHAIN VS DLT:\nIt is crucial to note that Blockchain is a sub-category of DLT. While blockchain groups transactions into 'blocks' and cryptographically chains them, other DLTs (like DAGs - Directed Acyclic Graphs) order transactions differently.\n\nPROPERTIES:\n- Immutability: Difficult to alter past entries.\n- Distribution: High resilience against attacks.\n- Transparency: Verifiable by network members.\n\nCONCLUSION: DLT provides the robust foundational layer required for applications demanding high integrity, such as modern financial settlements and supply chain tracking."
    },
    quickRevision: "DLT is the broader category. Decentralized database where every node holds a copy. Blockchain is just one specific flavor of DLT.",
    selfTest: [
      "What is the relationship between DLT and blockchain?",
      "How is a distributed ledger different from a distributed cloud database like AWS?",
      "Why does DLT require a consensus mechanism?"
    ]
  },
  {
    id: "blockchain-fundamentals",
    title: "4. Blockchain Fundamentals",
    importance: 5,
    timeEst: "40 min",
    whatIsIt: "A specific type of Distributed Ledger Technology where data is grouped into 'blocks' which are sequentially and cryptographically 'chained' together.",
    whyNeeded: "To create a fundamentally immutable, time-stamped, and verifiable record of transactions without requiring a trusted intermediary.",
    simpleExp: "Think of a blockchain as a digital book. Each page is a 'block' containing some transactions. Once a page is full, a mathematical seal (hash) is put on it, and it's glued to the previous page. If anyone tries to rip out a page or change a word, the seal breaks, and everyone reading the book immediately knows it's a fake.",
    detailedExp: "Blockchain creates a continuously growing list of records, called blocks. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.\n\nThe cryptographic linkage guarantees that once data is recorded, it cannot be altered retrospectively without altering all subsequent blocks, which requires the consensus of the network majority. Thus, the blockchain achieves 'Immutability'.\n\nIt combines DLT (every node has a copy) with Cryptography (hashing, digital signatures) and Game Theory (consensus mechanisms) to secure the network.",
    howItWorks: "When a transaction is made, it is sent to a pool of unconfirmed transactions (Mempool). Special nodes (Miners/Validators) group these into a Block. They perform computational work or stake assets to propose the block. Once the network verifies the block, it is appended to the chain. The state of the ledger is determined by traversing the chain from the very first block (Genesis Block) to the latest.",
    components: [
      "Cryptographic Hash: The secure digital fingerprint of data.",
      "Block: A container of validated transactions.",
      "Chain: The sequential linked list of blocks.",
      "Consensus: The rule by which blocks are accepted."
    ],
    diagram: "Transaction\n     ↓\nValidation\n     ↓\nConsensus\n     ↓\nBlock\n     ↓\nBlockchain\n     ↓\nDistributed Ledger (updated across network)",
    example: "The Bitcoin network is the oldest blockchain, strictly chaining 1MB blocks of financial transactions every 10 minutes.",
    advantages: [
      "True immutability and provenance.",
      "High transparency and public verifiability.",
      "Eliminates counterparty risk."
    ],
    limitations: [
      "Inflexible: Errors cannot be easily reversed.",
      "Scalability issues: Sequential processing creates bottlenecks.",
      "Data privacy: By default, public blockchains expose all data."
    ],
    relatedConcepts: ["Hash Functions", "Digital Signatures", "Smart Contracts", "Immutability"],
    commonMistakes: [
      "Thinking blockchain is just a database. (It is an append-only linked list protected by cryptography and consensus).",
      "Assuming transactions are instant. (They must wait for the next block to be created and confirmed)."
    ],
    examAnswer: {
      marks2: "A blockchain is a decentralized, distributed ledger that stores data in blocks linked together via cryptographic hashes, making the data highly immutable and transparent.",
      marks5: "A blockchain is a specific type of DLT where records are batched into blocks.\nKey fundamentals:\n1. Immutability: Once validated, a block's data cannot easily be changed because it is cryptographically linked to the preceding block.\n2. Decentralization: No single entity controls the ledger.\n3. Appended-only: Data can only be added, never deleted or updated in place.\n4. Consensus: Nodes must mathematically agree a block is valid before chaining it.",
      marks7: "Blockchain fundamentally operates on a combination of cryptography and distributed systems.\n\nStructure: It is essentially a linked list data structure, but instead of pointers, it uses cryptographic hashes. Block N contains the hash of Block N-1.\n\nWorkflow:\n1. User formally signs a transaction with their private key.\n2. Broadcasts to P2P network.\n3. Nodes validate against protocol rules.\n4. Transactions grouped into a block.\n5. Consensus achieved, block appended to chain.\n6. Distributed ledgers sync to the new state.",
      marks10: "INTRODUCTION: Blockchain is the foundational technology behind cryptocurrencies, serving as a highly secure, append-only, distributed database.\n\nCORE FUNDAMENTALS:\n1. Distributed & Decentralized: Every participating node runs the software and holds a copy of the ledger. There is no central point of failure.\n2. Cryptographic Security: Uses Public-Key Cryptography (for signing transactions) and Cryptographic Hashing (for chaining blocks). This ensures non-repudiation and integrity.\n3. The Block and Chain: Transactions are batched into a Block. Each Block contains a 'Previous Hash' variable. Changing data in Block A changes its hash, which invalidates Block B, C, and so on. This creates immutability.\n4. Consensus Mechanism: To decide WHICH node gets to write the next block (preventing chaos and double-spending), a network agreement protocol (e.g., Proof of Work, Proof of Stake) is strictly enforced.\n\nCONCLUSION: By chaining cryptographically sealed blocks across a decentralized P2P network, blockchain achieves a trustless, transparent, and unforgeable digital truth."
    },
    quickRevision: "Blockchain = DLT + Cryptographic Hashing + Chained Blocks. Key properties: Immutable, Transparent, Trustless, Decentralized.",
    selfTest: [
      "What gives a blockchain its 'immutability'?",
      "Explain the difference between a blockchain and a standard linked list.",
      "What happens to the chain if an attacker modifies a transaction in an old block?"
    ]
  }
];
