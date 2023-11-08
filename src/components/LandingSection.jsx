

export default function LandingSection() {

  return (
      <section className="landing">
        <h1 className="console-greeting">{"<h1>Hello, World!</h1>"}</h1>
        <img src={require("../assets/images/my_profile.png")} alt="my profile" className="profile-pic" />
        <h1 className="introduction">I am Omari Sharpe!</h1>
        <h1 className="declaration">A Full-Stack Web Developer</h1>
        <h1 className="declaration">specialized in React</h1>
      </section>
  );
};