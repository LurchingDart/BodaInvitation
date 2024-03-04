import { Inter, IM_Fell_English, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"]
});

const imFell = IM_Fell_English({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: '--font-imFell',
});

const dancing = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-dancing',
})

export const metadata = {
  title: "Lulú y Gil | Bodas de oro",
  description: "Únete a nosotros en la celebración de 50 años de amor inquebrantable y felicidad compartida. Lulú y Gil te invitan a ser parte de sus Bodas de Oro, un hito que marca medio siglo de compañerismo y cariño. Acompáñanos en esta ocasión especial y vamos a celebrar este momento único en la vida."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
        <meta property="og:image" content="<generated>"/>
        <meta property="og:image:type" content="<generated>"/>
        <meta property="og:image:width" content="<generated>"/>
        <meta property="og:image:height" content="<generated>"/>
    </head>
    <body className={`${inter.variable} ${imFell.variable} ${dancing.variable}`}>
        {children}
      </body>
    </html>
  );
}
