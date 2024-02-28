import React from "react";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const color1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const color2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const gradient = `linear-gradient(45deg, ${color1}, ${color2})`;
  const style = document.createElement("style");
  style.innerHTML = `
        @keyframes backgroundAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
  
        .animated-background {
          background: ${gradient};
          background-size: 200% 200%;
          animation: backgroundAnimation 6s ease infinite;
        }
      `;
  document.head.appendChild(style);
  return (
    <header className="App-header animated-background">
      <div className="profile">
        <h1>Basile Quichon</h1>
        <h2>Software Engineer</h2>
        <p>
          I'm Basile Quinchon, previously a video editor in television, where I
          honed my skills in visual storytelling and technical precision.
          Seeking a new challenge, I embarked on a transformative journey at Le
          Wagon, a renowned coding bootcamp known for its intensive, hands-on
          curriculum that covers software development fundamentals, web
          technologies, and project-based learning. This experience equipped me
          with the skills to pivot to a career as a Software Engineer, where I
          now blend my creative storytelling background with technical expertise
          to build innovative software solutions.
        </p>
        <div className="social-icons">
          <a
            href="https://www.github.com/bquinch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.svgrepo.com/show/445786/github.svg"
              alt="GitHub"
              className="github-icon icon"
            />{" "}
            {/* Replace 'github-icon.svg' with the path to your GitHub SVG icon */}
          </a>
          <a
            href="https://www.linkedin.com/in/basile-q-b515b168/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.svgrepo.com/show/108614/linkedin.svg"
              alt="LinkedIn"
              className="linkedin-icon icon"
            />{" "}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Profile;
