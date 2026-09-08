import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import AdminPlatforms from "@/components/AdminPlatforms";
import SelectedPlatforms from "@/components/SelectedPlatforms";
import ProjectArchive from "@/components/ProjectArchive";
import Impact from "@/components/Impact";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CaseStudies />
        <AdminPlatforms />
        <SelectedPlatforms />
        <ProjectArchive />
        <Impact />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
