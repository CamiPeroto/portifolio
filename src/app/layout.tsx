import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: 'Portifólio | Camila Peroto',
  description:
    'Engenheira de software e Desenvolvedora Fullstack  especializada em desenvolvimento de sites e sistemas.',
  keywords: [
    'engenharia de software',
    'desenvolvimento web',
    'tecnologia',
    'soluções digitais',
    'freelancer',
    'portifólio',
    'desenvolvedor fullstack',
    'software personalizado',
  ],
  authors: [{ name: 'Camila Bueno Peroto' }], 
  openGraph: {
    title: 'Camila Peroto | Desenvolvedora',
    description:
      'Engenheira de software e Desenvolvedora Fullstack  especializada em desenvolvimento de sites e sistemas.',
    siteName: 'Camila Peroto',
    images: [
      {
        url: '/images/background.png',
        width: 1200,
        height: 630,
        alt: 'Camila Peroto - Desenvolvedora',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico', 
    apple: '/apple-touch-icon.png', 
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
          <Analytics />
      </body>
    </html>
  );
}
