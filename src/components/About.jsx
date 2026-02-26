import aboutImage from "../../assets/img/bild.jpg";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={aboutImage} alt="Marcus Lundberg" />
        </div>
        <div>
          <h2 className="about__subtitle">Hi I&apos;m Marcus!</h2>
          <p className="about__text">
            Welcome to my portfolio. I recently graduated with a Master of Science in Interaction
            Technology and Design from Umea University. I&apos;m passionate about creating thoughtful
            user experiences that combine technology, design, and creativity. My main focus is UX
            and UI design, but I also enjoy programming and visual arts. Outside of work, I like to
            stay active, play guitar, and explore new side projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
