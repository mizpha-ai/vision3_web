// vision3_web/src/app/ott/layout.tsx
import type { Metadata } from "next";
import "./ott-globals.css";
import SiteHeader from "@/app/ott/components/common/site-header";

export const metadata: Metadata = {
  title: "Vision3",
  description: "Vision3 OTT",
};

export default function OttLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="ott-root min-h-screen bg-[#050608] text-white">
      <SiteHeader />
      <div className="pt-20">{children}</div>
    </div>
  );
}