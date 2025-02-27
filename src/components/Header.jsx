import { useState } from 'react';
import { socials } from "../assets/componentLists/socializingList";
import hamburger from "../assets/images/icons/hamburger.png";
import close from "../assets/images/icons/close.png";


export default function Header({handlePageShift, mobileNavOpen, toggleMobileNav}) {

  // PEEKING HEADER USESTATES AND FUNCTIONS
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPreviousScrollPositiion] = useState(0);

  const handleScrollPositionChange = (e) => {
    setPreviousScrollPositiion(scrollPosition);
    setScrollPosition(window.scrollY);
  };

  window.addEventListener("scroll", handleScrollPositionChange);
  let headerPos = scrollPosition > 0 && scrollPosition > prevScrollPosition ? "raise-nav" : null;

  // AUTO HIDE MOBILE NAV WHEN SCROLLING DOWN
  if (mobileNavOpen && headerPos === "hide") {
    toggleMobileNav();
  };

  return (
    // <header className={headerPos === "hide" ? "raise-nav" : "drop-nav"}>
    <header className={headerPos === "raise-nav" ? "raise-nav": "drop-nav"}>
      <nav className="icon-nav">
        {
          socials.map((socialLink) => (
            <a aria-label="On Click" target="_blank" rel="noreferrer" href={socialLink.url} key={socialLink.url}>
              <img className="icons" src={socialLink.icon} alt="socializing icon" />
            </a>
          ))
        }
      </nav>
      <button className="nav-icon mobile">
        {
          !mobileNavOpen ?
            <img className="nav-icon-img" onClick={toggleMobileNav} src={hamburger} alt="mobile navigation menu (open)" />
            :
            <img className="nav-icon-img" onClick={toggleMobileNav} src={close} alt="mobile navigation menu (close)" />
        }
      </button>
      <nav className={mobileNavOpen ? "section-scroll-list mobile" : "section-scroll desktop"}>
        <a aria-label="On Click" className="shift-page-link" onClick={handlePageShift("contactme")} href="/#contact-me">Contact Me</a>
        <a aria-label="On Click" className="shift-page-link" onClick={handlePageShift("projects")} href="/#projects">Projects</a>
        <a aria-label="On Click" className="shift-page-link" target="_blank" rel="noreferrer" href="Omari_Sharpe_FD_Resume.pdf">My Resume</a>
      </nav>
    </header>
  );
};