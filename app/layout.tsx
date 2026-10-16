import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const SITE_URL = "https://malikkashifabbas.vercel.app";
const TITLE =
  "Malik Kashif Abbas — AI Application Engineer & Full Stack Developer (MERN & Python)";
const DESCRIPTION =
  "AI Application Engineer & Full Stack Developer (MERN & Python) building LLM agents, RAG with LangChain, Django/FastAPI microservices and Angular apps.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Malik Kashif Abbas",
    "AI Application Engineer",
    "Full Stack Developer",
    "MERN Stack",
    "MySQL",
    "Python",
    "FastAPI",
    "Django",
    "LangChain",
    "LangGraph",
    "RAG",
    "LLM",
    "Angular",
    "Apache Kafka",
    "Microservices",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Malik Kashif Abbas" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Malik Kashif Abbas",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-surface dark:bg-[#0a0f1f] text-ink dark:text-slate-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
