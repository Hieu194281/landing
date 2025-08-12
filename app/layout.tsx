import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Casino Ganamos - ¡30% Extra en tu Primer Depósito!",
  description: "¡Juega en el mejor casino online! Obtén 30% extra en tu primer depósito. Haz clic en WhatsApp y comienza a ganar ahora.",
  icons: {
    icon: '/title.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body
        className={`antialiased h-screen`}
      >
        {children}
      </body>
    </html>
  );
}