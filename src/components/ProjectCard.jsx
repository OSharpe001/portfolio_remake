import { useNavigate } from 'react-router-dom';
import ProjectDetailPage from './ProjectDetailPage';

export default function ProjectCard({ title, description, image, site }) {

  const navigate = useNavigate();

  const goToDetails = () => {
    navigate("/details");
  }

  return (
    <div className="project-card">
      {site ?
        <button className="project-image-button" onClick={goToDetails}><img className="project-image" src={image} alt={`${title} website`} /></button>
      :
      <button className="project-image-button"><img className="project-image" src={image} alt={"building, in process"} /></button>
      }
      
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      {
        site ?
          <button className='site-button'>
            <a
              aria-label="On Click"
              target="_blank"
              rel="noreferrer"
              href={site}
            >
              Visit Site <img className='site-arrow' src={require("../assets/images/icons/double_right_arrow.png")} alt="right arrow" />
            </a>
          </button>
        :
          null
      }
      <div className="hidden">
        <ProjectDetailPage
          title={title}
          description={description}
          image={image}
        />
      </div>
    </div>
  );
};
