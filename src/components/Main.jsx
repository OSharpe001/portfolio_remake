import LandingSection from './LandingSection';
import ProjectsSection from './ProjectsSection';
import ContactMeSection from './ContactMeSection';


export default function Main({ setForm }) {

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