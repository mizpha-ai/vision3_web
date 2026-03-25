import BusinessHeader from "@/components/business/BusinessHeader";
import BusinessFooter from "@/components/business/BusinessFooter";

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BusinessHeader />
      {children}
      <BusinessFooter />
    </>
  );
}
