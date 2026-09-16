/**
 * data/projects.ts
 *
 * Portfolio projects. Replace with real data in a later phase.
 */

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  tech: string[];
  status?: "completed" | "in-progress" | "archived";
  featured: boolean;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  year?: number;
  coverImage?: string;
}

export const projects: Project[] = [
  {
    slug: "samriddhi-parivar",
    title: "Samriddhi Parivar",
    description:
      "AI-powered civic action platform for multilingual reporting and civic action using geospatial intelligence.",
    tags: ["AI/ML", "Civic Tech", "Full Stack"],
    tech: ["Gemini AI", "React", "Node.js", "Firebase", "Firestore", "Vite", "TypeScript", "Tailwind CSS"],
    featured: true,
    links: {},
  },
  {
    slug: "privakyc",
    title: "PrivaKYC",
    description:
      "Privacy-preserving identity verification using Groth16 zero-knowledge proofs, WebAuthn, and Algorand.",
    tags: ["Zero Knowledge", "Web3", "Identity"],
    tech: ["Groth16 Zero-Knowledge Proofs", "WebAuthn", "Algorand"],
    featured: true,
    links: {},
  },
  {
    slug: "rapidauth",
    title: "RapidAuth",
    description: "Authentication project recorded in the portfolio archive.",
    tags: ["Authentication"],
    tech: [],
    featured: false,
    links: {},
  },
  {
    slug: "foodwise",
    title: "FoodWise",
    description:
      "ML-based food demand intelligence system using feature engineering, XGBoost, and SHAP for demand prediction.",
    longDescription:
      "FoodWise applies feature engineering and XGBoost to food demand prediction, with SHAP used to inspect model reasoning. Reported model performance is R² = 0.72.",
    tags: ["Machine Learning", "Explainable AI"],
    tech: ["Python", "XGBoost", "SHAP"],
    featured: true,
    links: {},
  },
  {
    slug: "c-solution",
    title: "C Solution",
    description: "C programming project recorded in the portfolio archive.",
    tags: ["C"],
    tech: ["C"],
    featured: false,
    links: {},
  },
  {
    slug: "sentiment-analysis-nlp",
    title: "Sentiment Analysis NLP",
    description: "Natural language processing project for sentiment analysis.",
    tags: ["NLP"],
    tech: ["NLP"],
    featured: false,
    links: {},
  },
  {
    slug: "teambuffer",
    title: "TeamBuffer",
    description: "Software project recorded in the portfolio archive.",
    tags: ["Software Engineering"],
    tech: [],
    featured: false,
    links: {},
  },
  {
    slug: "weather-app",
    title: "Weather-App",
    description: "Weather application recorded in the portfolio archive.",
    tags: ["Web"],
    tech: [],
    featured: false,
    links: {},
  },
  {
    slug: "eventra",
    title: "Eventra",
    description: "Event-focused application recorded in the portfolio archive.",
    tags: ["Web"],
    tech: [],
    featured: false,
    links: {},
  },
  {
    slug: "bakegenuis-ai",
    title: "BakeGenuis-AI",
    description: "AI project recorded in the portfolio archive.",
    tags: ["AI"],
    tech: ["Generative AI"],
    featured: false,
    links: {},
  },
  {
    slug: "algovisualizer",
    title: "AlgoVisualizer",
    description: "Contribution or fork recorded in the portfolio archive.",
    tags: ["Algorithms", "Open Source"],
    tech: [],
    featured: false,
    links: {},
  },
  {
    slug: "amazon-india-homepage-clone",
    title: "Amazon India Homepage Clone",
    description: "Frontend recreation of the Amazon India homepage.",
    tags: ["Frontend"],
    tech: ["HTML", "CSS"],
    featured: false,
    links: {},
  },
  {
    slug: "tic-tac-toe",
    title: "Tic Tac Toe",
    description: "Tic tac toe game project recorded in the portfolio archive.",
    tags: ["Frontend"],
    tech: [],
    featured: false,
    links: {},
  },
  {
    slug: "currency-converter",
    title: "Currency Converter",
    description: "Currency conversion project recorded in the portfolio archive.",
    tags: ["Web"],
    tech: [],
    featured: false,
    links: {},
  },
  {
    slug: "virtual-labs-ui-redesign",
    title: "Virtual Labs UI Redesign",
    description: "User interface redesign project for Virtual Labs.",
    tags: ["UI", "Frontend"],
    tech: ["HTML", "CSS"],
    featured: false,
    links: {},
  },
  {
    slug: "fitnessbot",
    title: "FitnessBot",
    description: "Fitness-focused bot project recorded in the portfolio archive.",
    tags: ["Bot", "AI"],
    tech: [],
    featured: false,
    links: {},
  },
  {
    slug: "clap-switch",
    title: "Clap Switch",
    description: "Hardware project using Arduino UNO and KY-038.",
    tags: ["Hardware", "Arduino"],
    tech: ["Arduino UNO", "KY-038"],
    featured: false,
    links: {},
  },
];
