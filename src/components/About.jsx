import pulau from "../assets/pulau.svg";

const About = () => {
  return (
    <section id="about">
      <div className="about-left">
        <img src={pulau} alt="" />
      </div>
      <div className="about-right">
        <h1 className="title-section">About Us</h1>
        <h3 className="text-section">Tentang kami</h3>
        <p className="text-section">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, dolore natus, aspernatur soluta quod dolor nam,
          voluptate at asperiores exercitationem commodi. Ab obcaecati,
          cupiditate nisi laboriosam earum culpa maxime commodi fugiat voluptas
          incidunt deleniti voluptates ducimus laudantium non. Deserunt, ea?
        </p>
      </div>
    </section>
  );
};

export default About;
