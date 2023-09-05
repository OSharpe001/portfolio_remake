import { useState } from 'react';
import { socials } from "../assets/componentLists/socializingList";
import hamburger from "../assets/images/icons/hamburger.png";
import close from "../assets/images/icons/close.png";


export default function Header() {

  // PEAKING HEADER USESTATES AND FUNCTIONS
  const [scrollPosition, setScrollPosition] = useState({
      y: 0,
    });
    const [prevScrollPosition, setPreviousScrollPositiion] = useState({
      y: 0,
    })
    const handleScrollPositionChange = (e) => {
      setPreviousScrollPositiion({
        y: scrollPosition.y
        },);
      setScrollPosition({
        y: window.scrollY
      },);
    };
    window.addEventListener("scroll", handleScrollPositionChange);
    let headerPos =  scrollPosition.y>0 && scrollPosition.y>prevScrollPosition.y ?"hide": "show";

    const handlePageShift = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            });
        };
        if (mobileNavOpen) {
          toggleMobileNav();
        };
    };

    // TOGGLE USESTATE AND FUNCTION FOR MOBILE SCREEN MENU
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

    // AUTO HIDE MOBILE NAV WHEN SCROLLING DOWN
    if (mobileNavOpen && headerPos === "hide") {
      toggleMobileNav();
    };

  return (
    <header
      style={
        headerPos === "hide" ?
          {
            position: "sticky",
            top: "-100px",
            animationName: "raise-nav"
          }
        :
          {
            position: "sticky",
            top: "0",
            animationName: "drop-nav"
          }
      }
    >
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
            !mobileNavOpen?
              <img className="nav-icon-img" onClick={toggleMobileNav} src={hamburger} alt="mobile navigation menu (open)"/>
            :
              <img className="nav-icon-img" onClick={toggleMobileNav} src={close} alt="mobile navigation menu (close)"/>
          }
        </button>
        <nav className={mobileNavOpen?"section-scroll-list mobile": "section-scroll desktop"}>
          <a aria-label="On Click" className="shift-page-link" onClick={handlePageShift("contactme")} href="/#contact-me">Contact Me</a>
          <a aria-label="On Click" className="shift-page-link" onClick={handlePageShift("projects")} href="/#projects">Projects</a>
          <a aria-label="On Click" className="shift-page-link"  target="_blank" rel="noreferrer" href="Omari_Sharpe_SE_Resume.pdf">My Resume</a>
        </nav>
    </header>
  );
};