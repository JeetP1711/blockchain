import type { SyllabusTopic } from "./syllabus1";

export const syllabusData3: SyllabusTopic[] = [
  {
    id: "peer-to-peer-networks",
    title: "9. Peer-to-Peer (P2P) Networks",
    importance: 4,
    timeEst: "30 min",
    whatIsIt: "A decentralized networking architecture where every computer (node) acts as both a client and a server, directly communicating with others.",
    whyNeeded: "To ensure the blockchain survives without a central server. If there is no central entity to broadcast transactions, the nodes must route data themselves.",
    simpleExp: "In traditional websites (Client-Server), your phone asks YouTube's server for a video. If YouTube crashes, no video. In P2P (like BitTorrent), everyone who has the video shares bits of it with everyone asking. If one person's computer crashes, you just get the video from the other 50 people online. Blockchain uses this to share transaction data.",
    detailedExp: "A P2P network consists of interconnected nodes (peers). There is no hierarchical privilege among nodes; they are equipotent.\nIn a blockchain (unstructured P2P):\n1. Node Discovery: When a node boots up, it pings a known 'seed node' to find active peers, maintaining a list of IP addresses.\n2. Transaction Gossip: When a user signs a transaction, it hits one node. That node validates it, and if valid, broadcasts it to its 8-10 immediate peers. They validate and broadcast to their peers. Within seconds, the entire global network has the transaction in their Mempools.\n3. Block Propagation: When a miner finds a block, they gossip it the same way so the network can update its ledger.",
    howItWorks: "The network uses a 'Gossip Protocol' (like spreading a rumor). Node A tells B and C. Node B tells D and E. If Node E already heard it from Node C, it simply drops the duplicate message.",
    components: [
      "Node: Any computer connected to the network.",
      "Peer: A node you are directly connected to.",
      "Gossip Protocol: The algorithm for broadcasting messages.",
      "Mempool: Local storage of unconfirmed transactions."
    ],
    diagram: "Centralized:\n        SERVER\n       / | | \\\n      A  B C  D\n\nP2P:\n     A ─── B\n    / \\     \\\n   C───D────E",
    example: "BitTorrent is a P2P network for file sharing. Bitcoin is a P2P network for state sharing.",
    advantages: [
      "No single point of failure (highly resilient).",
      "Censorship resistance (no central server to shut down).",
      "Scales bandwidth naturally (more users = more distribution)."
    ],
    limitations: [
      "Higher latency and propagation delay than centralized servers.",
      "Data redundancy (every node processes every message).",
      "Risk of Sybil attacks if not protected by a consensus mechanism."
    ],
    relatedConcepts: ["Gossip Protocol", "Mempool", "Client-Server Architecture", "Node Types"],
    commonMistakes: [
      "Confusing P2P with Consensus. (P2P is just how they talk; Consensus is how they agree on what they are talking about)."
    ],
    examAnswer: {
      marks2: "A P2P network is an architecture where nodes communicate directly with each other without a central server, ensuring high availability and decentralization.",
      marks5: "P2P logic in blockchain:\nNodes are equal peers acting as both clients and servers. When a transaction is generated, it propagates via a 'Gossip Protocol'. Each node validates the message, adds it to its mempool, and relays it to adjacent peers. This decentralized routing ensures the network has no single point of failure and resists censorship, albeit at the cost of higher latency.",
      marks7: "The network layer of a blockchain operates on Peer-to-Peer architecture.\n\nComparison:\nClient-Server: Clients pull data from a central hub. Vulnerable to DDoS and central censorship.\nP2P: Nodes push and pull data directly to/from each other. Highly robust.\n\nMechanism:\nBlockchain mostly uses unstructured P2P. Nodes connect randomly via an overlay network. They use epidemic routing (gossip protocols) to rapidly disseminate new transactions and blocks. The network is resilient because if 50% of the nodes go offline, the remaining nodes route around the damage instantly.",
      marks10: "INTRODUCTION: The decentralization of a blockchain is physically facilitated by its underlying Peer-to-Peer network topology.\n\nARCHITECTURE:\nUnlike a client-server model, P2P nodes have symmetrical roles. Every full node maintains the ledger, validates transactions, and routes data.\n\nNODE LIFECYCLE & DISCOVERY:\nWhen a joining node starts, it queries DNS seeds to find active peers. It maintains connections to a random subset of peers (e.g., 8 outgoing connections in Bitcoin) to prevent topology clustering.\n\nDATA PROPAGATION (GOSSIP PROTOCOL):\n1. Validation: Before a node forwards a transaction or block, it independently executes all validation rules against it. Invalid data is dropped, naturally rate-limiting spam.\n2. Gossiping: Valid data is sent to connected neighbors. The exponential nature of gossiping means data saturates a global network in seconds.\n\nCHALLENGES:\n- Network Partitioning (Eclipse Attacks).\n- Propagation Delays (which can lead to stale blocks/forks if blocks are solved faster than they can travel).\n\nCONCLUSION: P2P networks provide the robust communication layer necessary for distributed ledgers to operate in a trustless, global environment."
    },
    quickRevision: "Nodes talk directly to each other (Gossip Protocol) without a central server. Highly resilient, but slower than client-server.",
    selfTest: [
      "What is a Gossip Protocol?",
      "Why does a node validate a transaction before gossiping it?",
      "Explain the difference between P2P and Client-Server."
    ]
  },
  {
    id: "consensus-mechanisms",
    title: "10. Consensus Mechanisms",
    importance: 4,
    timeEst: "35 min",
    whatIsIt: "The fault-tolerant mathematical algorithm used to achieve network agreement on the single true state of the ledger.",
    whyNeeded: "In a decentralized P2P network, anyone can lie, and any node can fail or go rogue (Byzantine Generals Problem). Consensus prevents malicious actors from double-spending or altering history.",
    simpleExp: "Imagine a room of 10 accountants writing down company expenses. If accountant #3 writes a fake expense, how do all 10 agree on the real list? In consensus, they have a rule. Perhaps the rule is: the accountant who solves a Sudoku puzzle first gets to read their page. The others check it. If the page follows the rules, everyone copies it. If they lied, the others reject it and wait for the next Sudoku winner.",
    detailedExp: "Consensus solves the \"Distributed Agreement\" problem in trustless systems.\n\nProof of Work (PoW):\nNodes (miners) compete to solve a computationally expensive cryptographic puzzle (finding the right Nonce to hash below the Target). The first to solve it proposes the block. It proves they expended real-world energy. If they propose a malicious block, nodes reject it, and the miner loses the money spent on electricity. Example: Bitcoin.\n\nProof of Stake (PoS):\nInstead of burning electricity, validators \"stake\" (lock up) their own cryptocurrency in a smart contract. A validator is pseudo-randomly chosen to propose the block. If they lie, the protocol slashes (destroys) their staked money. Example: Ethereum.",
    howItWorks: "1. Several nodes independently create blocks.\n2. They follow the consensus rule (solve the PoW hash, or get selected in PoS).\n3. The winner broadcasts the block.\n4. Network nodes verify the block's transactions and the consensus rule (was the hash correct? was the stake valid?).\n5. If valid, it is added to the chain.",
    components: [
      "PoW (Proof of Work): Energy + Computation = Security.",
      "PoS (Proof of Stake): Locked Capital = Security.",
      "Longest Chain Rule: In case of a tie, the chain with the most accumulated work/stake wins."
    ],
    diagram: "Hashing\n→ Helps provide integrity / cryptographic structure\n\nConsensus \n→ Helps distributed participants agree\n\nP2P Network\n→ Routes the data",
    example: "If Alice tries to double-spend her 1 BTC by sending it to Bob and Charlie simultaneously, miner nodes will only include the first one they see in a block. Consensus ensures only one block becomes the official network truth.",
    advantages: [
      "Secures networks mathematically without human intervention.",
      "Aligns economic incentives (playing by the rules is more profitable than cheating)."
    ],
    limitations: [
      "PoW consumes immense amounts of electrical energy.",
      "PoS can lead to 'rich get richer' centralization.",
      "All consensus mechanisms natively limit transaction speed (scalability bottleneck)."
    ],
    relatedConcepts: ["Byzantine Generals Problem", "Double Spending", "Miners / Validators", "Forks"],
    commonMistakes: [
      "Confusing Consensus with Hashing. (Hashing is just the math; Consensus is the economic rulebook using that math).",
      "Thinking blockchains cannot exist without mining. (Mining is just for PoW; PoS blockchains do not use mining)."
    ],
    examAnswer: {
      marks2: "Consensus is a protocol through which distributed nodes agree on the validity and order of transactions, typically using PoW or PoS to prevent double-spending.",
      marks5: "A consensus mechanism allows untrusted network participants to agree on a single state of the truth.\n- Proof of Work (PoW): Requires nodes to perform heavy computational work to find a Hash. Secures the network through real-world energy cost.\n- Proof of Stake (PoS): Requires nodes to lock up capital as collateral. Secures the network through economic penalties (slashing).\nConsensus solves the Byzantine Fault Tolerance problem in P2P networks.",
      marks7: "Consensus enforces the rules of the blockchain.\n\nProblem solved: In a distributed system, malicious actors might attempt to spend the same digital token twice (Double Spending). Without a central bank, the network must agree on which transaction came first.\n\nAlgorithm Operation:\nNodes independently verify transactions. To decide who writes the block, PoW requires computational races; PoS relies on randomized election based on stake. \nIf there's a temporary disagreement (a fork), the network adheres to the 'Longest Chain Rule', assuming the chain with the most cumulative work represents the majority of honest nodes.",
      marks10: "INTRODUCTION: Consensus is the mechanism that bridges distributed systems computer science with game theory to create trustless environments.\n\nTHE CORE PROBLEM:\nThe Byzantine Generals Problem demonstrates the difficulty of coordinating distributed nodes when some nodes may be actively malicious. A mechanism is needed to penalize lying behavior.\n\nMECHANISMS:\n1. Proof of Work (PoW): Sybil resistance is achieved by making participation expensive. A node must guess a Nonce such that Hash(Block Header) < Target Difficulty. This requires massive ASIC hardware and electricity. If a block is valid, the miner gets a block reward. If invalid, they suffer a net loss (electricity burned for zero reward). Pros: Highly secure. Cons: Energy intensive, low throughput.\n\n2. Proof of Stake (PoS): Replaces energy expenditure with economic collateral. Validators lock up native tokens. Validators take turns proposing and attesting to blocks. Malicious behavior results in the protocol mathematically 'slashing' (destroying) their stake. Pros: Energy efficient, faster finality. Cons: Risk of oligopoly.\n\nCONCLUSION: Regardless of the methodology, consensus protocols align mathematical verification with economic incentives to maintain one unified version of the ledger."
    },
    quickRevision: "Consensus = Agreement. PoW = Prove you burned energy. PoS = Prove you hold collateral. Both align game theory so cheating costs more than it earns.",
    selfTest: [
      "What specifically does consensus prevent?",
      "Compare how PoW and PoS punish a malicious node.",
      "Why might two nodes temporarily hold two different versions of the ledger (a fork)?"
    ]
  },
  {
    id: "public-private-consortium-blockchains",
    title: "11-13. Blockchain Types (Public, Private, Consortium)",
    importance: 4,
    timeEst: "35 min",
    whatIsIt: "The three main categorizations of blockchain networks based on permission, access, and control.",
    whyNeeded: "Different use cases require different levels of privacy and speed. A global currency needs a public chain, whereas bank settlements need a private or consortium chain.",
    simpleExp: "Public Blockchain = The internet. Anyone can join, read, write, and see everything. (Bitcoin).\nPrivate Blockchain = An company's internal intranet. Only employees can log in, and the CEO controls access. (Hyperledger for one company).\nConsortium Blockchain = A shared extranet between a few partner companies. (A group of 5 banks sharing a ledger).",
    detailedExp: "PUBLIC: Permissionless. Anyone can download the software, become a node, read the ledger, and submit transactions. Fully decentralized, high transparency, but inherently slower due to massive node counts (e.g., Bitcoin, Ethereum).\n\nPRIVATE: Permissioned. Controlled by a single organization. The organization decides who can read, who can write, and who can act as a consensus node. Extremely fast and private, but lacks true decentralization. Technically closer to a standard distributed database with cryptographic chaining.\n\nCONSORTIUM: Federated. Governed by a group rather than a single entity. For example, 10 shipping companies run a blockchain. You must be heavily vetted to join. Consensus is usually reached by a pre-approved set of nodes (e.g., 7 out of 10 must agree). Balances speed, privacy, and partial decentralization.",
    howItWorks: "The difference lies in the Access Control Layer. Public chains use open APIs and PoW/PoS consensus. Private/Consortium chains use identity management protocols and faster, trusted consensus mechanisms (like Raft or IBFT) because the nodes are already known.",
    components: [
      "Public: Permissionless, Anonymous/Pseudonymous, Decentralized.",
      "Private: Permissioned, Known Identities, Centralized control.",
      "Consortium: Permissioned, Group Governance, Distributed control."
    ],
    diagram: "PUBLIC\n= EVERYONE\n\nPRIVATE\n= ONE ORGANIZATION\n\nCONSORTIUM\n= MANY ORGANIZATIONS\n\nBank A ──┐\nBank B ──┼── Consortium Blockchain\nBank C ──┤\nBank D ──┘",
    example: "Public: Bitcoin network. Private: Walmart's internal supply chain tracker. Consortium: Marco Polo Network (trade finance between major global banks).",
    advantages: [
      "Public: True trustlessness, censorship-resistant.",
      "Private/Consortium: High speed, low cost, strict privacy, regulatory compliance."
    ],
    limitations: [
      "Public: Privacy issues (everything is public), scaling limits.",
      "Private: What's the point? Might as well use a database.",
      "Consortium: Hard to govern practically among competing companies."
    ],
    relatedConcepts: ["Permissioned vs Permissionless", "Enterprise Blockchain", "Hyperledger Fabric"],
    commonMistakes: [
      "Thinking Private Blockchains are useless. (They offer cryptographic auditing and immutability that standard databases don't, even internally).",
      "Confusing Consortium with Private. (Private = 1 company. Consortium = N companies)."
    ],
    examAnswer: {
      marks2: "Public blockchains are open and permissionless. Private blockchains are controlled by a single entity. Consortium blockchains are shared and governed by a group of organizations.",
      marks5: "1. Public (Permissionless): Anyone can read, write, and participate in consensus. Highly decentralized and secure, but often slower. E.g., Ethereum.\n2. Private (Permissioned): Access and consensus are restricted to one organization. High speed and privacy, low decentralization.\n3. Consortium (Federated): A hybrid where multiple organizations share governance. Nodes are pre-authorized. Ideal for B2B use cases like supply chains.",
      marks7: "The classification depends on Read/Write/Commit access.\n\nPublic: Read (Open), Write (Open), Commit/Consensus (Open). Achieves trustless environment via PoW/PoS. Trades performance for decentralization.\n\nPrivate: Read (Restricted), Write (Restricted), Commit (Restricted to single admin). Uses crash-fault tolerant consensus. High throughput, low latency. Good for internal auditing.\n\nConsortium: Read (Restricted), Write (Restricted), Commit (Restricted to a set of nodes, e.g., 10 banks). Ensures competing entities can collaborate on a shared infrastructure without trusting a central clearinghouse.",
      marks10: "INTRODUCTION: Blockchains are tailored to specific organizational needs by adjusting their permission structures.\n\nPUBLIC BLOCKCHAINS:\nDesign: Fully permissionless. Anyone can join as a node.\nPros: Ultimate immutability, censorship resistance, global reach.\nCons: Poor scalability, completely transparent (bad for corporate secrets).\nExamples: Bitcoin, Solana.\n\nPRIVATE BLOCKCHAINS:\nDesign: Governed by a single entity that dictates node participation.\nPros: High throughput (thousands of TPS), very low latency, full privacy, no transaction fees.\nCons: Centralized point of failure, heavily reliant on the host's integrity.\n\nCONSORTIUM BLOCKCHAINS:\nDesign: A 'Federated' model. The consensus process is controlled by a pre-selected set of nodes (e.g., 15 financial institutions, where 10 must sign every block).\nPros: Eliminates the single point of failure of private chains, while avoiding the slow speed and public nature of public chains.\nCons: Tricky governance (requires cooperating competitors).\nExamples: Hyperledger Fabric, Corda R3.\n\nCONCLUSION: The choice depends on the trilemma between decentralization, speed, and privacy."
    },
    quickRevision: "Public: Open to the world (Bitcoin). Private: One company controls it. Consortium: A group of companies control it together.",
    selfTest: [
      "Why would a group of banks use a Consortium chain instead of a Public one?",
      "Differentiate between Permissioned and Permissionless.",
      "Why are Private blockchains much faster than Public ones?"
    ]
  },
  {
    id: "blockchain-use-cases",
    title: "14. Blockchain Use Cases",
    importance: 4,
    timeEst: "30 min",
    whatIsIt: "Real-world implementations of blockchain technology across various industries beyond just speculative cryptocurrency.",
    whyNeeded: "To demonstrate how decentralized ledgers can solve practical problems involving trust, auditing, and multi-party coordination.",
    simpleExp: "Whenever you have multiple people or companies who need to share data, but they don't fully trust each other, and they don't want to pay a middleman to manage it, blockchain is a good solution.",
    detailedExp: "1. Cryptocurrency & Finance: Decentralized money, cross-border payments settling in seconds instead of days, tokenization of real-world assets (stocks, real estate).\n2. Supply Chain: Tracking a product from origin to retail. Every handover is logged on a consortium chain. (e.g., IBM Food Trust tracking lettuce to find e.coli outbreaks instantly).\n3. Healthcare: Unifying patient records securely. Allowing patients to grant granular access to doctors while maintaining cryptographic privacy and audit logs.\n4. Digital Identity: Self-sovereign identity where users hold their own verifiable credentials rather than relying on centralized hubs like Google or government databases.\n5. Intellectual Property: Providing immutable timestamps for creators to prove they generated a piece of art or code at a specific time.",
    howItWorks: "Smart contracts (self-executing code on the blockchain) automate agreements. For example, in supply chain, a smart contract automatically triggers payment to heavily-vetted suppliers when a GPS sensor logs that a shipment arrived at the warehouse.",
    components: [
      "Smart Contracts: Programmable business logic.",
      "Tokenization: Representing real assets digitally.",
      "Audit Trail: The immutable history of events."
    ],
    diagram: "Supply Chain Example:\n\nManufacturer (Creates Tx)\n      ↓\nDistributor (Signs Tx)\n      ↓\nWarehouse (Scans & Signs)\n      ↓\nRetailer (Confirms)\n      ↓\nCustomer (Scans QR, sees full immutable history)",
    example: "DeFi (Decentralized Finance) allows users to lend and borrow money using smart contracts on Ethereum without any bank taking a cut.",
    advantages: [
      "Removes middlemen, lowering costs and delays.",
      "Provides absolute cryptographic proof of history.",
      "Enhances trust between competing business entities."
    ],
    limitations: [
      "The 'Oracle Problem': Blockchain knows data is immutable, but it doesn't know if the data was true when it was entered in the real world.",
      "Regulatory hurdles and legal recognition of smart contracts."
    ],
    relatedConcepts: ["Smart Contracts", "DeFi", "Supply Chain Provenance", "The Oracle Problem"],
    commonMistakes: [
      "Thinking blockchain fixes bad real-world data. (Garbage in, garbage out strictly applies).",
      "Claiming blockchain automatically solves election fraud (It creates massive issues regarding voter anonymity and coercion)."
    ],
    examAnswer: {
      marks2: "Blockchain is utilized in cryptocurrency, supply chain provenance, digital identity, and cross-border finance to remove intermediaries and provide immutable audit trails.",
      marks5: "Key Use Cases:\n- Finance: Cross-border payments are settled instantly without SWIFT intermediaries. Tokenization allows fractional ownership of assets.\n- Supply Chain: Enhances traceability (provenance). A consortium blockchain allows all entities to track shipments in real-time, preventing fraud.\n- Healthcare: Provides an immutable audit log of who accessed patient records, while keeping the data hashed and private.",
      marks7: "Blockchain excels in multi-party environments lacking a trusted central authority.\n\n1. Supply Chain: IBM Food Trust logs physical goods globally. Solves the problem of siloed databases among suppliers, shippers, and retailers.\n2. Decentralized Finance (DeFi): Smart contracts replace banks for lending/borrowing.\n3. Digital Identity: Avoids honeypot databases. Users hold verifiable credentials locally and only share ZK-proofs (Zero-Knowledge) with verifiers.\n4. Intellectual Property: Serves as an unforgeable, timestamped notary service.",
      marks10: "INTRODUCTION: While birthed as cryptocurrency, DLT's ability to act as a shared, immutable state machine has industrial applications.\n\nSUPPLY CHAIN PROVENANCE:\nProblem: Competing companies use disparate ERP systems. Tracing origin takes weeks.\nSolution: A Consortium blockchain. Every transfer of goods is signed as a transaction. \nImpact: Fraud reduction, instantaneous traceability (e.g., pulling contaminated food based on an immutable QR code).\n\nFINANCE & SETTLEMENTS:\nProblem: Traditional clearinghouses take T+2 days to settle trades.\nSolution: Tokenized assets on a blockchain settle on a peer-to-peer basis instantly (T+0), releasing trapped liquidity.\n\nHEALTHCARE:\nProblem: Fragmented patient data and strict HIPAA compliance.\nSolution: Records represent on-chain hashes. Patients grant limited-time cryptographic access keys to doctors, leaving a permanent audit trail of who accessed what.\n\nCONCLUSION: The true utility of blockchain lies not in replacing databases, but in replacing the institutional intermediaries that currently verify data between parties."
    },
    quickRevision: "Finance (payments/DeFi), Supply chain (tracking), Healthcare (auditable records), ID (Self-sovereign). Solves the 'trust' issue between multiple parties.",
    selfTest: [
      "Explain how a supply chain benefits from immutability.",
      "What is the 'Oracle Problem' in real-world blockchain use cases?",
      "Why is blockchain poorly suited for storing large raw video files?"
    ]
  },
  {
    id: "blockchain-challenges",
    title: "15. Blockchain Challenges",
    importance: 4,
    timeEst: "25 min",
    whatIsIt: "The technical, regulatory, and practical limitations that currently hinder global blockchain adoption.",
    whyNeeded: "A realistic understanding of technology requires acknowledging its trade-offs. Blockchain is heavily hyped, but it has severe engineering bottlenecks.",
    simpleExp: "Because blockchain requires thousands of computers to double-check and save every single transaction manually, it is naturally very slow and takes a lot of hard drive space. It's like asking 10,000 accountants to all approve every single receipt you get at the grocery store.",
    detailedExp: "The main challenges include:\n1. The Blockchain Trilemma: It is difficult to achieve Decentralization, Security, and Scalability simultaneously. Usually, one must be sacrificed.\n2. Scalability/Speed: Bitcoin processes ~7 TPS (transactions per second), Ethereum ~15 TPS. Visa does 24,000+. Every node processing every transaction creates an immense bottleneck.\n3. Environmental Impact: Proof of Work (Bitcoin) consumes energy equivalent to small countries to secure the network.\n4. Storage/Bloat: The blockchain is append-only. The Ethereum ledger is gigabytes/terabytes large, making it harder for average users to run full nodes, risking centralization.\n5. Privacy: Public ledgers broadcast transaction histories globally. \n6. Interoperability: Different blockchains (Bitcoin, Ethereum, Solana) cannot easily talk or transfer assets to each other natively.",
    howItWorks: "Scalability solutions generally involve 'Layer 2' technologies (like the Lightning Network or Rollups) which batch thousands of transactions off-chain, and only write the final compressed mathematical proof to the main blockchain.",
    components: [
      "Trilemma: Scalability vs Security vs Decentralization.",
      "Storage Bloat: Constantly growing ledger.",
      "Regulatory: Unclear legal statuses worldwide.",
      "Key Management: If you lose your private key, assets are gone forever."
    ],
    diagram: "Problem\n↓\nWhy it occurs\n↓\nExample\n↓\nPossible approaches (e.g. Scalability → Layer 2 Rollups)",
    example: "If millions of people try to use Ethereum at once, the network gets congested. Because space in blocks is limited, users must bid higher 'Gas Fees' to get their transaction included, sometimes making simple transactions cost hundreds of dollars.",
    advantages: [
      "Highlighting challenges pushes the industry to create innovations like Layer 2 scaling and Zero-Knowledge proofs."
    ],
    limitations: [
      "Many challenges (like the Trilemma) are fundamental computer science limits, not just temporary bugs."
    ],
    relatedConcepts: ["Blockchain Trilemma", "Layer 2 Scaling", "Gas Fees", "State Bloat"],
    commonMistakes: [
      "Assuming high TPS blockchains solved the trilemma. (Usually, they just sacrificed decentralization by having very few powerful nodes)."
    ],
    examAnswer: {
      marks2: "Major blockchain challenges include scalability (low TPS), high energy consumption in PoW, storage bloat, lack of privacy, and interoperability issues.",
      marks5: "1. Scalability: Public blockchains process very few transactions per second due to global consensus requirements. This leads to congestion and high fees.\n2. Energy Consumption: PoW mining requires massive electricity.\n3. Immutability Trade-offs: If a user makes a mistake (e.g., sends funds to a wrong address) or a smart contract gets hacked, it cannot be reversed.\n4. Key Management: Decentralization places the entire burden of security on the user. Lost keys mean permanently lost assets.",
      marks7: "The most prominent challenge is the Blockchain Trilemma.\n\nScalability: Due to data replication, public chains suffer low throughput and high latency. \nPrivacy: Transparent ledgers conflict with privacy laws like GDPR (Right to be Forgotten) because data cannot be removed.\nStorage Bloat: As the ledger grows infinitely, only enterprise servers can run full nodes, hurting decentralization.\nInteroperability: Blockchains exist as isolated silos. Moving data across chains requires trusted bridges, which are frequent targets for hacks.\nTo mitigate scalability, developers are building 'Layer 2' solutions that handle compute off-chain.",
      marks10: "INTRODUCTION: While blockchain offers trust minimized architecture, it introduces severe bottlenecks in throughput, privacy, and UX.\n\n1. SCALABILITY & PERFORMANCE:\nThe need for global state consensus inherently limits Throughput (TPS). When demand spikes, block space becomes a premium, leading to exorbitant transaction fees. This makes microtransactions unviable on base layers.\n\n2. ENVIRONMENTAL COST:\nTo secure the network without a central authority, PoW requires computational waste. Bitcoin's energy usage rivals some nations, prompting environmental concerns (though PoS mitigates this).\n\n3. REGULATION & GOVERNANCE:\nDecentralization means there is no CEO to sue or subpoena. This creates friction with central banking regulations, AML (Anti-Money Laundering), and KYC laws.\n\n4. THE IMMUTABILITY PARADOX:\nImmutability is a hallmark feature, but also a flaw. Exploitable bugs in Smart Contracts cannot be hastily patched, leading to multi-million dollar hacks that the network cannot easily reverse without executing highly controversial 'Hard Forks'.\n\n5. ADOPTION UX:\nUsers must manage their own cryptographic private keys. There is no 'forgot password' button. This sheer responsibility is a massive barrier to mass adoption.\n\nCONCLUSION: Overcoming these limits requires technological shifts, particularly treating Layer 1 as a settlement layer and pushing execution to Layer 2."
    },
    quickRevision: "Challenges: Scalability (slow/expensive), Energy (PoW), Storage (bloat), Privacy (everything is public), UX (difficult key management).",
    selfTest: [
      "What is the Blockchain Trilemma?",
      "Why is immutability sometimes considered a disadvantage?",
      "How do high network usage affect transaction fees?"
    ]
  }
];
