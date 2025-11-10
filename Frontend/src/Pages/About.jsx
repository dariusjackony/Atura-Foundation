import { team } from "../Data/teamData";
import "../Components/styles/about.css";
function About() {
  return (
    <>
     <section>
      <h2>Our Team</h2>

      <div className="team-container">
        {team.map((person, index) => (
          <div key={index} className="team-member">
            <img src={person.image} alt={person.name} />
            <h3>{person.name}</h3>
            <h4>{person.role}</h4>
          </div>
        ))}
      </div>
    </section>
    <section>
        <h2>Performers</h2>
         <div className="performers-names">
              <span>Musinguzi Jacob</span>,
              <span>Lubangakene Isaac</span>,
              <span>Odida Geofrey</span>,
              <span>Olando Joseph</span>,
              <span>Maceo Frost</span>,
              <span>Duncan Winecoff</span>,
              <span>Emily Maye</span>,
              <span>Kevin Castanheira</span>,
              <span>Filip Tellander</span>,
              <span>Ian Isac</span>,
              <span>Katia Wik</span>,
              <span>Marcus Lundin</span>,
              <span>Erlandur Sveinsson</span>,
              <span>Lukas Tielke</span>
          </div>
    </section>
    </>
  );
}

export default About;
