import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { TranslationProvider } from "@/components/TranslationProvider";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.role}`,
  description: profile.summary,
  keywords: "React Developer, ReactJS, Next.js, TypeScript, React Native, NestJS, Laravel, AWS, Datadog",
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: profile.website,
    title: `${profile.name} - ${profile.role}`,
    description: profile.summary,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - ${profile.role}`,
    description: profile.summary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <TranslationProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}
