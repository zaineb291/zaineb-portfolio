import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="experience--section" id="myExperience" >
      <div className="portfolio--container">
        <p className="section--title">Experience</p>
        <h2 className="experience--section--heading">My Experience And Education</h2>
      </div> 
      <div className="experience--section--container">
        {data?.experience?.map((item, index) => (
          <div key={index} className="experience--section--card">
            <div className="experience--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="experience--section--card--content">
              <h3 className="experience--section--title">{item.title}</h3>
              <p className="experience--section--description">{item.description1}</p>
              <p className="experience--section--description">{item.description2}</p>
              <p className="experience--section--description">{item.description3}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
