const homeLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const projectLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#work", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

function Header({ isHome = true }) {
  const navLinks = isHome ? homeLinks : projectLinks;

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href={isHome ? "#" : "/"} className="nav__logo">
            Marcus
          </a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li className="nav__item" key={link.href}>
                <a href={link.href} className="nav__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
