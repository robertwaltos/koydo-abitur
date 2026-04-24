// Auto-generated content manifest for Abitur
// Question targets are 2-3x competition floor

export type ActivityType =
  | "multiple_choice" | "essay" | "cloze_deletion" | "numeric_input"
  | "whiteboard" | "reading_passage" | "audio_mcq" | "voice_explanation"
  | "flashcard_deck" | "fill_in_blank" | "data_interpretation" | "diagram_label"
  | "scenario_based" | "coding_challenge" | "case_study" | "calculation"
  | "simulation" | "gamified_quiz" | "portfolio_review" | "visual_mcq"
  | "branching_scenario" | "heading_matching" | "project_based" | "story_based"
  | "sql_challenge" | "rubric_assessment" | "peer_review" | "timeline_ordering";

export type ExamCategory =
  | "admissions" | "language_cert" | "professional" | "k12_national"
  | "trade" | "creative" | "productivity" | "language_skills" | "kids";

export interface TopicManifest {
  id: string;
  domain: string;
  title: string;
  icon: string;
  color: string;
  minQuestionCount: number;
  requiredActivityTypes: ActivityType[];
}

export interface ContentManifest {
  examId: string;
  examName: string;
  totalQuestions: number;
  category: ExamCategory;
  topics: TopicManifest[];
}

export const CONTENT_MANIFEST: ContentManifest = {
  examId: "abitur",
  examName: "Abitur",
  totalQuestions: 3800,
  category: "k12_national",
  topics: [
  {
    id: "deutsch",
    domain: "deutsch",
    title: "Deutsch",
    icon: "📖",
    color: "#D97706",
    minQuestionCount: 800,
    requiredActivityTypes: ["essay", "reading_passage", "multiple_choice"],
  },
  {
    id: "mathematik",
    domain: "mathematik",
    title: "Mathematik",
    icon: "🔢",
    color: "#1E40AF",
    minQuestionCount: 900,
    requiredActivityTypes: ["multiple_choice", "whiteboard", "numeric_input"],
  },
  {
    id: "englisch",
    domain: "englisch",
    title: "Englisch",
    icon: "🗣️",
    color: "#059669",
    minQuestionCount: 700,
    requiredActivityTypes: ["multiple_choice", "essay", "cloze_deletion"],
  },
  {
    id: "naturwissenschaften",
    domain: "naturwissenschaften",
    title: "Naturwissenschaften",
    icon: "🔬",
    color: "#7C3AED",
    minQuestionCount: 800,
    requiredActivityTypes: ["multiple_choice", "calculation"],
  },
  {
    id: "gesellschaft",
    domain: "gesellschaft",
    title: "Geschichte & Gesellschaft",
    icon: "🌍",
    color: "#DC2626",
    minQuestionCount: 600,
    requiredActivityTypes: ["essay", "multiple_choice"],
  }
  ],
};

