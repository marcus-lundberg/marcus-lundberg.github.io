import skillsImage from "../../assets/img/skills.jpg";

const skills = [
  { iconClass: "bx bxl-figma skills__icon", name: "Figma" },
  { iconClass: "fa-solid fa-c skills__icon", name: "Programming in C" },
  { iconClass: "fa-brands fa-java skills__icon", name: "Java" },
  { iconClass: "bx bxl-html5 skills__icon", name: "HTML5" },
  { iconClass: "bx bxl-css3 skills__icon", name: "CSS" },
  { iconClass: "fa-brands fa-js skills__icon", name: "JavaScript" },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text">These are some of the skills that I have learned so far.</p>

          {skills.map((skill) => (
            <div className="skills__data" key={skill.name}>
              <div className="skills__names">
                <i className={skill.iconClass}></i>
                <span className="skills__name">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <img src={skillsImage} alt="Skills illustration" className="skills__img" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
