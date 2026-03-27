import Navbar from "@/components/Navbar";
import OurAbout from "@/components/OurAbout";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <OurAbout />
      </main>
      <FloatingActions />
      <Footer />
    </>
  );
}
