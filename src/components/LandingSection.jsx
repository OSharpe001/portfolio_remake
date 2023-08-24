

export default function LandingSection() {

  const initialGreeting = "<h1>Hello, World!</h1>";

  return (
      <section className="landing">
        <h1 className="console-greeting">{initialGreeting}</h1>
        <img src={require("../assets/images/my_profile.png")} alt="my profile" className="profile-pic" />
        <h1 className="introduction">I am Omari Sharpe!</h1>
        <h1 className="declaration">A Full-Stack Web Developer</h1>
        <h1 className="declaration">specialized in React</h1>
      </section>
  );
};