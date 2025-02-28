import LandingSection from './LandingSection';
import ProjectsSection from './ProjectsSection';
import ContactMeSection from './ContactMeSection';


export default function Main({ setDetailPage, handlePageShift }) {

  return (
    <main>
        <LandingSection 
        handlePageShift={handlePageShift}/>
        <ProjectsSection
                      setDetailPage={setDetailPage}
                      />
        <ContactMeSection />
    </main>
  );
};