import { useEffect } from "react";

export function usePortfolioEffects({ enableScrollSpy = true } = {}) {
  useEffect(() => {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav-menu");
    const navLinks = Array.from(document.querySelectorAll(".nav__link"));
    const sections = Array.from(document.querySelectorAll("section[id]"));

    const toggleMenu = () => {
      nav?.classList.toggle("show");
    };

    const closeMenu = () => {
      nav?.classList.remove("show");
    };

    const setActiveNavLink = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");
        const link = sectionId ? document.querySelector(`.nav__menu a[href*="${sectionId}"]`) : null;

        if (!link) {
          return;
        }

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };

    toggle?.addEventListener("click", toggleMenu);
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));
    if (enableScrollSpy) {
      window.addEventListener("scroll", setActiveNavLink);
      setActiveNavLink();
    }

    if (window.ScrollReveal) {
      const sr = window.ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 2000,
        delay: 200,
      });

      sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
      sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", { delay: 400 });
      sr.reveal(".home__social-icon", { interval: 200 });
      sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
    }

    return () => {
      toggle?.removeEventListener("click", toggleMenu);
      navLinks.forEach((link) => link.removeEventListener("click", closeMenu));
      if (enableScrollSpy) {
        window.removeEventListener("scroll", setActiveNavLink);
      }
    };
  }, [enableScrollSpy]);
}
