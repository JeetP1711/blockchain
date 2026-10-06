import type { QuizQuestion } from "./quiz1";

export const quizQuestions3: QuizQuestion[] = [
  // Generating 25 more technical questions to test deep understanding.
  {
    id: 51, topic: "Evolution of Digital Transactions", question: "Which digital milestone first introduced the concept of digital signatures into mainstream use before blockchain?", options: ["Credit Cards", "Public Key Infrastructure (PKI)", "The Gold Standard", "Physical stock certificates"], correctAnswer: 1, explanation: "PKI used asymmetric cryptography long before Bitcoin to secure digital communications and transactions.", difficulty: "Hard", examImportance: 3
  },
  {
    id: 52, topic: "Evolution of Digital Transactions", question: "What fundamental property distinguishes a decentralized token (like Bitcoin) from a centralized token (like an MMO game currency)?", options: ["It exists digitally.", "It runs on the internet.", "No trusted central issuer can arbitrarily increase the supply or freeze accounts.", "It can be transferred peer-to-peer."], correctAnswer: 2, explanation: "Centralized platforms can change rules, print money, or ban users at will. Blockchain protocols enforce rule adherence via consensus.", difficulty: "Medium", examImportance: 4
  },
  {
    id: 53, topic: "Centralized vs Distributed vs Decentralized", question: "In a fully decentralized system, how are protocol upgrades (like a software update) decided?", options: ["The CEO issues a mandate.", "The development team automatically pushes the update to all nodes.", "Node operators must individually choose to adopt and run the new software.", "Servers vote automatically without human intervention."], correctAnswer: 2, explanation: "Decentralized networks rely on social consensus. If nodes refuse to run the new software, the upgrade fails (or the network forks).", difficulty: "Hard", examImportance: 5
  },
  {
    id: 54, topic: "Distributed Ledger Technology", question: "Why is 'High Availability' an inherent feature of DLT?", options: ["It uses faster internet pipes.", "Data is replicated across many nodes, so the failure of one does not affect data access.", "It uses cloud load balancers.", "Central servers run backups every hour."], correctAnswer: 1, explanation: "Mass replication of the ledger ensures that even if half the network goes offline, the data is entirely preserved.", difficulty: "Medium", examImportance: 4
  },
  {
    id: 55, topic: "Blockchain Fundamentals", question: "In a blockchain, data is \"append-only\". This means:", options: ["You can delete transactions after 100 blocks.", "Data can only be added, preventing historical alteration or deletion.", "Only the admin can append data.", "You must append a text file to every transaction."], correctAnswer: 1, explanation: "Blockchains function as an immutable historical log. You cannot 'UPDATE' or 'DELETE', only 'INSERT'.", difficulty: "Easy", examImportance: 5
  },
  {
    id: 56, topic: "Blockchain Architecture", question: "Which layer handles the serialization of transactions and the struct of the Merkle Tree?", options: ["The Network Layer", "The Application Layer", "The Data Layer", "The Hardware Layer"], correctAnswer: 2, explanation: "The Data Layer concerns the physical structure of blocks, hashes, and trees on the disk.", difficulty: "Medium", examImportance: 3
  },
  {
    id: 57, topic: "Blocks and Chain Structure", question: "How does a blockchain generally handle a situation where two blocks are mined at the exact same height?", options: ["It combines the transactions from both blocks.", "It causes a permanent split.", "It temporarily maintains both forks until the next block is mined, applying the longest chain rule.", "It halts until a central admin decides."], correctAnswer: 2, explanation: "Orphan blocks happen naturally. The chain resolves the tie based on whichever fork extends first (accumulates more PoW).", difficulty: "Hard", examImportance: 5
  },
  {
    id: 58, topic: "Hash Functions", question: "Which algorithm is standard for Bitcoin's block hashing?", options: ["SHA-1", "MD5", "SHA-256", "Keccak"], correctAnswer: 2, explanation: "Bitcoin utilizes Double SHA-256 for its core hashing functions.", difficulty: "Easy", examImportance: 3
  },
  {
    id: 59, topic: "Hash Functions", question: "What is 'Pre-image resistance'?", options: ["The ability to easily guess the hash input.", "The mathematical improbability of deriving the input from the hash.", "The resistance of a blockchain to quantum computers.", "Preventing two inputs from hashing to the same output."], correctAnswer: 1, explanation: "Pre-image resistance is what makes a hash function one-way.", difficulty: "Hard", examImportance: 4
  },
  {
    id: 60, topic: "Merkle Trees", question: "If you have 8 transactions in a block, how many hashes are computed at the bottommost leaf layer of the Merkle Tree?", options: ["4", "8", "16", "1"], correctAnswer: 1, explanation: "Every transaction is individually hashed first. Thus 8 transactions = 8 leaf hashes.", difficulty: "Medium", examImportance: 3
  },
  {
    id: 61, topic: "P2P Networks", question: "When a node receives a transaction, what does it do before gossiping it to peers?", options: ["Hashes the transaction to verify its sender.", "Validates the transaction against protocol rules (e.g., checking digital signatures and balances).", "Mines a block.", "Requests permission from the network admin."], correctAnswer: 1, explanation: "Validation is key to preventing spam. Nodes drop invalid transactions locally.", difficulty: "Medium", examImportance: 5
  },
  {
    id: 62, topic: "Consensus Mechanisms", question: "What is a '51% Attack'?", options: ["When 51% of users lose their keys.", "When a single entity controls over 50% of the hashing power and can rewrite recent blockchain history.", "When 51% of nodes are required to mine a block.", "When gas fees consume 51% of the transaction value."], correctAnswer: 1, explanation: "Controlling the majority of network power allows an attacker to orphan honest blocks, enabling double-spending.", difficulty: "Medium", examImportance: 5
  },
  {
    id: 63, topic: "Blockchain Types", question: "Which blockchain type completely lacks decentralization but provides cryptographic auditing?", options: ["Public", "Consortium", "Private", "None"], correctAnswer: 2, explanation: "Private blockchains are run by single entities. They use blockchain data structures but not decentralized consensus.", difficulty: "Medium", examImportance: 4
  },
  {
    id: 64, topic: "Use Cases", question: "How does blockchain facilitate cross-border settlements?", options: ["By using local bank branches.", "By avoiding the SWIFT network and peer-to-peer transferring digital tokens representing value.", "By requiring physical gold transfer.", "By slowing down the process for security checks."], correctAnswer: 1, explanation: "Blockchain enables direct peer-to-peer transfer of value, entirely bypassing correspondent banking delays.", difficulty: "Medium", examImportance: 4
  },
  {
    id: 65, topic: "Challenges", question: "What is the consequence of low scalability in public blockchains during peak usage?", options: ["Transactions execute faster.", "Transaction fees spike dramatically.", "The network crashes and shuts down.", "Blocks become smaller."], correctAnswer: 1, explanation: "Because block space is limited, users must outbid each other in gas fees to get processed.", difficulty: "Easy", examImportance: 5
  },
  {
    id: 66, topic: "Consensus Mechanisms", question: "Why is Proof of Stake generally considered more energy-efficient than Proof of Work?", options: ["It uses ASICs.", "It requires nodes to run highly complex cryptographic puzzles.", "Validators are selected based on collateral, eliminating the need for competitive brute-force computation.", "It deletes old blocks."], correctAnswer: 2, explanation: "PoS eliminates the \"hashing race\" that necessitates immense electricity consumption.", difficulty: "Medium", examImportance: 5
  },
  {
    id: 67, topic: "Blockchain Fundamentals", question: "What function do Digital Signatures (e.g., ECDSA) serve in a blockchain?", options: ["They encrypt the contents of a block.", "They prove that a transaction was authorized by the owner of the private key.", "They mine new blocks.", "They link blocks together."], correctAnswer: 1, explanation: "Cryptography in blockchain focuses on identity and authority (signatures) rather than hiding data (encryption).", difficulty: "Hard", examImportance: 5
  },
  {
    id: 68, topic: "Blocks and Chain Structure", question: "Which field in the Block Header changes constantly as a miner searches for a valid Proof of Work?", options: ["The Merkle Root", "The Previous Hash", "The Nonce", "The Version"], correctAnswer: 2, explanation: "The Nonce is the 'number used once' which is continually incremented to change the resulting block hash.", difficulty: "Easy", examImportance: 4
  },
  {
    id: 69, topic: "Hash Functions", question: "True or False: Knowing a SHA-256 hash allows you to quickly calculate the original data if you use a quantum computer.", options: ["True, quantum computers can decrypt hashes.", "False, hashes are not encrypted, they are mathematically one-way algorithms resistant even to theoretical quantum decryption.", "True, because it is symmetric.", "False, hashes are 128-bit."], correctAnswer: 1, explanation: "Hashing is a one-way mathematical mapping. While quantum computers threaten RSA and elliptic curve, hash functions like SHA-256 are largely quantum-resistant.", difficulty: "Hard", examImportance: 4
  },
  {
    id: 70, topic: "Blockchain Types", question: "Hyperledger Fabric is best classified as an example of:", options: ["A public permissionless blockchain", "A decentralized autonomous organization", "A permissioned consortium/enterprise blockchain", "A cryptocurrency token"], correctAnswer: 2, explanation: "Hyperledger Fabric is an enterprise-grade, permissioned DLT often used for B2B consortiums.", difficulty: "Medium", examImportance: 4
  },
  { id: 71, topic: "Centralized vs Distributed vs Decentralized", question: "An application deployed on AWS across 10 regions worldwide is:", options: ["Decentralized and Distributed", "Centralized and Distributed", "Only Centralized", "Only Decentralized"], correctAnswer: 1, explanation: "It is distributed physically, but centrally controlled by one AWS account/admin.", difficulty: "Medium", examImportance: 3 },
  { id: 72, topic: "Challenges", question: "Why is 'Interoperability' a major challenge for blockchains?", options: ["Because blockchains natively cannot communicate with or trust external systems without relying on centralized or highly complex bridging mechanisms.", "Because nodes are too slow.", "Because hashes frequently collide.", "Because smart contracts restrict data transfer."], correctAnswer: 0, explanation: "Blockchains are isolated state machines. Trusting an event on a different blockchain requires a bridge, which is often a security vulnerability.", difficulty: "Medium", examImportance: 4 },
  { id: 73, topic: "Blocks and Chain Structure", question: "What is a 'Mempool'?", options: ["A pool of miners.", "A database of all past blocks.", "A holding area for unconfirmed transactions waiting to be mined.", "A layer 2 scaling solution."], correctAnswer: 2, explanation: "Transactions sit in the Node's memory pool until a miner includes them in a block.", difficulty: "Medium", examImportance: 4 },
  { id: 74, topic: "Merkle Trees", question: "If the number of transactions in a block is odd (e.g. 5), how is the first layer of the Merkle Tree constructed?", options: ["The 5th transaction is ignored.", "A blank transaction is added.", "The hash of the 5th transaction is duplicated and hashed with itself.", "The tree cannot be built."], correctAnswer: 2, explanation: "To form a pairwise binary tree, an odd leaf hash is duplicated to pair with itself.", difficulty: "Hard", examImportance: 3 },
  { id: 75, topic: "Consensus Mechanisms", question: "Which of the following describes 'Finality' in blockchain?", options: ["When the battery of a node dies.", "The point at which a transaction is considered permanently irreversible.", "The last block in the chain.", "When a user logs out of their wallet."], correctAnswer: 1, explanation: "Finality is the guarantee that past transactions cannot be reversed. PoW has probabilistic finality; PoS often has deterministic finality.", difficulty: "Medium", examImportance: 4 }
];
