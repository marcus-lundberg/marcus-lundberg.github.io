import { Link } from "react-router-dom";
import omegapointImage from "../../assets/img/omegapoint1.jpg";
import vasterbottensostImage from "../../assets/img/västerbottensost.jpg";
import pongImage from "../../assets/img/pong-gif.gif";

const projects = [
  {
    id: "omegapoint",
    href: "/projects/omegapoint",
    image: omegapointImage,
    alt: "Omegapoint project",
  },
  {
    id: "vasterbottensost",
    href: "/projects/vasterbottensost",
    image: vasterbottensostImage,
    alt: "Vasterbottensost project",
  },
  { id: "pong", href: "/projects/pong", image: pongImage, alt: "Pong project" },
];

function Work() {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Projects</h2>
      <div className="work__container bd-grid">
        {projects.map((project) => (
          <Link to={project.href} className="work__img" id={project.id} key={project.id}>
            <img src={project.image} alt={project.alt} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Work;
