import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mo's portfolio",
  description: "This is Mohammad's Portfolio",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
