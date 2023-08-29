import React from 'react';

export default function ProjectDetailPage({ title, details, image}) {
  return (
    <section className="details-page">
        <h1>ProjectDetailPage</h1>
        <img src={image} alt={`${title} web app`} />
        <h2>{title}</h2>
        <p>{details}</p>


    </section>
  );
};
