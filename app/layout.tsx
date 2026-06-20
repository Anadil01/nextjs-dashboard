import "./ui/global.css";
import {inter} from "./ui/fonts";

export const metadata = {
  title: "Next.js 13.4 App ",
  description: "A starter template for Next.js 13.4 with the App Router.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
