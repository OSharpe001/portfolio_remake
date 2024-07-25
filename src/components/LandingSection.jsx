

export default function LandingSection() {

  return (
      <section className="landing">
        <h1 className="greeting">Hello, World!</h1>
        <img src={require("../assets/images/my_profile.png")} alt="my profile" className="profile-pic" />
        <h1 className="introduction">I am Omari Sharpe</h1>
        <h1 className="declaration">Your Friendly Neighborhood Full-Stack
          <br />
          <br />
          Web Developer
          <br />
          <br />
          Who Specializes In React
        </h1>
        
      </section>
  );
};