import React from 'react';
import LandingSection from './LandingSection';
import ProjectsSection from './ProjectsSection';
import ContactMeSection from './ContactMeSection';

export default function Main({ setForm }) {

  // console.log("MAIN.JSX'S SETFORM VALUE: ", setForm);
  return (
    <main>
        <LandingSection />
        <ProjectsSection
                      setForm={setForm}
                      />
        <ContactMeSection />
    </main>
  );
};