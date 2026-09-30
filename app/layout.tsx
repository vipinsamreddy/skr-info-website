import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKR INFO LIMITED | Digital & Software Engineering",
  description: "UK software engineering consultancy delivering secure, accessible and scalable digital services.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
