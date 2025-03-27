import React from "react";
import profileImage from "../../assets/large/picP.jpeg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          My name is Lizbeth Vazquez, and I recently completed a coding bootcamp. I am currently pursuing a Bachelor of Science in Computer Science at Florida State University. Originally from Fort Lauderdale, I now live in Tallahassee. I’ve been passionate about coding since I was 14, when a classmate introduced me to it. This sparked my interest, and I later joined an after-school coding program, eventually becoming an instructor myself. I’m excited to continue growing my skills and pursue a career in technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
