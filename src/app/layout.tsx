import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { profile } from "@/data/profile";
import { ScrollProgress } from "@/components/shared/scroll-progress";

export const metadata: Metadata = {
  title: `${profile.brand} | Xavier Aguiar`,
  description: 
  "Portafolio técnico-creativo enfocado en software, datos, automatización, diseño web, SQL, Azure, Power BI y proyectos de aprendizaje real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ScrollProgress />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
