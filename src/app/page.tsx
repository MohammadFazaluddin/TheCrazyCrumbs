import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import Signature from "@/components/Signature/Signature";
import Menu from "@/components/Menu/Menu";
import Story from "@/components/Story/Story";
import Order from "@/components/Order/Order";
import Footer from "@/components/Footer/Footer";
import { EnquiryProvider } from "@/components/ui/Enquiry";

export default function Home() {
  return (
    <EnquiryProvider>
      <Navigation />
      <main>
        <Hero />
        <Signature />
        <Menu />
        <Story />
        <Order />
      </main>
      <Footer />
    </EnquiryProvider>
  );
}
