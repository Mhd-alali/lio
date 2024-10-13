import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({ subsets: ['latin'], weight: '400', });

export const metadata = {
  title: "Lio Gallery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased container`}>
        {children}
      </body>
    </html>
  );
}
