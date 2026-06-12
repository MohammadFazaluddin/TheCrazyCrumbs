import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import Signature from "@/components/Signature/Signature";
import Story from "@/components/Story/Story";
import Commission from "@/components/Commission/Commission";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Signature />
        <Story />
        <Commission />
      </main>
      <Footer />
    </>
  );
}
