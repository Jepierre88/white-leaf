import type { Metadata } from "next";
import "@/app/globals.css";
import { inter } from "./styles/fonts";
import { HeaderMain } from "./components/HeaderMain";

export const metadata: Metadata = {
  title: "WhiteLeaf",
  description:
    "Fundación whiteleaf es una fundación que va en contra de la deforestación",
  icons: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden ${inter.className} overflow-y-auto justify-center`}
      >
        <HeaderMain />
        {children}
      </body>
    </html>
  );
}
