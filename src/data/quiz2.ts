import type { QuizQuestion } from "./quiz1";

export const quizQuestions2: QuizQuestion[] = [
  {
    id: 26, topic: "P2P Networks", question: "If 30% of nodes in an unstructured P2P network go offline simultaneously, what happens to the blockchain?", options: ["The network halts until they rejoin.", "The remaining nodes automatically reroute traffic and continue operating.", "The blockchain forks into two chains.", "Data stored in those nodes is permanently lost."], correctAnswer: 1, explanation: "P2P networks are highly fault-tolerant. The remaining nodes simply gossip with available peers.", difficulty: "Easy", examImportance: 4
  },
  {
    id: 27, topic: "P2P Networks", question: "What prevents a malicious node from endlessly looping a transaction through the network (spam attack)?", options: ["Encryption keys on the transaction.", "Nodes validating and dropping duplicate or invalid transactions.", "Central servers throttling the bandwidth.", "The Proof of Work consensus protocol directly."], correctAnswer: 1, explanation: "During gossiping, if a node receives a transaction it already has in its mempool, it ignores it rather than passing it on.", difficulty: "Medium", examImportance: 5
  },
  {
    id: 28, topic: "P2P Networks", question: "Which of the following describes the difference between a Full Node and a Light Node?", options: ["Full nodes hold the full ledger; light nodes only hold block headers.", "Light nodes mine blocks; full nodes do not.", "Full nodes exist on public chains; light nodes exist on private chains.", "Full nodes send transactions; light nodes only receive them."], correctAnswer: 0, explanation: "Light nodes use SPV (Simple Payment Verification) requiring only headers, while full nodes require the entire blockchain state.", difficulty: "Medium", examImportance: 5
  },
  {
    id: 29, topic: "Consensus Mechanisms", question: "In Proof of Work, why is it practically impossible for an attacker with 10% of network hash power to secretly rewrite the last 5 blocks?", options: ["Because they don't have enough collateral staked.", "Because they would need to outpace the other 90% of the network in solving 5 chained hashing puzzles.", "Because the central admin would ban their IP.", "Because hash functions are reversible."], correctAnswer: 1, explanation: "Rewriting history requires solving the current block AND the previous blocks faster than the honest network builds the valid chain.", difficulty: "Hard", examImportance: 5
  },
  {
    id: 30, topic: "Consensus Mechanisms", question: "A situation where the blockchain temporarily splits into two paths because two miners found a block at the exact same time is resolved by:", options: ["The Longest Chain Rule", "Proof of Stake", "Merkle Trees", "Manual intervention by developers"], correctAnswer: 0, explanation: "Nodes adopt the chain with the most accumulated work (longest chain) as the ultimate truth.", difficulty: "Medium", examImportance: 4
  },
  {
    id: 31, topic: "Consensus Mechanisms", question: "What is 'Slashing' in Proof of Stake?", options: ["Reducing the transaction fees.", "Halving the block reward.", "Destroying a portion of a malicious validator's staked funds.", "Removing data from the blockchain to save space."], correctAnswer: 2, explanation: "Slashing is the economic penalty applied to PoS validators who act maliciously or fail to validate correctly.", difficulty: "Hard", examImportance: 4
  },
  {
    id: 32, topic: "Consensus Mechanisms", question: "Which mechanism explicitly requires participants to lock up native cryptocurrency as collateral?", options: ["Proof of Work", "Proof of Stake", "Proof of Authority", "Delegated Byzantine Fault Tolerance"], correctAnswer: 1, explanation: "PoS utilizes economic staking rather than computational expenditure.", difficulty: "Easy", examImportance: 4
  },
  {
    id: 33, topic: "Blockchain Types", question: "What is the main characteristic of a Permissioned blockchain?", options: ["It uses Proof of Work.", "Anyone can join as a validator.", "Access is restricted and controlled by an administrator or consortium.", "It has no transaction fees."], correctAnswer: 2, explanation: "Permissioned chains require identity verification and administrative approval to join.", difficulty: "Easy", examImportance: 5
  },
  {
    id: 34, topic: "Blockchain Types", question: "Why is a private blockchain generally much faster than a public one?", options: ["It uses faster computers.", "It skips transaction validation.", "It has fewer nodes and uses trust-based consensus, reducing computational overhead.", "It doesn't use cryptography."], correctAnswer: 2, explanation: "Since nodes are known and trusted, they don't need heavy PoW or global P2P gossip, enabling thousands of TPS.", difficulty: "Medium", examImportance: 4
  },
  {
    id: 35, topic: "Blockchain Types", question: "Which blockchain type is most suitable for a group of competing pharmaceutical companies tracking a shared drug supply chain?", options: ["Public Permissionless", "Private Permissioned", "Consortium Blockchain", "Centralized Database"], correctAnswer: 2, explanation: "A consortium allows multiple entities to share a trusted ledger without relinquishing control to any single competitor.", difficulty: "Medium", examImportance: 5
  },
  {
    id: 36, topic: "Use Cases", question: "What is a 'Smart Contract'?", options: ["A legal contract stored as a PDF on-chain.", "Programmable code that executes automatically when predefined conditions are met.", "An agreement between miners on the block reward.", "A user's private key."], correctAnswer: 1, explanation: "Smart contracts are self-executing scripts residing on the blockchain.", difficulty: "Medium", examImportance: 5
  },
  {
    id: 37, topic: "Use Cases", question: "How does blockchain benefit Healthcare?", options: ["By making all patient records public.", "By providing a tamper-proof audit trail of who accessed medical data.", "By automatically curing diseases.", "By storing large MRI files on-chain directly."], correctAnswer: 1, explanation: "Blockchain excels at maintaining immutable access logs and verifying credentials without storing the heavy, private medical files directly on the ledger.", difficulty: "Medium", examImportance: 4
  },
  {
    id: 38, topic: "Use Cases", question: "The 'Oracle Problem' refers to:", options: ["The inability of a blockchain to run fast enough.", "The difficulty of verifying if real-world data entered into a blockchain was initially true.", "Miners attacking the network.", "Users losing their private keys."], correctAnswer: 1, explanation: "Blockchains only ensure data isn't altered after entry. They cannot guarantee the physical authenticity of the data being entered.", difficulty: "Hard", examImportance: 4
  },
  {
    id: 39, topic: "Challenges", question: "If a blockchain aims to be highly secure and fully decentralized, it typically sacrifices:", options: ["Immutability", "Transparency", "Scalability (Throughput)", "Cryptography"], correctAnswer: 2, explanation: "According to the Blockchain Trilemma, maintaining a highly secure and decentralized network severely limits transaction speed.", difficulty: "Medium", examImportance: 5
  },
  {
    id: 40, topic: "Challenges", question: "Why do users sometimes pay very high 'gas fees' on public blockchains?", options: ["Miners centrally fix the prices.", "Block space is limited, so users bid higher fees to have their transactions prioritized.", "It is required by government tax laws.", "To encrypt the transaction with higher security."], correctAnswer: 1, explanation: "Blockchains have limited capacity (e.g. 1MB blocks). High demand creates a fee market.", difficulty: "Medium", examImportance: 3
  },
  // Continuing to 50
  {
    id: 41, topic: "Evolution of Digital Transactions", question: "What is an intermediary in digital transactions?", options: ["A cryptographic function.", "A third-party entity that facilitates and validates the transfer.", "A node in a P2P network.", "The sender's digital wallet app."], correctAnswer: 1, explanation: "Banks, payment gateways, and clearinghouses act as intermediaries, extracting fees and representing centralization.", difficulty: "Easy", examImportance: 4
  },
  {
    id: 42, topic: "Distributed Ledger Technology", question: "Which of the following is true regarding DLT?", options: ["Every DLT uses cryptocurrency.", "Every DLT organizes data sequentially in chained blocks.", "A node in DLT possesses a copy of the ledger.", "DLT requires Proof of Work."], correctAnswer: 2, explanation: "The defining trait of DLT is that multiple nodes independently hold and update the ledger. It doesn't necessarily use blocks or coins.", difficulty: "Medium", examImportance: 4
  },
  {
    id: 43, topic: "Blockchain Fundamentals", question: "To send cryptocurrency to someone, you definitely need their:", options: ["Private Key", "Public Key (Address)", "IP Address", "Full Name"], correctAnswer: 1, explanation: "A public key acts as an address where funds can be sent. The private key is only used by the owner to authorize spending.", difficulty: "Easy", examImportance: 4
  },
  {
    id: 44, topic: "Blocks and Chain Structure", question: "What is the 'Genesis Block'?", options: ["The block with the most transactions.", "The first block ever mined in a blockchain, usually block 0.", "A block that causes a network fork.", "A block containing smart contracts."], correctAnswer: 1, explanation: "The genesis block is hardcoded into the software and is the common ancestor of all subsequent blocks.", difficulty: "Easy", examImportance: 3
  },
  {
    id: 45, topic: "Blocks and Chain Structure", question: "What happens if a node receives a newly mined block that contains an invalid transaction?", options: ["It fixes the transaction and forwards it.", "It accepts it because a miner mined it.", "It rejects the entire block and refuses to append it to its ledger.", "It stores it temporarily in the mempool."], correctAnswer: 2, explanation: "Nodes independently verify every block. Invalid blocks, even with valid PoW, are immediately dropped.", difficulty: "Hard", examImportance: 5
  },
  {
    id: 46, topic: "Hash Functions", question: "If a hashing algorithm experiences 'collisions', it means:", options: ["It hashes too fast.", "Two input values produce the exact same output hash.", "The P2P network has crashed.", "The block size is exceeded."], correctAnswer: 1, explanation: "A collision is a severe cryptographic failure where uniqueness is compromised.", difficulty: "Medium", examImportance: 4
  },
  {
    id: 47, topic: "Merkle Trees", question: "In SPV (Simplified Payment Verification), the client needs to download:", options: ["The entire blockchain.", "Only the block headers.", "Only the transactions they care about, without headers.", "Nothing; they query a centralized server."], correctAnswer: 1, explanation: "Light clients download headers (containing the Merkle Root) to verify transaction existence via Merkle proofs.", difficulty: "Hard", examImportance: 5
  },
  {
    id: 48, topic: "P2P Networks", question: "What is an Eclipse Attack?", options: ["Erasing data from a node's hard drive.", "Isolating a node so it only connects to malicious peers, feeding it false network state.", "Stealing a private key.", "Hacking a centralized exchange."], correctAnswer: 1, explanation: "By controlling all of a node's P2P connections, an attacker can feed it a fake version of the blockchain.", difficulty: "Hard", examImportance: 4
  },
  {
    id: 49, topic: "Consensus Mechanisms", question: "The \"Byzantine Generals Problem\" demonstrates the difficulty of:", options: ["Hashing a large file.", "Achieving consensus in a distributed network where some nodes may be faulty or malicious.", "Storing a terabyte ledger on a laptop.", "Designing a secure smart contract."], correctAnswer: 1, explanation: "It is the foundational computer science problem that consensus mechanisms aim to solve.", difficulty: "Medium", examImportance: 5
  },
  {
    id: 50, topic: "Blockchain Types", question: "A truly permissionless blockchain requires what to secure it against Sybil attacks?", options: ["Legal contracts.", "A central authority verifying identities.", "A robust consensus mechanism like PoW or PoS.", "Private IP networks."], correctAnswer: 2, explanation: "Because anyone can join (permissionless), sybil resistance relies on cryptographic and economic costs (consensus) instead of identity.", difficulty: "Hard", examImportance: 5
  }
];
