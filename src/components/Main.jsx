import LandingSection from './LandingSection';
import ProjectsSection from './ProjectsSection';
import ContactMeSection from './ContactMeSection';


export default function Main({ setDetailPageInfo, handlePageShift }) {

  return (
    <main>
        <LandingSection
        handlePageShift={handlePageShift}/>
        <ProjectsSection
                      setDetailPageInfo={setDetailPageInfo}
                      />
        <ContactMeSection />
    </main>
  );
};