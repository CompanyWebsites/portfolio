import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Timeline from "@/components/Timeline";
import Expertise from "@/components/Expertise";
import Research from "@/components/Research";
import IPVault from "@/components/IPVault";
import { Collaborations, Philosophy } from "@/components/Trust";
import Footer from "@/components/Footer";
import { Marquee } from "@/components/Chrome";

export default function Home() {
  return (
    <main className="bg-ink text-cream min-h-screen">
      <Nav />
      <Hero />
      <Marquee
        items={[
          "Ambient Air Purification",
          "No-Electricity Systems",
          "Multi-Output Wind",
          "Solar Thermal Storage",
          "Carbon Capture",
          "Water Treatment",
        ]}
      />
      <Manifesto />
      <Timeline />
      <Expertise />
      <Marquee
        dark
        items={[
          "Engineer",
          "Industrialist",
          "Researcher",
          "Inventor",
          "Since 1995",
        ]}
      />
      <Research />
      <IPVault />
      <Collaborations />
      <Philosophy />
      <Footer />
    </main>
  );
}
