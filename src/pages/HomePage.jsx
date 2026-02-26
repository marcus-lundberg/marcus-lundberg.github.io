import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import { usePortfolioEffects } from "../hooks/usePortfolioEffects";

function HomePage() {
  usePortfolioEffects({ enableScrollSpy: true });

  return (
    <>
      <Header isHome={true} />
      <main className="l-main">
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
    </>
  );
}

export default HomePage;
