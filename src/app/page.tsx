import ConsultationForm from "@/components/main/consultation/ConsultationFormSection";
import FAQSection from "@/components/main/FAQSection";
import HeroSection from "@/components/main/HeroSection";
import ServicesSection from "@/components/main/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ConsultationForm />
      <FAQSection />
    </>
  );
}
