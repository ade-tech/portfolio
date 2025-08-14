import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/app/_components/Navigation";

export const metadata: Metadata = {
  title: "Abdone's Portfolio",
  description: "Abdone is a season software developer and Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
