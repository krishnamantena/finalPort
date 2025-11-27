import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-left">
        <span className="intro-text">HI, I'M KRISHNA</span>

        <h1 className="hero-title">
          I'M A <br /> FULL STACK <br /> DEVELOPER
        </h1>

        <p className="hero-desc">
          I build scalable web applications using React, Spring Boot,
          and modern backend technologies.
        </p>

        <button className="hero-btn">VIEW MY PROJECTS</button>
      </div>

      <div className="hero-right">
        <img src={profile} alt="Krishna" />
      </div>
    </section>
  );
}

export default Hero;
