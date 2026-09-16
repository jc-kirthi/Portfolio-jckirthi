/**
 * data/projects.ts
 *
 * Portfolio projects with verified GitHub links and truthful technical summaries.
 */

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  tech: string[];
  status: "completed" | "in-progress" | "archived";
  featured: boolean;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  year: number;
  coverImage?: string;
}

export const projects: Project[] = [
  {
    slug: "samriddhi-parivar",
    title: "Samriddhi Parivar",
    description: "AI-powered civic action platform for multilingual reporting and geospatial issue visibility.",
    longDescription:
      "Samriddhi Parivar combines Gemini-powered assistance, geospatial intelligence, and multilingual citizen reporting to make civic action more accessible, timely, and useful. The platform is designed around practical public service workflows and real user reporting loops.",
    tags: ["Civic Tech", "AI / ML", "Public Systems"],
    tech: ["Gemini AI", "Geospatial Intelligence", "React", "Node.js", "Firebase / Firestore", "TypeScript", "Tailwind"],
    status: "completed",
    featured: true,
    links: { github: "https://github.com/jc-kirthi/Samriddhi-Parivar" },
    year: 2025,
  },
  {
    slug: "privakyc",
    title: "PrivaKYC",
    description: "Privacy-preserving identity verification flow combining ZK proofs, WebAuthn, and blockchain-ready validation.",
    longDescription:
      "PrivaKYC focuses on privacy-first identity verification with zero-knowledge proof techniques, Groth16 circuits, and WebAuthn-friendly flows. It explores how identity checks can remain verifiable without exposing unnecessary user data.",
    tags: ["Security", "Blockchain", "Identity"],
    tech: ["Zero-Knowledge Proofs", "Groth16", "Circom / snarkjs", "WebAuthn", "Algorand", "React / Vite", "Node / Express", "MongoDB"],
    status: "completed",
    featured: true,
    links: { github: "https://github.com/jc-kirthi/PrivaKYC" },
    year: 2025,
  },
  {
    slug: "rapidauth",
    title: "RapidAuth",
    description: "Blockchain-based academic credential verification system built around Algorand-based trust and wallet interaction.",
    longDescription:
      "RapidAuth explores verifiable academic credentials using blockchain infrastructure and wallet-based access. The project focuses on tamper-resistant academic certificate verification with practical user and verifier workflows.",
    tags: ["Blockchain", "Education Tech"],
    tech: ["Algorand", "AlgoKit", "Algopy", "ARC-56", "Firebase", "IPFS / Pinata", "React + TypeScript", "Pera Wallet"],
    status: "completed",
    featured: true,
    links: { github: "https://github.com/jc-kirthi/RapidAuth" },
    year: 2025,
  },
  {
    slug: "foodwise",
    title: "FoodWise",
    description: "ML-based food demand intelligence system that estimates potential surplus / over-preparation risk from operational data.",
    longDescription:
      "FoodWise uses feature engineering and decision modeling to estimate demand patterns and highlight potential surplus or over-preparation risk. The project is framed as informed decision support rather than direct waste measurement.",
    tags: ["ML", "Forecasting", "Decision Support"],
    tech: ["Python", "XGBoost", "SHAP", "Feature Engineering", "Streamlit", "Decision Engine"],
    status: "completed",
    featured: true,
    links: { github: "https://github.com/jc-kirthi/foodwise-ml", live: "https://foodwise-ml.streamlit.app" },
    year: 2025,
  },
  {
    slug: "c-solution",
    title: "C-Solution",
    description: "Peer-learning resource with 55+ structured C programs designed to help learners practice fundamentals and viva preparation.",
    longDescription:
      "C-Solution is a targeted learning resource for peers, with structured C programs covering recursion, file handling, dynamic memory, and viva-oriented practice. It is explicitly positioned as a peer-learning toolkit rather than an AI project.",
    tags: ["Peer Learning", "C Programming"],
    tech: ["C", "Recursion", "File Handling", "Dynamic Memory", "Viva Preparation"],
    status: "completed",
    featured: true,
    links: { github: "https://github.com/jc-kirthi/C-Solution" },
    year: 2024,
  },
  {
    slug: "retailecoai",
    title: "RetailEcoAI",
    description: "Applied AI project centered on retail and operational intelligence patterns.",
    tags: ["Retail AI", "Data Science"],
    tech: ["Python", "Machine Learning", "Data Analysis"],
    status: "completed",
    featured: false,
    links: { github: "https://github.com/jc-kirthi/RetailEcoAI" },
    year: 2025,
  },
  {
    slug: "traffic-simulator",
    title: "Traffic Simulator",
    description: "Simulation-oriented project exploring urban decision scenarios and traffic patterns.",
    tags: ["Simulation", "Systems"],
    tech: ["Python", "Simulation", "Modeling"],
    status: "completed",
    featured: false,
    links: { github: "https://github.com/jc-kirthi/Traffic-simulator" },
    year: 2025,
  },
  {
    slug: "hostel-mess-food-satisfaction-prediction",
    title: "Hostel Mess Food Satisfaction Prediction",
    description: "Predictive modeling project focused on satisfaction patterns and operational feedback insights.",
    tags: ["Prediction", "Analytics"],
    tech: ["Python", "Machine Learning", "Data Cleaning"],
    status: "completed",
    featured: false,
    links: { github: "https://github.com/jc-kirthi/Hostel-Mess-Food-Satisfaction-Prediction" },
    year: 2024,
  },
  {
    slug: "sentiment-analysis-nlp",
    title: "Sentiment Analysis NLP",
    description: "Natural language processing project focused on sentiment and text classification workflows.",
    tags: ["NLP", "Text Analysis"],
    tech: ["Python", "NLP", "Scikit-learn"],
    status: "completed",
    featured: false,
    links: { github: "https://github.com/jc-kirthi/sentiment-analysis-nlp" },
    year: 2024,
  },
  {
    slug: "house-price-prediction-app",
    title: "House Price Prediction App",
    description: "Regression-focused app for estimating housing prices from structured features.",
    tags: ["Regression", "App"],
    tech: ["Python", "Streamlit", "Machine Learning"],
    status: "completed",
    featured: false,
    links: { github: "https://github.com/jc-kirthi/House_Price_Prediction_App" },
    year: 2024,
  },
  {
    slug: "vibe-tagger",
    title: "Vibe-Tagger",
    description: "OSCode CIT club project for lightweight content tagging and discovery patterns.",
    tags: ["OSCode", "Club Project"],
    tech: ["Python", "Data Processing", "Tagging"],
    status: "completed",
    featured: false,
    links: { github: "https://github.com/jc-kirthi/Vibe-Tagger" },
    year: 2024,
  },
];
