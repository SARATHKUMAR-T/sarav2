import type { Metadata } from "next";
import { Inter, Montserrat, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import MobileNav from "@/components/MobileNav";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarath.dev",
  description: "mern stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <MobileNav />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
