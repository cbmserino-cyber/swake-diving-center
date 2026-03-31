import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swake Diving Center | Freediving in Siquijor",
  description:
    "Safe, guided freediving sessions in Siquijor for beginners and experienced divers.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
