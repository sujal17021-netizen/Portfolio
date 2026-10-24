import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sujal Gupta — AI/ML Developer",
  description:
    "Portfolio of Sujal Gupta, a Computer Science and AI/ML student building data-driven applications, machine learning models, and full-stack products.",
  keywords: ["Sujal Gupta", "AI/ML Developer", "Machine Learning", "Python", "Next.js"],
  openGraph: {
    title: "Sujal Gupta — AI/ML Developer",
    description: "Building intelligence. Engineering impact.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
