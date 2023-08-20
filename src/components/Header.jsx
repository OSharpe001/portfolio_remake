import { useState } from 'react';
import socializingList from "../assets/componentLists/socializingList"


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
    };

  return (
    <header
            className="nav-header"
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
        <nav>
            {
                socializingList.map((socialLink) => (
                  <a aria-label="On Click" target="_blank" rel="noreferrer" href={socialLink.url} key={socialLink.url}>
                    <img className="icons" icon={socialLink.icon} alt="socializing icon" />
                  </a>
                ))
            }
        </nav>
        <nav className="section-scroll">
            <a aria-label="On Click" className="shift-page" onClick={handlePageShift("contactme")} href="/#contact-me">Contact Me</a>
            <a aria-label="On Click" className="shift-page" onClick={handlePageShift("projects")} href="/#projects">Projects</a>
        </nav>
    </header>
  );
};