import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteMetadata } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://silindokuhle-mapiyeye.dev"),
  title: {
    default: `${siteMetadata.name} | ${siteMetadata.role}`,
    template: `%s | ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  applicationName: siteMetadata.name,
  keywords: [
    "Full Stack Engineer",
    "DevOps Engineer",
    "Next.js",
    "Laravel",
    "AWS",
    "Docker",
    "Jenkins",
    "Portfolio",
  ],
  openGraph: {
    title: `${siteMetadata.name} | ${siteMetadata.role}`,
    description: siteMetadata.description,
    type: "website",
    url: "https://silindokuhle-mapiyeye.dev",
    siteName: siteMetadata.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMetadata.name} | ${siteMetadata.role}`,
    description: siteMetadata.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
