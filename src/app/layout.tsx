import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://abitur.koydo.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Koydo Abitur",
    default: "Koydo Abitur — Exam Prep",
  },
  description: "Abitur exam preparation. Practice questions, mock tests, and AI-powered study tools. Study aid only. Not affiliated with official examination boards.",
  authors: [{ name: "Koydo", url: "https://koydo.app" }],
  creator: "Koydo",
  publisher: "Koydo",
  category: "education",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#D97706" />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
