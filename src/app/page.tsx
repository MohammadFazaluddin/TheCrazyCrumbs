import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import Signature from "@/components/Signature/Signature";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Signature />
      </main>
      <Footer />
    </>
  );
}
