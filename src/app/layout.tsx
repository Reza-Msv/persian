import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/layout/Layout";

export const metadata: Metadata = {
  title: "Task",
  description: "Created BY Reza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}