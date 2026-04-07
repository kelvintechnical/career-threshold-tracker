# KELVININTECH.COM — 100 COMPOUNDING PROJECTS SYSTEM
# Save this file as: PORTFOLIO_PROJECTS_PROMPT.md in your repo root.
# Version: 1.0 | Last updated: April 2026
# Update instructions at the bottom of this file.

---

## WHO YOU ARE BUILDING FOR

Kelvin R. Tobias. Software Engineer → AI Engineer → Computational Biology PhD.
Background: Diesel mechanic (10 yrs, International/Volvo/Freightliner) → self-taught dev →
Application Support Analyst @ Principle LTC → B.S. Software Engineering WGU (Jan 2026) →
M.S. AI Engineering WGU (Dec 2026) → PhD Computational Biology (long-term).

Primary stack: Python/PyTorch, C#/.NET, React/Next.js, Node.js, PostgreSQL, Azure.
Research niche: Latent-based Directed Evolution (LDE) — VAEs + Transformers navigating
protein sequence space toward optimized biological function.

Core mental model: DNA = Source Code. Proteins = Compiled Executables.
Mutations = Refactoring. Latent Space = Compressed Instruction Set.

GitHub: https://github.com/kelvintechnical/career-threshold-tracker


---

## THE PHILOSOPHY

Every project is a VERSION, not a standalone demo.
Every version compounds the one before it.
Every project has a built-in LLM learning prompt — so Kel can paste it into Claude/GPT
and get a structured lesson covering WHAT it is, WHY it matters, and HOW to build it.
No project is hidden. Every project has meaning, importance, and a place in the arc.

The 100 projects are organized into 5 Flagship Stacks of 20 projects each.
Within each stack, projects are grouped into 4 tiers:
  Tier 1 (Projects 1-5):   Foundations — syntax, tools, core concepts
  Tier 2 (Projects 6-10):  Applied — real data, real pipelines, real problems
  Tier 3 (Projects 11-15): Systems — architecture, integration, production concerns
  Tier 4 (Projects 16-20): Research/Capstone — novel application, research signal, PhD-tier

Each project card on the portfolio shows:
  - Version badge (e.g. "Stack 2 · v07")
  - Tier label ("Foundation" / "Applied" / "Systems" / "Research")
  - Status badge ("Complete" / "In Progress" / "Planned")
  - Title, Problem, Technical Challenge, Compounding line
  - Skill pills (specific, not generic)
  - Links: GitHub | Demo | Article
  - "Learn This" button — opens the LLM prompt for that project in a modal

---

## DATA SOURCE

All project data lives in: /projects.config.json at repo root.
The portfolio UI reads from this file. Kel updates JSON, UI updates automatically.
Never hardcode project data in components.

JSON schema per project:
{
  "stack": "sequence-intelligence",
  "v": 3,
  "tier": "applied",
  "status": "planned",
  "title": "Sequence Embedding Engine",
  "problem": "...",
  "challenge": "...",
  "compounding": "...",
  "skills": ["PyTorch", "Embedding layers", "UniProt API"],
  "courseRef": "Bourke PyTorch § Custom Datasets",
  "courseLink": "https://...",
  "github": "https://github.com/kelvintechnical/...",
  "demo": "",
  "article": "",
  "llmPrompt": "..."
}

---

## STACK 1 — SEQUENCE INTELLIGENCE PIPELINE
Accent color: teal | Maps to: Bioinformatics courses + PyTorch track + LDE research
Career unlock: Bioinformatics Analyst (Bio avg 30%) → Bioinformatics Engineer (Bio avg 70%)

### Project 01 — DNA String Parser
Tier: Foundation | Status: Planned
Problem: Read raw DNA sequences from FASTA files and extract meaningful metadata.
Challenge: Handle malformed input, multi-sequence files, and GC content calculation without a library.
Compounding: Every downstream project in this stack depends on clean sequence I/O. This is the ETL layer.
Skills: Python file I/O, string slicing, regex, FASTA format spec
Course ref: Mariano Bioinformatics §1 + Rosalind.info problems BA1A-BA1C
LLM Prompt:
"""
You are my bioinformatics tutor. I am a software engineer learning computational biology.
Project: DNA String Parser — reading FASTA files and computing GC content without using Biopython.

Teach me in this order:
1. WHAT is a FASTA file? Explain it as a data serialization format (like JSON for DNA). Show me the spec.
2. WHY does GC content matter biologically? Connect it to DNA stability (G-C bonds are stronger than A-T).
3. HOW do I write a Python parser from scratch? Walk me through it step by step.
   - Open and read multi-sequence FASTA files
   - Parse headers vs sequence lines
   - Calculate GC% per sequence
   - Handle edge cases: empty sequences, non-ACGT characters, Windows line endings
4. Show me the complete, annotated code.
5. Give me 3 extension challenges ranked easy → hard.
6. Tell me what Rosalind.info problems to solve next that build on this exact skill.
"""

### Project 02 — Protein Sequence Analyzer
Tier: Foundation | Status: Planned
Problem: Parse UniProt Swiss-Prot entries and extract amino acid composition statistics.
Challenge: UniProt flat-file format is complex — multi-line fields, feature annotations, cross-references.
Compounding: UniProt is the primary dataset for all LDE work. This establishes the data literacy.
Skills: Biopython SeqIO, UniProt flat-file format, amino acid properties, Pandas DataFrames
Course ref: Siddique Bioinformatics §2 + Mariano §3
LLM Prompt:
"""
You are my bioinformatics tutor. Project: Protein Sequence Analyzer using Biopython and UniProt.

Teach me:
1. WHAT is UniProt Swiss-Prot? Explain it as a curated database — what makes it different from TrEMBL.
   Use the analogy: Swiss-Prot is like a thoroughly code-reviewed, merged PR. TrEMBL is the unreviewed queue.
2. WHAT are amino acids as a data structure? 20 characters in an alphabet. Show me the physicochemical
   groupings (hydrophobic, charged, polar) as if they were enum categories.
3. WHY does amino acid composition matter for protein function prediction?
4. HOW to use Biopython SeqIO to parse a Swiss-Prot .dat file, extract sequences, and build a
   Pandas DataFrame of composition statistics.
5. Complete annotated code.
6. Extension: add a function that flags sequences with unusual composition (outlier detection).
"""

### Project 03 — Pairwise Sequence Aligner
Tier: Foundation | Status: Planned
Problem: Implement Needleman-Wunsch global alignment from scratch (no library).
Challenge: The algorithm is a dynamic programming problem on a 2D matrix — understanding the traceback.
Compounding: Alignment scoring is foundational to understanding evolutionary distance, which feeds LDE fitness functions.
Skills: Dynamic programming, scoring matrices, gap penalties, Python 2D arrays
Course ref: Pevzner Bioinformatics Specialization Week 2 + MIT 7.91J §3
LLM Prompt:
"""
You are my algorithms + bioinformatics tutor. I have a software engineering background.
Project: Implement Needleman-Wunsch global alignment from scratch.

Teach me:
1. WHAT is sequence alignment as a graph/DP problem? Map it to shortest-path problems I know.
   Show me the alignment matrix as a DAG (directed acyclic graph).
2. WHY is global vs local alignment (Smith-Waterman) different? Give me the biological use case for each.
3. HOW to implement it step by step:
   - Initialize the scoring matrix
   - Fill the matrix using recurrence relation
   - Traceback to recover the alignment
   - Handle affine gap penalties
4. Show the full Python implementation with detailed comments explaining every line.
5. Show me how to visualize the scoring matrix with matplotlib (heatmap).
6. Tell me what BLOSUM62 is and why it beats a simple match/mismatch scoring scheme.
"""

### Project 04 — DNA → Protein Translator
Tier: Foundation | Status: Planned
Problem: Translate DNA coding sequences to amino acid sequences using the genetic code.
Challenge: Handle all 6 reading frames, stop codons, and ambiguous bases.
Compounding: Translation is the biological analog of compilation. Understanding this deeply informs how mutations (code edits) change protein output (executable behavior).
Skills: Codon tables, reading frames, Python dictionaries, Biopython Seq
Course ref: Mariano §4 + Rosalind.info BA4A-BA4C
LLM Prompt:
"""
You are my bioinformatics tutor. Project: DNA to Protein Translator — all 6 reading frames.

Teach me:
1. WHAT is the genetic code as a lookup table? Show me it as a Python dictionary.
   Explain codons as 3-character opcodes that map to amino acid instructions.
2. WHAT are reading frames? Explain as byte-offset parsing — like reading a binary file
   starting at offset 0, 1, or 2 (and the same for the reverse complement strand).
3. WHY do all 6 reading frames matter for gene finding?
4. HOW to implement:
   - Reverse complement function
   - Codon iterator
   - 6-frame translation
   - ORF (open reading frame) finder: start codon → stop codon
5. Full annotated code.
6. Extension: find the longest ORF across all 6 frames for a given sequence.
"""

### Project 05 — Sequence Statistics Dashboard (Streamlit)
Tier: Foundation | Status: Planned
Problem: Build a deployed web app that accepts any DNA/protein sequence and returns a full statistical report.
Challenge: Clean UI design with Streamlit, handling large sequences without blocking the UI.
Compounding: This is the first deployed project — establishes the deployment pattern used in every future stack.
Skills: Streamlit, matplotlib, sequence statistics, deployment
Course ref: Rosalind.info (first 20 problems as test cases)
LLM Prompt:
"""
You are my Python + bioinformatics tutor. Project: Sequence Statistics Dashboard with Streamlit.

Teach me:
1. WHAT is Streamlit and why is it the right tool for a data science demo (vs Flask/FastAPI)?
2. HOW to structure a Streamlit app cleanly:
   - Sidebar for inputs
   - Main panel for outputs
   - Tabs for different analysis views
3. WHAT statistics to compute: length, GC%, nucleotide frequency, dinucleotide frequency,
   codon usage bias, complexity score (linguistic complexity).
4. HOW to visualize each stat (which chart type and why).
5. HOW to deploy to Streamlit Community Cloud from GitHub (step by step).
6. Full annotated code.
"""

### Project 06 — BLAST Results Parser + Homology Hunter
Tier: Applied | Status: Planned
Problem: Query NCBI BLAST programmatically and parse results to find homologous sequences.
Challenge: NCBI rate limits, XML result parsing, filtering by e-value and identity thresholds.
Compounding: Homology search is how you find evolutionary relatives — the biological equivalent of finding duplicate code across codebases.
Skills: Biopython BLAST API, XML parsing, e-value statistics, pandas filtering
Course ref: Siddique §4 + MIT 7.91J §5
LLM Prompt:
"""
You are my bioinformatics tutor. Project: Programmatic BLAST search and homology analysis.

Teach me:
1. WHAT is BLAST algorithmically? Explain it as an approximate string search with statistical scoring
   (not exact dynamic programming — it uses seeds and extensions for speed).
2. WHAT is an e-value? Explain it as a p-value analog — the expected number of hits by random chance.
3. WHY does homology detection matter for LDE? (Finding natural variants = finding the edges of viable sequence space)
4. HOW to use Biopython's NCBLAST to query programmatically, parse XML results, and filter hits.
5. HOW to build a homolog DataFrame: sequence ID, e-value, % identity, alignment length, organism.
6. Full annotated code with rate-limit handling (sleep + retry logic).
7. Extension: cluster the homologs by sequence identity and visualize as a dendrogram.
"""

### Project 07 — Multiple Sequence Aligner + Phylogenetic Tree
Tier: Applied | Status: Planned
Problem: Align a family of related proteins and build a phylogenetic tree visualizing their evolutionary relationships.
Challenge: MSA is NP-hard — understanding why heuristic tools (ClustalW, MUSCLE) exist and when they fail.
Compounding: Phylogenetic trees are the "git history" of evolution — this teaches you to read the evolutionary trajectory that LDE tries to accelerate.
Skills: Biopython MSA, ClustalW wrapper, Phylo module, tree visualization
Course ref: Pevzner Week 4
LLM Prompt:
"""
You are my computational biology tutor. Project: Multiple Sequence Alignment and phylogenetic tree.

Teach me:
1. WHAT is MSA as an optimization problem? Explain the sum-of-pairs scoring function.
2. WHY is exact MSA NP-hard? What does that mean practically? (hint: think combinatorial explosion)
3. WHAT is a phylogenetic tree as a data structure? It's a tree where leaves are sequences
   and branch lengths encode evolutionary distance (like a weighted DAG).
4. HOW to use Biopython to: run ClustalW, parse the alignment, build a distance matrix,
   construct a tree using neighbor-joining, and visualize it.
5. Full annotated code.
6. WHAT does this teach you about sequence space? (Similar sequences cluster together —
   this is the biological intuition behind why VAE latent spaces work for proteins.)
"""

### Project 08 — Hidden Markov Model for Gene Prediction
Tier: Applied | Status: Planned
Problem: Build a profile HMM that learns the statistical signature of a protein family and classifies new sequences.
Challenge: HMM forward/backward/Viterbi algorithms are mathematically dense — connecting the math to the biology.
Compounding: HMMs are the statistical predecessor to transformer attention. Understanding them deeply makes transformers click. Also: HMMER (the standard tool) is built on profile HMMs.
Skills: hmmlearn, profile HMMs, Viterbi algorithm, log-likelihood scoring
Course ref: Durbin "Biological Sequence Analysis" Ch 5-6 + Pevzner Week 5
LLM Prompt:
"""
You are my ML + bioinformatics tutor. I understand basic ML. Project: Profile HMM for protein family classification.

Teach me:
1. WHAT is a Hidden Markov Model as a probabilistic state machine?
   Use the diesel engine analogy: HMM states are like engine operating modes (idle, load, redline).
   Emissions are the observable sensor readings. The hidden states are the actual engine condition.
2. WHAT is a profile HMM specifically? How does it differ from a general HMM?
   Explain it as a learned "consensus template" for a sequence family.
3. WHY do profile HMMs matter for bioinformatics? (HMMER, Pfam domain detection)
4. HOW to implement with hmmlearn:
   - Train on a set of aligned sequences
   - Score new sequences using log-likelihood
   - Interpret what the model learned
5. WHAT is the Viterbi algorithm? Explain it as finding the most likely "state path" through a sequence.
6. Full annotated code.
7. CONNECTION: explain how transformer self-attention is the neural network generalization of what HMMs do.
"""

### Project 09 — Protein Feature Engineering Pipeline
Tier: Applied | Status: Planned
Problem: Convert raw protein sequences into numerical feature vectors suitable for ML models.
Challenge: Choosing the right featurization — physicochemical properties vs k-mer frequencies vs embedding-based features.
Compounding: This is the data preprocessing layer that every downstream ML project (Projects 11-20) depends on.
Skills: Feature engineering, physicochemical indices, k-mer counting, scikit-learn transformers
Course ref: Portilla §6-7 + Siddique §5
LLM Prompt:
"""
You are my ML + bioinformatics tutor. Project: Protein feature engineering — turning sequences into ML-ready vectors.

Teach me:
1. WHAT is the fundamental problem? Sequences are variable-length strings.
   ML models need fixed-length numerical vectors. Show me the 3 main approaches:
   - Physicochemical properties (hydrophobicity, charge, molecular weight per residue → statistics)
   - K-mer frequency vectors (sequence as bag-of-words)
   - Pre-trained embeddings (ESM2, ProtTrans)
2. WHY does choice of featurization matter? Show a concrete example where k-mers fail
   but physicochemical features succeed (hint: insertion/deletion mutations).
3. HOW to implement all three as scikit-learn compatible transformers (fit/transform API).
4. HOW to evaluate which featurization is best for a given task using cross-validated performance.
5. Full annotated code with a comparison experiment.
6. Connection to LDE: explain why learned embeddings (from transformers) are superior to hand-crafted
   features for navigating sequence space.
"""

### Project 10 — Sequence Classification with Random Forest + Interpretability
Tier: Applied | Status: Planned
Problem: Train a Random Forest to classify protein sequences by function, then explain WHY it classified each one.
Challenge: Getting from "the model is 87% accurate" to "these 5 physicochemical features drive the classification."
Compounding: Interpretability is a research requirement. This project teaches SHAP values — a technique that scales directly to neural networks in Projects 13-15.
Skills: scikit-learn, Random Forest, SHAP, feature importance, model explainability
Course ref: Portilla §10-11
LLM Prompt:
"""
You are my ML tutor. Project: Interpretable protein function classifier using Random Forest + SHAP.

Teach me:
1. WHAT is a Random Forest? Explain it as an ensemble of decision trees — each tree is a
   "specialist" and the forest is a committee vote. Explain bias-variance tradeoff.
2. WHY does feature importance from Random Forest alone mislead you?
   (hint: correlated features split importance artificially)
3. WHAT is SHAP (SHapley Additive exPlanations)? Explain it using game theory —
   each feature's contribution is its "fair share" of the model's prediction.
4. HOW to: train the classifier, evaluate with proper cross-validation, compute SHAP values,
   and visualize a SHAP summary plot.
5. Full annotated code.
6. Make me connect this to biology: if the top SHAP features are hydrophobicity at positions 10-15,
   what does that mean about the protein's structure?
"""

### Project 11 — De Novo Sequence Generator with Markov Chain
Tier: Systems | Status: Planned
Problem: Generate novel DNA/protein sequences that statistically resemble a training set, using a Markov chain.
Challenge: Controlling for biological validity — generated sequences must be plausible, not just statistically similar.
Compounding: This is the first GENERATIVE project. It establishes the core concept of "sampling from a learned distribution" before moving to VAEs and neural generation.
Skills: Markov chains, transition matrices, sampling, biological validity checks
Course ref: MIT 7.91J §8 + Durbin Ch 2
LLM Prompt:
"""
You are my ML + bioinformatics tutor. Project: Markov Chain sequence generator.

Teach me:
1. WHAT is a Markov Chain as a probabilistic model? Use the analogy of predicting the next
   gear shift in a diesel truck — given current gear + RPM, what's the probability distribution
   over next gear? Sequences work the same way.
2. WHY is this a useful baseline before neural generative models?
   What are its failure modes? (it can't model long-range dependencies)
3. HOW to:
   - Build an order-N Markov model from a training set of sequences
   - Sample new sequences from the model
   - Evaluate generated sequences using physicochemical plausibility checks
4. Full annotated code.
5. CONNECTION: explain how this project is the conceptual foundation for Project 14 (VAE).
   VAE latent space is a continuous, learned version of the Markov transition matrix.
"""

### Project 12 — Neural Sequence Classifier (PyTorch LSTM)
Tier: Systems | Status: Planned
Problem: Train an LSTM to classify protein sequences by functional family, replacing the Random Forest from Project 10.
Challenge: Handling variable-length sequences, vanishing gradients, deciding when RNN vs CNN is the right tool.
Compounding: This is the first neural network project on biological sequences. The DataLoader and training loop patterns here are reused in every project through 20.
Skills: PyTorch LSTM, DataLoader for sequences, padding/masking, training loop, validation
Course ref: Bourke PyTorch §4-5
LLM Prompt:
"""
You are my PyTorch + bioinformatics tutor. Project: LSTM protein sequence classifier.

Teach me:
1. WHAT is an LSTM cell? Explain the gates as a memory management system:
   - Forget gate = deciding what old state to evict (like cache eviction)
   - Input gate = deciding what new information to store
   - Output gate = deciding what to expose to the next layer
2. WHY do we use LSTMs for sequences instead of standard neural networks?
   (variable length, long-range dependencies, position matters)
3. WHY might a 1D CNN actually outperform LSTM on many sequence tasks? When to prefer each?
4. HOW to build in PyTorch:
   - Custom Dataset class for sequences (tokenization, padding, masking)
   - LSTM model with dropout
   - Training loop with early stopping
   - Evaluation: accuracy, confusion matrix, per-class F1
5. Full annotated PyTorch code.
6. Tell me what the hidden state h_t represents biologically — it's the model's "running summary"
   of what it has seen so far in the sequence.
"""

### Project 13 — Transformer Encoder for Sequence Representation (from scratch)
Tier: Systems | Status: Planned
Problem: Implement a transformer encoder from scratch and train it to generate sequence representations.
Challenge: Self-attention mechanism, positional encoding, understanding what the model learns.
Compounding: This is the architecture backbone of ESM2, ProtTrans, and AlphaFold. Implementing it from scratch is the difference between a user and a researcher.
Skills: Self-attention, positional encoding, multi-head attention, PyTorch nn.Module
Course ref: Karpathy "Neural Networks: Zero to Hero" + Bourke §7-8
LLM Prompt:
"""
You are my deep learning tutor. I've built LSTMs. Project: Transformer encoder from scratch in PyTorch.

Teach me:
1. WHAT is self-attention? Explain it with this analogy:
   For each amino acid in a protein sequence, self-attention asks:
   "Which other residues should I pay attention to in order to understand my own function?"
   The Q/K/V matrices are learned lookup: Q=what am I looking for, K=what do I offer, V=what I pass forward.
2. WHY does this outperform LSTMs for sequence modeling? (parallelizable, captures long-range dependencies)
3. WHAT is positional encoding and why do transformers need it when LSTMs don't?
4. HOW to implement from scratch:
   - Scaled dot-product attention (single head)
   - Multi-head attention
   - Feed-forward sublayer
   - Positional encoding
   - Full encoder block
   - Classification head
5. Full annotated PyTorch code. Every line explained.
6. Show me what the attention weights look like on a protein sequence — which residues attend to which.
"""

### Project 14 — Variational Autoencoder on Protein Sequences (THE core LDE project)
Tier: Systems | Status: Planned
Problem: Build a VAE that compresses protein sequences into a continuous latent space and reconstructs them.
Challenge: The reparameterization trick, KL divergence loss balancing, making the latent space meaningful.
Compounding: This IS the latent space from the LDE definition. Everything in Projects 15-20 operates inside this latent space.
Skills: VAE architecture, ELBO loss, reparameterization trick, latent space visualization (t-SNE/UMAP)
Course ref: Fast.ai Part 2 §8 + Bishop PRML Ch 9
LLM Prompt:
"""
You are my deep learning + bioinformatics research tutor. Project: Variational Autoencoder on protein sequences.
This is the most important project in my entire curriculum. Take it seriously.

Teach me:
1. WHAT is a VAE, contrasted with a standard autoencoder?
   Standard AE: sequence → compressed code → reconstruction (deterministic)
   VAE: sequence → (mean, variance) of a Gaussian → SAMPLE from that Gaussian → reconstruction
   The latent space is now a probability distribution, not a fixed point.
2. WHY does this matter for directed evolution?
   Because similar sequences cluster together in latent space, and we can INTERPOLATE
   between them — moving continuously through sequence space is impossible with random mutation
   but trivial in latent space.
3. WHAT is the ELBO loss? Derive it from first principles:
   ELBO = Reconstruction loss + KL divergence penalty
   Explain KL divergence as "how far is my learned distribution from a standard Gaussian?"
4. WHAT is the reparameterization trick and why is it necessary for backpropagation?
   (You can't backprop through a random sample — the trick makes it differentiable)
5. HOW to implement in PyTorch:
   - Encoder: sequence → (mu, log_var)
   - Reparameterization: z = mu + epsilon * exp(0.5 * log_var)
   - Decoder: z → reconstructed sequence
   - ELBO loss with beta weighting (beta-VAE)
   - Training loop
   - Latent space visualization with UMAP colored by protein function
6. Full annotated code. Every line. Every math equation explained in code comments.
7. Tell me what a "smooth" vs "collapsed" latent space looks like and how to diagnose each.
"""

### Project 15 — Latent Space Interpolation + Sequence Generation
Tier: Systems | Status: Planned
Problem: Using the trained VAE from Project 14, interpolate between two proteins in latent space and decode the trajectory as novel sequences.
Challenge: Ensuring generated sequences are biologically valid — distinguishing "novel but plausible" from "nonsense."
Compounding: This is the "directed navigation" phase of LDE. You have the map (VAE). Now you're walking it.
Skills: Latent vector arithmetic, spherical interpolation, biological validity scoring, diversity metrics
Course ref: Fast.ai Part 2 §9
LLM Prompt:
"""
You are my AI research tutor. Project: Latent space interpolation for protein sequence generation.

Teach me:
1. WHAT is interpolation in latent space? Show me the linear interpolation formula.
   Explain WHY spherical interpolation (slerp) is often better than linear (lerp) for VAE latent spaces.
2. WHAT does it mean biologically to interpolate between Protein A and Protein B?
   You're generating sequences that are "evolutionary intermediates" — proteins that might have
   existed on the ancestral path between A and B.
3. HOW to:
   - Encode two real proteins to get z_A and z_B
   - Generate 10 interpolated z vectors
   - Decode each to a sequence
   - Score each generated sequence for plausibility (use a pre-trained language model log-likelihood)
4. HOW to visualize the trajectory in 2D using UMAP projection of the full latent space.
5. Full annotated code.
6. Challenge: What happens when you extrapolate BEYOND z_B? What does the model generate?
   This is how you discover novel sequence space.
"""

### Project 16 — Fitness Function Design for Directed Evolution
Tier: Research | Status: Planned
Problem: Define a computational "fitness function" that scores how good a protein is for a target property (thermostability, binding affinity, solubility).
Challenge: Fitness functions are proxies — understanding their limitations and failure modes is a research skill.
Compounding: Without a fitness function, latent space navigation is random. This gives the VAE a TARGET.
Skills: Rosetta scoring, physicochemical stability proxies, correlation analysis, benchmarking
Course ref: MIT 7.91J §10 + primary literature (Protein Engineering papers)
LLM Prompt:
"""
You are my computational biology research tutor. Project: Fitness function design for protein optimization.

Teach me:
1. WHAT is a fitness function in directed evolution? Map it to a loss function in ML:
   just as a loss function tells the optimizer "how wrong are you?", a fitness function
   tells the search algorithm "how good is this sequence?"
2. WHAT are the main proxy fitness functions used in computational protein design:
   - Physicochemical: hydrophobic moment, charge distribution, predicted isoelectric point
   - Energy-based: Rosetta scoring function (simplified version)
   - ML-based: sequence log-likelihood from a protein language model (ESM2)
3. WHY are all proxy fitness functions imperfect? What is "fitness landscape ruggedness"?
   Use the analogy of a terrain with multiple peaks — gradient descent gets stuck in local optima.
4. HOW to implement three fitness functions in Python and benchmark them against experimental data.
5. WHAT is oracle-efficient optimization? (minimizing calls to expensive fitness evaluations)
6. Point me to 3 landmark papers in computational protein design fitness functions.
"""

### Project 17 — Bayesian Optimization in Latent Space
Tier: Research | Status: Planned
Problem: Use Gaussian Process Bayesian Optimization to efficiently search the VAE latent space toward high-fitness sequences.
Challenge: BO is sample-efficient but requires a differentiable acquisition function — connecting the math to the implementation.
Compounding: This is the "directed" in Directed Evolution — replacing random walks with intelligent search.
Skills: GPyTorch or BoTorch, acquisition functions (EI, UCB), surrogate models, sample efficiency
Course ref: Karpathy + BoTorch documentation + LDE primary literature
LLM Prompt:
"""
You are my ML research tutor. Project: Bayesian Optimization in VAE latent space for protein design.

Teach me:
1. WHAT is Bayesian Optimization? Explain it as an intelligent search strategy:
   Instead of randomly sampling the space (random mutagenesis) or following gradients blindly,
   BO builds a probabilistic MAP of the fitness landscape and samples where it's most
   likely to improve (exploration-exploitation tradeoff).
2. WHAT is a Gaussian Process? Explain it as a distribution over FUNCTIONS, not points.
   It gives you both a predicted fitness value AND an uncertainty estimate at every point.
3. WHAT is an acquisition function? Explain Expected Improvement (EI):
   EI = expected amount by which the next sample will beat the current best.
   This directly encodes "should I explore uncertain regions or exploit known good ones?"
4. HOW to implement with BoTorch:
   - Define the search space as the VAE latent space
   - Initialize with 10 random sequences + fitness scores
   - Fit a GP surrogate model
   - Optimize the acquisition function to propose the next sequence to evaluate
   - Decode the proposed z vector to a sequence
   - Loop: evaluate fitness, update GP, propose next
5. Full annotated code.
6. Show me how this reduces the number of fitness evaluations by 10x vs random search.
"""

### Project 18 — Protein Language Model Fine-Tuning (ESM2)
Tier: Research | Status: Planned
Problem: Fine-tune the ESM2 protein language model on a specific protein family to improve sequence generation for that family.
Challenge: Working with a large pretrained model, PEFT techniques (LoRA), managing GPU memory.
Compounding: ESM2 is state-of-the-art. Fine-tuning it on your target family makes it a specialist — dramatically improving the quality of generated sequences vs the general VAE.
Skills: HuggingFace transformers, ESM2, LoRA/PEFT, masked language modeling, fine-tuning
Course ref: Bourke §8-9 + HuggingFace PEFT docs
LLM Prompt:
"""
You are my deep learning research tutor. Project: Fine-tuning ESM2 protein language model with LoRA.

Teach me:
1. WHAT is ESM2? Explain it as a protein-specialized BERT:
   Trained on 250M protein sequences, it learned the "grammar" of protein sequences —
   which amino acids are likely to appear together, which substitutions preserve function.
2. WHAT is masked language modeling (MLM) pretraining?
   During training, random residues are masked and the model learns to predict them.
   This forces the model to learn contextual representations of the entire sequence.
3. WHY is fine-tuning on a specific family valuable for LDE?
   General ESM2 knows all proteins. Fine-tuned ESM2 knows YOUR protein family deeply.
4. WHAT is LoRA (Low-Rank Adaptation)? Explain it as adding a small "adapter" layer
   that modifies the model's behavior without retraining all parameters.
   Analogy: like adding a shim to a diesel injector — small modification, big impact.
5. HOW to implement:
   - Load ESM2 from HuggingFace
   - Apply LoRA adapters with PEFT library
   - Fine-tune on a custom protein family dataset
   - Use the fine-tuned model as a fitness function proxy
6. Full annotated code.
"""

### Project 19 — End-to-End LDE Pipeline
Tier: Research | Status: Planned
Problem: Integrate VAE (Project 14) + Fitness Function (Project 16) + Bayesian Optimization (Project 17) into a single automated pipeline.
Challenge: System integration — making the components communicate reliably, logging experiments, handling failures.
Compounding: This IS the LDE pipeline. Projects 1-18 were all building toward this.
Skills: Pipeline architecture, MLflow experiment tracking, modular Python, error handling, reproducibility
Course ref: All prior projects + MLflow docs
LLM Prompt:
"""
You are my ML systems + research tutor. Project: End-to-end Latent-based Directed Evolution pipeline.

This is the capstone of my bioinformatics stack. Help me understand the FULL system.

Teach me:
1. WHAT is the complete LDE pipeline as a system diagram? Walk through every stage:
   Raw sequences → Feature encoding → VAE training → Latent space → BO search →
   Sequence decoding → Fitness evaluation → Iteration
2. WHY is reproducibility critical in computational research?
   Show me how MLflow experiment tracking ensures every run is logged and reproducible.
3. HOW to architect the pipeline as modular Python:
   - Each stage as a class with a standard interface
   - Config-driven (YAML config file controls all hyperparameters)
   - Logging at every stage
   - Checkpoint saving (resume from any stage)
4. HOW to evaluate the pipeline: are the generated sequences better than random? Better than
   greedy mutagenesis? Show me the evaluation protocol.
5. Full system code architecture.
6. Tell me what a PhD advisor would want to see from this project in a research presentation.
"""

### Project 20 — LDE Research Demo + HuggingFace Deployment
Tier: Research | Status: Planned
Problem: Package the LDE pipeline as an interactive research demo deployed to HuggingFace Spaces.
Challenge: Making a complex research pipeline accessible to non-technical users without hiding the science.
Compounding: This is the public-facing research artifact. This is what you show PhD committees, biotech companies, and conference audiences.
Skills: Gradio, HuggingFace Spaces, research communication, demo design
Course ref: Bourke §10 (deployment) + science communication
LLM Prompt:
"""
You are my research communication tutor. Project: LDE research demo deployment.

Teach me:
1. WHAT makes a good research demo? The audience is: PhD committee, biotech hiring manager,
   conference attendee who has 2 minutes. Design for ALL THREE.
2. HOW to build a Gradio interface that:
   - Accepts a protein sequence as input
   - Shows the VAE encoding in 2D UMAP space
   - Allows the user to "move" in latent space with sliders
   - Decodes and displays the resulting novel sequence
   - Scores it with the fitness function
3. HOW to write a README that a PI (Principal Investigator) would read and understand.
   Structure: Problem → Method → Results → Future Work. No jargon without definition.
4. HOW to deploy to HuggingFace Spaces with a GitHub Actions CI/CD pipeline.
5. Full annotated code.
6. Draft the 3-sentence "elevator pitch" for this demo that I can say at a conference.
"""

---

## STACK 2 — AGENTIC AI SYSTEMS
Accent color: purple | Maps to: Donner course (0-100%) + LangGraph + MCP
Career unlock: LLM Engineer (17%) → AI Engineer Mid (33%) → LangGraph Engineer (50%) → MCP Architect (83%) → Principal AI Engineer (100%)

### Project 21 — LLM Prompt Engineering Lab
Tier: Foundation | Status: Planned
Problem: Systematically test and document prompt engineering techniques with measurable output quality.
Challenge: Most people treat prompting as art. This project treats it as engineering — with experiments, metrics, and conclusions.
Compounding: Every agent in this stack is only as good as its prompts. This builds the foundation.
Skills: Anthropic/OpenAI APIs, prompt templates, output evaluation, Python
Course ref: Donner §1-2
LLM Prompt:
"""
You are my LLM engineering tutor. Project: Prompt Engineering Lab — systematic experimentation.

Teach me:
1. WHAT is prompt engineering as a discipline? Frame it as hyperparameter tuning for language models.
2. WHAT are the core techniques? Explain each with a concrete example:
   - Zero-shot vs few-shot prompting
   - Chain of thought (CoT)
   - Role prompting
   - Constitutional AI prompting
   - XML structured output prompting
3. HOW to design a prompt experiment:
   - Define a task with a measurable output (e.g., classification accuracy, BLEU score)
   - Vary one prompt variable at a time
   - Log: prompt template, model, temperature, output, score
4. HOW to use the Anthropic API in Python to run batch experiments.
5. Full annotated code for a prompt experiment runner.
6. Give me 5 prompt engineering experiments to run on a biological sequence classification task.
"""

### Project 22 — Tool-Calling LLM Agent (Single Tool)
Tier: Foundation | Status: Planned
Problem: Build an agent that can call a single external tool (web search or calculator) to answer questions it couldn't otherwise answer.
Challenge: Understanding the tool call / tool result cycle, handling tool failures gracefully.
Compounding: Single tool → multi-tool → domain tools → MCP servers. This is step 1.
Skills: LangChain tool calling, function calling API, tool definition, error handling
Course ref: Donner §3-5
LLM Prompt:
"""
You are my AI engineering tutor. Project: Tool-calling LLM agent with a single tool.

Teach me:
1. WHAT is function/tool calling? Explain it as the LLM producing a structured JSON "request"
   that your code interprets and executes, then feeds the result back.
   Analogy: the LLM is a mechanic telling a technician what diagnostic to run.
   The technician (your code) runs it and reports back. The mechanic interprets the result.
2. WHAT is the ReAct pattern (Reason + Act)? Show me the loop:
   Thought → Action → Observation → Thought → ... → Final Answer
3. HOW to implement with LangChain:
   - Define a tool with name, description, and Python function
   - Bind the tool to a model
   - Run the agent loop
   - Parse and handle tool results
4. HOW to handle tool failures: timeout, malformed response, API error.
5. Full annotated code.
"""

### Project 23 — Multi-Tool Research Agent
Tier: Foundation | Status: Planned
Problem: Build an agent with 3+ tools (web search, code execution, calculator) that can decompose complex questions.
Challenge: Tool selection — the agent must learn WHICH tool to use when. Prompt engineering the tool descriptions is the key skill.
Compounding: Multi-tool is the foundation for domain-specialist agents where tools are bioinformatics APIs.
Skills: LangChain AgentExecutor, tool selection, chain-of-thought, multi-step reasoning
Course ref: Donner §6-8
LLM Prompt:
"""
You are my AI engineering tutor. Project: Multi-tool research agent.

Teach me:
1. WHAT is the tool selection problem? The agent reads tool descriptions and decides which to call.
   WHAT makes a good tool description? (Precision matters — vague descriptions cause wrong tool selection)
2. HOW does an agent decompose a multi-step question?
   Walk through an example: "What is the melting temperature of the protein with UniProt ID P53_HUMAN?"
   Steps: look up sequence → calculate Tm → format answer
3. HOW to implement with LangChain:
   - Define 3 tools: web_search, code_executor, protein_lookup
   - Configure the agent with the ReAct prompt
   - Run on 10 test questions and evaluate tool selection accuracy
4. HOW to debug agent failures: add verbose=True logging, trace the reasoning chain.
5. Full annotated code.
6. WHAT are the failure modes? (tool hallucination, infinite loops, ignoring tool output)
"""

### Project 24 — Memory-Augmented Agent
Tier: Foundation | Status: Planned
Problem: Build an agent with persistent memory — it remembers facts across sessions and uses them in future conversations.
Challenge: Memory retrieval quality (RAG), deciding what to remember vs forget, memory update strategies.
Compounding: Memory transforms a stateless tool into a learning system. This is the foundation for the lab assistant in Project 28.
Skills: LangChain memory, vector stores (Chroma/FAISS), RAG, embeddings
Course ref: Donner §9-10
LLM Prompt:
"""
You are my AI engineering tutor. Project: Memory-augmented agent with persistent RAG memory.

Teach me:
1. WHAT are the types of agent memory?
   - Conversation buffer (short-term, verbatim)
   - Summary memory (short-term, compressed)
   - Vector store memory (long-term, semantic retrieval)
   Map these to human memory types: working memory, episodic, semantic.
2. WHAT is RAG (Retrieval Augmented Generation)? Explain the pipeline:
   Store facts as embeddings → at query time, embed the question → find k nearest neighbors →
   inject retrieved facts into the prompt → LLM answers with grounded context.
3. WHY is this better than just "putting everything in the context window"?
   (cost, latency, context length limits, irrelevant information injection)
4. HOW to implement with LangChain + Chroma:
   - Store conversation facts as vector embeddings
   - Retrieve relevant memories at each turn
   - Update memory after each session
5. Full annotated code.
"""

### Project 25 — LangGraph Stateful Agent
Tier: Applied | Status: Planned
Problem: Re-implement the research agent using LangGraph's state machine architecture for reliable multi-step workflows.
Challenge: Understanding nodes, edges, and conditional routing — thinking about agents as state machines, not just chains.
Compounding: LangGraph is the production-grade framework. Everything from here uses it.
Skills: LangGraph, StateGraph, node design, conditional edges, checkpointing
Course ref: Donner §11-14
LLM Prompt:
"""
You are my AI engineering tutor. Project: LangGraph stateful agent.

Teach me:
1. WHAT is LangGraph and WHY is it better than LangChain AgentExecutor for complex workflows?
   Explain it as replacing an unstructured while loop with a proper state machine.
   The diesel analogy: AgentExecutor is like a mechanic working from memory.
   LangGraph is like a documented diagnostic procedure with defined states and transitions.
2. WHAT is a StateGraph? Explain:
   - State: the typed data object that flows through the graph
   - Nodes: functions that transform the state
   - Edges: connections between nodes (unconditional and conditional)
   - Conditional routing: the if/else logic that decides which node runs next
3. HOW to implement:
   - Define a TypedDict state
   - Write 3 node functions
   - Wire them with add_edge and add_conditional_edges
   - Add a checkpointer for persistence
4. Full annotated code.
5. Show me how to visualize the graph as a diagram.
"""

### Project 26 — Bioinformatics Domain Agent
Tier: Applied | Status: Planned
Problem: Build a LangGraph agent where ALL tools are bioinformatics APIs (NCBI BLAST, UniProt, PDB).
Challenge: Domain-specific tool design, structured output parsing for scientific data, handling API rate limits.
Compounding: This bridges Stack 1 (bio knowledge) and Stack 2 (agent architecture). This is the project that makes your portfolio unique.
Skills: NCBI API, UniProt REST API, PDB API, structured outputs, LangGraph
Course ref: Donner §15 + Siddique §6
LLM Prompt:
"""
You are my AI engineering + bioinformatics tutor. Project: Bioinformatics research agent.
This project bridges two of my core skill stacks. Help me understand both sides.

Teach me:
1. WHAT biological databases should my agent have access to?
   - NCBI Entrez: sequences, literature, taxonomy
   - UniProt: protein function annotations
   - PDB (Protein Data Bank): 3D structures
   - Rosalind.info (for practice problems)
   Explain what each database contains and what queries it can answer.
2. HOW to wrap each API as a LangGraph tool:
   - Tool name and description (this is what the LLM reads to decide when to use it)
   - Input schema (Pydantic model)
   - API call + error handling
   - Output formatting for LLM consumption
3. HOW to design a system prompt that makes the agent reason like a computational biologist.
4. Test case: ask the agent "Find all known thermostable variants of Taq polymerase and
   summarize their key mutations."
5. Full annotated code.
"""

### Project 27 — Multi-Agent Collaboration System
Tier: Applied | Status: Planned
Problem: Design a system where multiple specialized agents collaborate — a planner agent delegates to worker agents.
Challenge: Agent communication protocols, avoiding redundant work, synthesizing outputs from multiple agents.
Compounding: Multi-agent systems are the architecture for Project 29 (full lab assistant) and real production systems.
Skills: LangGraph multi-agent, supervisor pattern, agent communication, parallel execution
Course ref: Donner §16-18
LLM Prompt:
"""
You are my AI systems tutor. Project: Multi-agent collaboration with supervisor pattern.

Teach me:
1. WHAT is the supervisor pattern? One agent (the supervisor/planner) decomposes the task
   and routes to specialist agents. Each specialist does one thing well.
   Analogy: a shop foreman (supervisor) assigns work to mechanics (specialists).
2. WHAT are the failure modes of multi-agent systems?
   - Context loss between agents
   - Circular delegation
   - Inconsistent state
   - Cost explosion
3. HOW to implement in LangGraph:
   - Supervisor node that routes to worker nodes
   - Shared state TypedDict passed between all agents
   - Each worker returns its result to the shared state
   - Supervisor synthesizes and decides if more work is needed
4. HOW to add parallel execution (multiple workers running simultaneously).
5. Full annotated code.
"""

### Project 28 — MCP Server (Custom Tool Provider)
Tier: Applied | Status: Planned
Problem: Build a custom MCP (Model Context Protocol) server that exposes your bioinformatics tools as MCP-compatible endpoints.
Challenge: Understanding the MCP protocol, tool schema design, server hosting.
Compounding: MCP turns your tools into a reusable service any MCP-compatible client can consume. This is the "publish your tools" moment.
Skills: MCP protocol, FastAPI or SSE server, tool schema, JSON-RPC
Course ref: Donner §19-22
LLM Prompt:
"""
You are my AI infrastructure tutor. Project: Custom MCP server for bioinformatics tools.

Teach me:
1. WHAT is the Model Context Protocol? Explain it as a standardized "USB interface" for AI tools.
   Just as USB lets any device connect to any computer, MCP lets any AI client use any tool server.
2. WHAT does an MCP server expose?
   - Tools (functions the model can call)
   - Resources (data the model can read)
   - Prompts (templates the model can use)
3. HOW to build an MCP server in Python:
   - Define tool schemas (name, description, input JSON schema)
   - Implement tool handlers
   - Set up SSE (Server-Sent Events) transport
   - Test with Claude Desktop as the client
4. HOW to deploy your MCP server so it's accessible from anywhere.
5. Full annotated code.
6. Show me the complete MCP message flow as a sequence diagram.
"""

### Project 29 — Full AI Lab Assistant (MCP + LangGraph + Memory)
Tier: Systems | Status: Planned
Problem: Integrate all previous agent work into a complete lab assistant: MCP tools + LangGraph state machine + persistent memory.
Challenge: System integration at scale — making a reliable, debuggable, cost-aware production agent.
Compounding: This is the production agent. It combines everything from Projects 21-28.
Skills: Full-stack agent architecture, production reliability, cost tracking, monitoring
Course ref: Donner §23-26
LLM Prompt:
"""
You are my AI systems architect tutor. Project: Production AI lab assistant.

Teach me:
1. WHAT makes an agent "production-ready" vs "demo-ready"?
   List the dimensions: reliability, cost, latency, observability, safety.
2. HOW to implement each dimension:
   - Reliability: retry logic, fallback tools, graceful degradation
   - Cost: token counting, model routing (cheap model for simple tasks, expensive for hard)
   - Latency: async tool calls, streaming responses
   - Observability: LangSmith tracing, structured logging
   - Safety: input validation, output guardrails, rate limiting
3. HOW to architect the system:
   - Entry point (API or CLI)
   - Router (classify the request type)
   - LangGraph state machine (orchestrate)
   - MCP tools (execute)
   - Memory (context)
   - Response formatter
4. Full system architecture diagram + annotated code.
"""

### Project 30 — Deployed Agent API + Dashboard
Tier: Systems | Status: Planned
Problem: Deploy the lab assistant as a production API with a React dashboard for monitoring usage, costs, and conversation history.
Challenge: Cloud deployment, authentication, real-time streaming, cost dashboard.
Compounding: This is the deployable version of the agent stack — turns a research tool into a product.
Skills: FastAPI, React, WebSockets/SSE streaming, AWS deployment, authentication
Course ref: Donner §27-28 + AWS MLA §SageMaker Endpoints
LLM Prompt:
"""
You are my full-stack + AI deployment tutor. Project: Deployed agent API with monitoring dashboard.

Teach me:
1. HOW to expose a LangGraph agent as a streaming FastAPI endpoint:
   - POST /chat → starts a conversation
   - GET /chat/{id}/stream → SSE stream of agent responses including tool calls
   - GET /conversations → list history
2. HOW to build a React dashboard showing:
   - Live conversation with streaming tokens
   - Tool call visualization (show which tools fired)
   - Cost tracker (tokens used × price per token)
   - Conversation history sidebar
3. HOW to deploy to AWS:
   - FastAPI backend on Lambda or ECS
   - React frontend on S3 + CloudFront
   - Environment secrets in AWS Secrets Manager
4. HOW to add authentication (API key or OAuth).
5. Full annotated code for both frontend and backend.
"""

### Projects 31-40 — Continue Agentic Stack (Applied → Research tier)

# Project 31: LangGraph + RAG over research papers (PubMed integration)
# Project 32: Agent that writes, runs, and debugs Python code autonomously
# Project 33: Adversarial agent testing (red-teaming your own agents)
# Project 34: Agent cost optimizer (routing between GPT-4o vs Claude vs Haiku based on task)
# Project 35: LangGraph workflow for automated literature review
# Project 36: Agent that generates and submits bioinformatics analyses (automated pipeline runner)
# Project 37: Multi-modal agent (processes protein structure images + sequences)
# Project 38: Agent safety evaluation framework
# Project 39: Production MCP marketplace (multi-server registry + discovery)
# Project 40: Autonomous research assistant (full literature → hypothesis → experiment design loop)

# NOTE TO CURSOR: For projects 31-40, generate full project cards following the EXACT same
# structure as projects 21-30 above. Each needs: Tier, Status, Problem, Challenge,
# Compounding, Skills, Course ref, and a full LLM Prompt using the same Teach me: format.
# The LLM prompts for 31-40 should be at Systems/Research tier complexity.

---

## STACK 3 — PRODUCTION SOFTWARE SYSTEMS
Accent color: gray | Maps to: C#/.NET background + current role + Mimikry/DYTGT/GROATH
Career unlock: Validates existing experience, bridges to AI integration roles ($90K → $128K)

# Projects 41-60 follow the same 20-project structure.
# Tier 1 (41-45): REST API, auth, database design, testing
# Tier 2 (46-50): Healthcare domain systems, QAPI patterns, reporting pipelines
# Tier 3 (51-55): AI integration in production (Mimikry ClaudeScriptGenerator, GROATH features)
# Tier 4 (56-60): Shipped products (Mimikry SaaS, DYTGT iOS, GROATH mobile)
# NOTE TO CURSOR: Generate all 20 project cards + LLM prompts at appropriate complexity tiers.
# Pull from Kel's real projects: Mimikry (.NET/C# + Next.js + FFmpeg + ElevenLabs + Claude API),
# DYTGT (React Native + RevenueCat + Expo), GROATH (Node.js/TypeScript + PostgreSQL/Supabase + Prisma)

---

## STACK 4 — DEEP LEARNING VISION & SIGNALS
Accent color: amber | Maps to: Bourke PyTorch track (0-100%)
Career unlock: Computer Vision Engineer (PyTorch 30%) → Transfer Learning Specialist (55%) → ML Research Engineer (85%)

# Projects 61-80 follow the same 20-project structure.
# Tier 1 (61-65): Tensor ops, linear regression, logistic regression, basic NN, activation functions
# Tier 2 (66-70): CNN fundamentals, dog breed classifier (existing), image augmentation, custom datasets
# Tier 3 (71-75): Transfer learning (ResNet/MobileNetV2), Grad-CAM, object detection, segmentation
# Tier 4 (76-80): Genomic signal CNN, protein contact map prediction, AlphaFold architecture study,
#                 paper replication (ProteinMPNN simplified), deployed model on HuggingFace
# NOTE TO CURSOR: Generate all 20 project cards + LLM prompts. Project 66 = existing
# dog-breed-prediction repo (reframe description using the rewrite template above).
# All Tier 4 projects should explicitly bridge Stack 1 (bioinformatics) + Stack 4 (vision).

---

## STACK 5 — DATA ENGINEERING & MLOps
Accent color: blue | Maps to: Portilla Python/DS track + AWS MLA cert (0-100%)
Career unlock: Data Analyst (Portilla 20%) → ML Engineer Jr. (Portilla 45%) → MLOps Engineer Jr. (AWS 40%) → MLOps Engineer (AWS 100%)

# Projects 81-100 follow the same 20-project structure.
# Tier 1 (81-85): NumPy, Pandas, Matplotlib, EDA, SQL queries
# Tier 2 (86-90): ETL pipelines, Scikit-learn, model evaluation, feature engineering
# Tier 3 (91-95): SageMaker training jobs, MLflow tracking, model registry, CI/CD for ML
# Tier 4 (96-100): Full ML platform (experiment → training → registry → deployment → monitoring),
#                  automated retraining pipeline, A/B testing framework, cost optimization,
#                  deployed model API serving the LDE pipeline from Stack 1
# NOTE TO CURSOR: Generate all 20 project cards + LLM prompts. Tier 4 should explicitly
# connect to Stack 1 (deploying the LDE pipeline on AWS SageMaker).

---

## PORTFOLIO UI IMPLEMENTATION

### Projects Section Architecture

1. SECTION HEADER
   Title: "Engineering Journal"
   Subtitle: "100 projects. 5 stacks. Every version builds on the last — from syntax to systems to research."
   Show: total projects, complete count, in-progress count, planned count (live from projects.config.json)

2. STACK NAVIGATION
   5 large cards at top — one per stack with accent color, project count, and completion %.
   Click a stack card → smooth scroll to that stack's section.
   Active stack tab highlights in its accent color.

3. STACK SECTION LAYOUT (repeat for each stack)
   Stack header: name, color accent, career unlock milestone, salary range
   Tier dividers: "TIER 1 — FOUNDATION" / "TIER 2 — APPLIED" / "TIER 3 — SYSTEMS" / "TIER 4 — RESEARCH"
   Projects render as a vertical timeline within each tier — left rail in stack accent color.

4. PROJECT CARD (every project, same template)
   Top row: version badge (e.g. "S1 · v03") | tier chip | status badge
   Title: large, 18px, font-weight 500
   Problem: 1 sentence, muted text
   Technical Challenge: 1-2 sentences
   Compounding: italic, prefixed with "→ Builds toward:"
   Skills: pill tags (specific)
   Bottom row: [GitHub] [Demo] [Article] [Learn This ↗]
   "Learn This" opens a modal with the full LLM prompt — one-click copy to clipboard button inside modal

5. LEARN THIS MODAL
   Header: project title + "LLM Learning Prompt"
   Body: the full llmPrompt text in a monospace code block
   Footer: [Copy to Clipboard] [Open in Claude ↗]
   "Open in Claude" links to: https://claude.ai/new?q={encodeURIComponent(llmPrompt)}
   This is the learning accelerator — every project has a structured lesson ready to go.

6. STATUS TOGGLING
   Each project card has a subtle status toggle (visible on hover): "Mark Complete"
   Clicking it updates projects.config.json status → "complete"
   The learning guide sidebar re-computes "what to build next"
   Completed projects show a checkmark on the version badge

7. LEARNING GUIDE SIDEBAR (desktop only, sticky)
   Title: "What to build next"
   Shows: next 3 projects across all stacks (lowest-numbered planned projects)
   For each: title, stack name, why it matters (1 line), course reference link
   Updates live when status changes

8. MOBILE: Full stack sections collapse to accordions. Timeline becomes vertical cards.
   "Learn This" modal works same on mobile.

---

## DESIGN SYSTEM (match existing site)

- Framework: Next.js 14 (already in use)
- Colors: olive accent palette already established — use stack accent colors as SECONDARY accents only
- Font: existing site font stack
- Dark mode: already implemented — preserve
- Terminal boot gate: already implemented — preserve
- No new external component libraries — use existing patterns

Stack accent colors as CSS variables (add to globals.css):
--stack-teal: #1D9E75;
--stack-purple: #7F77DD;
--stack-gray: #888780;
--stack-amber: #BA7517;
--stack-blue: #378ADD;

Status badge colors:
--status-complete: #639922;   (green)
--status-progress: #BA7517;   (amber)
--status-planned: #888780;    (gray, 60% opacity)

---

## HOW KEL UPDATES THIS SYSTEM

### Weekly workflow:
1. Complete a project → update status in projects.config.json to "complete"
2. Add GitHub link, demo link, article link if available
3. Sidebar auto-updates to show new "next" project
4. No code changes needed — JSON only

### Monthly prompt update:
Paste this file into Cursor with this prefix:
"UPDATE: [list what changed — e.g. 'Stack 1 v14 complete, Stack 2 v07 in progress'].
Read the current projects.config.json state and update all affected project cards,
the learning guide sidebar, and the stack completion percentages."

### When adding a new project idea:
Add it to projects.config.json following the schema above.
It renders automatically on the portfolio.
Then paste this prompt to Cursor: "I added a new project entry for [title]. 
Generate the full LLM learning prompt for it following the same Teach me: format, 
consistent with its tier and stack. Output the llmPrompt field text only."

### Version control:
This file is version-controlled alongside the portfolio repo.
Every time it's significantly updated, bump the version number at the top.
Commit message format: "docs: update PORTFOLIO_PROJECTS_PROMPT.md — [what changed]"

---
# END OF PROMPT
# File: PORTFOLIO_PROJECTS_PROMPT.md
# Repo: kelvinintech.com
