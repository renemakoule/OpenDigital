// app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Open Digital.",
  description: "Next gen technology solutions",
};

import { CameroonArc } from "@/components/ui/CameroonArc";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeTransition } from "@/components/layout/ThemeTransition";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={plusJakartaSans.className}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CameroonArc />
          <ThemeTransition />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
