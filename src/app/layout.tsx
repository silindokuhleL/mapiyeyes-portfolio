import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: `${siteMetadata.shortName} | ${siteMetadata.role}`,
    template: `%s | ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  applicationName: siteMetadata.name,
  icons: {
    icon: [{ url: "/icon", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  keywords: [
    "Full-Stack SaaS Engineer",
    "Laravel Engineer",
    "Next.js Engineer",
    "Next.js",
    "Laravel",
    "REST APIs",
    "RBAC",
    "Payment Integrations",
    "AI Integrations",
    "AWS",
    "Docker",
    "Laravel Forge",
    "Portfolio",
  ],
  openGraph: {
    title: `${siteMetadata.shortName} | ${siteMetadata.role}`,
    description: siteMetadata.description,
    type: "website",
    url: siteMetadata.url,
    siteName: siteMetadata.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteMetadata.shortName} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMetadata.shortName} | ${siteMetadata.role}`,
    description: siteMetadata.description,
    images: ["/opengraph-image"],
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
        <Analytics mode="production" />
      </body>
    </html>
  );
}
