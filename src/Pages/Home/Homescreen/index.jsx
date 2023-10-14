import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import MyExperience from "../MyExperience"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MySkills />
      <MyExperience />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
