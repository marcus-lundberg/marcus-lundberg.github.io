import Header from "../components/Header";
import { usePortfolioEffects } from "../hooks/usePortfolioEffects";
import image1 from "../../assets/img/omegapoint1.jpg";
import image2 from "../../assets/img/omegapoint2.jpg";
import image3 from "../../assets/img/omegapoint3.jpg";
import certificateImage from "../../assets/img/omegapoint_certifikat.jpg";

function OmegapointPage() {
  usePortfolioEffects({ enableScrollSpy: false });

  return (
    <>
      <Header isHome={false} />
      <main className="l-main">
        <section className="work section" id="work">
          <h2 className="section-title">Omegapoint</h2>
          <p className="work__description">
            As part of the Product Development in Media Technology course, our group worked on a
            project with Omegapoint to help their client address a challenge in their status and
            progress board. The client had been struggling to efficiently organize and analyze
            large sets of data on this board, which was negatively impacting their work. Our group
            used the Design-Build-Test method to develop a user interface based on the client&apos;s
            input and our knowledge. After user testing with the client, the new design showed
            great improvement in the client&apos;s user experience.
          </p>
          <div className="work__container bd-grid">
            <a className="project__image">
              <img src={image1} alt="Omegapoint project screenshot 1" />
            </a>
            <a className="project__image">
              <img src={image2} alt="Omegapoint project screenshot 2" />
            </a>
            <a className="project__image">
              <img src={image3} alt="Omegapoint project screenshot 3" />
            </a>
            <p className="work__description">
              The project was a success and received positive feedback from the client and our
              project supervisor. The client was so happy about our design that they wanted to
              continue to work with it. For this, we got a certificate from Omegapoint.
            </p>
            <a className="project__image">
              <img src={certificateImage} alt="Omegapoint certificate" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default OmegapointPage;
