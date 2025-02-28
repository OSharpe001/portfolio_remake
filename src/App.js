import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import './App.css';
import { Footer, Header, Main, ProjectDetailPage } from './components';


export default function App() {

  const [detailPage, setDetailPage] = useState({
    title: "",
    details: "",
    timeLine: "",
    image: "",
    site: "",
    github: "",
  });

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

  return (
    <div className="App">
      <Header
            mobileNavOpen={mobileNavOpen}
            toggleMobileNav={toggleMobileNav}
            handlePageShift={handlePageShift}
          />
      <Routes>
        <Route path="/" element={<Main
                                    setDetailPage={setDetailPage}
                                    handlePageShift={handlePageShift}
                                  />}/>
        <Route path="/details" element={<ProjectDetailPage
                                                        form={detailPage}
                                                      />}/>
      </Routes>
      <Footer />
    </div>
  );
};
