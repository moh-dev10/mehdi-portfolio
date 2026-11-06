import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mehdi — Data Science Portfolio",
  description: "Portfolio of Mehdi, 2nd-year Data Science student at USTHB, Algiers. Showcasing end-to-end analytical pipelines, machine learning models, and real-world data projects.",
  openGraph: {
    title: "Mehdi — Data Science Portfolio",
    description: "Portfolio of Mehdi, 2nd-year Data Science student at USTHB, Algiers. Showcasing end-to-end analytical pipelines, machine learning models, and real-world data projects.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <div className="bg-layer" aria-hidden="true" />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}