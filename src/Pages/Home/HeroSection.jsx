export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Zaineb</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Student Web </span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am Looking For An End of Studies intership
            <br /> In The Field Of Web Development and Design
          </p>
        </div>
        <button className="btn btn-primary">Hire Me</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
