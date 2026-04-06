import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import OpportunityCTA from "@/components/sections/OpportunityCTA";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <OpportunityCTA />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
