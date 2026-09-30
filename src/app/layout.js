import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { config } from "@/config";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: config.seo.title,
  description: config.seo.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${jakarta.className} antialiased text-gray-900 bg-white selection:bg-blue-200 selection:text-blue-900`}>
        {children}
      </body>
    </html>
  );
}
