import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devoria - Developer Tutorials & Guides",
  description:
    "Devoria is a hub for developers. Learn coding, frameworks, and tools through step-by-step tutorials, guides, and best practices.",
  keywords: [
    "Devoria",
    "developer tutorials",
    "coding guides",
    "learn programming",
    "Next.js tutorials",
    "JavaScript tutorials",
  ],
  authors: [{ name: "Devoria Team" }],
  openGraph: {
    title: "Devoria - Developer Tutorials & Guides",
    description:
      "Step-by-step tutorials for developers. Learn coding, frameworks, and best practices with Devoria.",
    url: "https://devoria.com",
    siteName: "Devoria",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devoria - Developer Tutorials",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devoria - Developer Tutorials & Guides",
    description:
      "Step-by-step tutorials for developers. Learn coding, frameworks, and best practices with Devoria.",
    images: ["/og-image.png"],
    creator: "@devoria",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="pt-32 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
