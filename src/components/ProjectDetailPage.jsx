

export default function ProjectDetailPage({ project }) {

  const title = project.title;
  const details = project.details;
  const timeLine = project.timeLine;
  const image = project.image;
  const site = project.site;
  const github = project.github;
  const techUsed = project.techUsed;

  return (
    <section className="details-page">
        <h1 className='details-title' >{title}</h1>
        <img className='details-image'  src={image} alt={`${title} web app`} />
        <p className='details' ><span className="underlined">DETAILS</span>: {details}</p>
        <p className='details' ><span className="underlined">TIMELINE</span>: {timeLine}</p>
        <p className="details-tech-used" ><span className="underlined">TECHNOLOGY USED</span>: {techUsed}</p>
        <button className='details-site-button' ><a className='details-site-link'  target="_blank" rel="noreferrer" href={site}>Live Site</a></button>
        <button className='details-github-button' ><a className='details-github-link'  target="_blank" rel="noreferrer" href={github}>GitHub Repo</a></button>
        <button className="details-site-button"><a href="/">Go Back</a></button>
    </section>
  );
};
