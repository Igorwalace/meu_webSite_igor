//react
import type { Metadata } from "next";

//fonts
import { Poppins } from "next/font/google";

//css
import "./globals.css";

//shadcn 
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Portfólio Igor",
  description: "Meu Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href='/icon.png' />
      </head>
      <body className={`${poppins.className} bg-[var(--blue)] `}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
