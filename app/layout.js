import { Inter } from "next/font/google";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import { siteConfig } from "@/libs/siteConfig";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// 使用我們的 siteConfig
export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  ...getSEOTags(),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="zh-TW"
      data-theme={config.colors.theme}
      className={font.className}
    >
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}