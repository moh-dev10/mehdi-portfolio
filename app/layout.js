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
  title: "Mehdi — Data Science Student · USTHB",
  description:
    "Portfolio of Mehdi, second-year Data Science student at USTHB, Algiers. Developing skills in Python, data analysis, machine learning, and practical problem solving.",
  openGraph: {
    title: "Mehdi — Data Science Student · USTHB",
    description:
      "Portfolio of Mehdi, second-year Data Science student at USTHB, Algiers. Developing skills in Python, data analysis, machine learning, and practical problem solving.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <noscript>
          <style>{`.reveal-hidden { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-olive/30 selection:text-foreground">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}