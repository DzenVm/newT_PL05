import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Benefits from "@/components/sections/Benefits";
import CourseLevels from "@/components/sections/CourseLevels";
import HowItWorks from "@/components/sections/HowItWorks";
import Methodology from "@/components/sections/Methodology";
import PopularCourses from "@/components/sections/PopularCourses";
import Testimonials from "@/components/sections/Testimonials";
import LearningTools from "@/components/sections/LearningTools";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Kursy Języka Niemieckiego Online dla Polaków | A1 do C2 | ger4pol.site",
  description:
    "Nauka języka niemieckiego online od podstaw do biegłości. Elastyczne kursy A1–C2 dla Polaków. Certyfikowani lektorzy, 200+ godz. materiałów, przygotowanie do TestDaF i Goethe. Zacznij od bezpłatnego testu poziomu!",
  alternates: { canonical: "https://ger4pol.site" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Benefits />
      <CourseLevels />
      <HowItWorks />
      <Methodology />
      <PopularCourses />
      <Testimonials />
      <LearningTools />
      <FAQ />
      <Newsletter />
      <FinalCTA />
    </>
  );
}
