import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "나의 맛집리스트",
  description: "좋아하는 맛집 리스트를 네이버지도에 저장하세요",
  openGraph: {
    title: "나의 맛집리스트",
    description: "좋아하는 맛집 리스트를 네이버지도에 저장하세요",
    url: "https://mylists.shout-out.org",
    images: [
      {
        url: "/images/kimsawon.png",
        width: 800,
        height: 600,
        alt: "나의 맛집리스트",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "나의 맛집리스트",
    description: "좋아하는 맛집 리스트를 네이버지도에 저장하세요",
    images: ["/images/kimsawon.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-F84E00W0R7" />
    </html>
  );
}
