import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";
import ModalProvider from "@/providers/modal-provider";
import { Toaster } from "@/components/ui/toaster";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Front Store",
  description: "Ecommerce Front Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <ModalProvider />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
