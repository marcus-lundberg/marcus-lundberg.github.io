import Header from "../components/Header";
import { usePortfolioEffects } from "../hooks/usePortfolioEffects";
import pongGif from "../../assets/img/pong-gif.gif";

function PongPage() {
  usePortfolioEffects({ enableScrollSpy: false });

  return (
    <>
      <Header isHome={false} />
      <main className="l-main">
        <section className="Projects section" id="Projects">
          <h2 className="section-title">Pong game</h2>
          <p className="work__description">
            This project was completed in the course Artificial Intelligence - Methods and
            Applications. The goal was to create an agent that would learn to play Pong using
            reinforcement learning.
          </p>
          <div className="projects__container bd-grid">
            <a className="project__image">
              <img src={pongGif} alt="Pong project animation" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default PongPage;
