import React from 'react';

export default function LandingSection() {

    const initialGreeting = 'console.log("Hello, World!")';

  return (
    <div>
        <h1 className="console-greeting">{initialGreeting}</h1>
        {/* <img src="" alt="my profile" className="profile-pic" /> */}
        <h1 className="introduction">I am Omari Sharpe!</h1>
        <h1 className="declaration">A Full Stack Web Developer who specializes in React</h1>
    </div>
  );
};