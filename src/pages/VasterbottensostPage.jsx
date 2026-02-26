import Header from "../components/Header";
import { usePortfolioEffects } from "../hooks/usePortfolioEffects";
import imageMain from "../../assets/img/västerbottensost.jpg";
import image1 from "../../assets/img/västerbottensost1.jpg";
import image2 from "../../assets/img/västerbottensost2.jpg";

function VasterbottensostPage() {
  usePortfolioEffects({ enableScrollSpy: false });

  return (
    <>
      <Header isHome={false} />
      <main className="l-main">
        <section className="work section" id="work">
          <h2 className="section-title">Vasterbottensost</h2>
          <p className="work__description">
            This project was completed during my studies at Umea University in the course Design
            for User Experience and focused on creating a new design concept for
            Vasterbottensost, a Swedish cheese brand. Our team developed the concept Recipe Maker
            (Receptskaparen). For this concept, we made the design mobile-first. The concept was
            highly appreciated by Vasterbottensost.
          </p>
          <div className="work__container bd-grid" id="vasterbottensost">
            <a className="project__image">
              <img src={imageMain} alt="Vasterbottensost project screenshot 1" />
            </a>
            <a className="project__image">
              <img src={image1} alt="Vasterbottensost project screenshot 2" />
            </a>
            <a className="project__image">
              <img src={image2} alt="Vasterbottensost project screenshot 3" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default VasterbottensostPage;
