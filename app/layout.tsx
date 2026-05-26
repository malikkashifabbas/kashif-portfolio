import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Malik Kashif Abbas | Full-Stack Developer",
  description:
    "Portfolio of Malik Kashif Abbas — Full-Stack Developer specializing in the MERN stack. I build fast, clean, user-focused web experiences.",
  keywords: [
    "Malik Kashif Abbas",
    "Full-Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "Next.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Malik Kashif Abbas" }],
  openGraph: {
    title: "Malik Kashif Abbas | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in the MERN stack. Building fast, clean, user-focused web experiences.",
    type: "website",
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
