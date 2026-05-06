import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteTitle = "TEMPO AI";
const siteDescription = "AI products that help teams scale faster.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: [
      {
        url: "./favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
