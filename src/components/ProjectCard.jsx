import React from 'react';

export default function ProjectCard({ title, description, image, site }) {
  return (
    <div className="project-card">
        <img src={image} alt={`${title} website`} />
        <h2>{title}</h2>
        <p>{description}</p>
        {
          site ?
            <button>
              <a
                aria-label="On Click"
                target="_blank"
                rel="noreferrer"
                href={site}
              >
                Visit Site <img src="../assets/images/icons/double_right_arrow.png" alt="right arrow" />
              </a>
            </button>
          :
            null
        }

    </div>
  );
};
