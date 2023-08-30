import React from 'react';


export default function ProjectDetailPage({ form }) {

  const title = form.title;
  const details = form.details;
  const image = form.image;
  const site = form.site;
  const github = form.github;
  const techUsed = form.techUsed;

  console.log("PROJECTDETAILSPAGE FORM INFO: ", form);
  // console.log("PROJECTDETAILSPAGE GITHUBLINK INFO: ", github);

  return (
    <section className="details-page">
        <h1 className='details-h1' >ProjectDetailPage</h1>
        <img className='details-image'  src={image} alt={`${title} web app`} />
        <h2 className='details-title' >{title}</h2>
        <p className='details' >{details}</p>
        <p className="details-tech-used" >{techUsed}</p>
        <button className='details-site-button' ><a className='details-site-link'  target="_blank" rel="noreferrer" href={site}>{title}</a></button>
        <button className='details-github-button' ><a className='details-github-link'  target="_blank" rel="noreferrer" href={github}>{`${title}'s GitHub Repo`}</a></button>
        <button className="details-site-button"><a href="/">Go Back</a></button>
    </section>
  );
};
