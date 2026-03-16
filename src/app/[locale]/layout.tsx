import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const titles: Record<string, string> = {
    pt: "maike.dev — código, música, estética",
    en: "maike.dev — code, music, aesthetics",
    es: "maike.dev — código, música, estética",
  };

  const descriptions: Record<string, string> = {
    pt: "Portfólio e hub criativo de Maicon Henrique — dev em construção, criativo por natureza.",
    en: "Portfolio and creative hub by Maicon Henrique — dev in progress, creative by nature.",
    es: "Portafolio y hub creativo de Maicon Henrique — dev en construcción, creativo por naturaleza.",
  };

  return {
    title: titles[locale] ?? titles.pt,
    description: descriptions[locale] ?? descriptions.pt,
    metadataBase: new URL("https://maike.dev.br"),
    openGraph: {
      title: titles[locale] ?? titles.pt,
      description: descriptions[locale] ?? descriptions.pt,
      url: "https://maike.dev.br",
      siteName: "maike.dev",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale] ?? titles.pt,
      description: descriptions[locale] ?? descriptions.pt,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
