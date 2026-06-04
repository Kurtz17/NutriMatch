import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NutriMatch | Allergy-safe personalized nutrition",
  description:
    "Personalized nutrition recommendations and allergy-safe 7-day meal plans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
