

export default function LandingSection({ handlePageShift }) {

  return (
    <section className="landing">
      <img src={require("../assets/images/blueProfileToken.png")} alt="PTN profile" className="profile-pic" />
      <h1>Omari Sharpe</h1>
      <p className="declaration">Your New Favorite Software Engineer</p>
      <p className="declaration">Who Specializes In MERN-Stack Development</p>
    </section>
    //   <section className="landing">
    //   <div className="right">
    //     <p className="declaration">From Master Electrician to Software Developer - Now, I'm constructing your company's web-realty!</p>
    //     <p className="declaration">
    //       Feel free to

    //       <a aria-label="On Click" className="shift-page-link underlined" onClick={handlePageShift("contactme")} href="/#contact-me">Contact Me</a>
    //       for help with Freelance or Open Source projects, Tutoring or an offer to contract my services. Whether you need a simple landing page, an ecommerce or a multi-paged app, you've come to the right place!
    //       I'm also willing to hear offers for W2 positions so don't be shy.
    //     </p>
    //     <img src="../assets/images/enthusiasticPTN" alt="memoji with a thumbs up" className="memoji" />
    //   </div>

    //   <div className="left">
    //     <img src={require("../assets/images/tanProfileToken.png")} alt="PTN profile" className="profile-pic" />
    //     <h1>Omari Sharpe</h1>
    //     <p className="declaration">Your New Favorite Software Engineer</p>
    //     <p className="declaration">Who Specializes In MERN-Stack Development</p>
    //   </div>
    // </section>
  );
};