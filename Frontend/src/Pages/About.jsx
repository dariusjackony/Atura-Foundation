import { team } from "../Data/teamData";
import "../Components/styles/about.css";
function About() {
  return (
    <section>
      <h2>Our Team</h2>

      <div className="team-container">
        {team.map((person, index) => (
          <div key={index} className="team-member">
            <img src={person.image} alt={person.name} />
            <h3>{person.name}</h3>
            <h4>{person.role}</h4>
            <p>{person.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
