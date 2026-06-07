// Imports project images used on the Projects page
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

function Projects() {
  return (
    <section>
      <h1>Projects</h1>

      {/* Container that holds all project cards */}
      <div className="cardContainer">
        <div className="card">
          <img src={project1} alt="Portfolio project" />
          <h2>React Portfolio Website</h2>
          <p>Personal portfolio built with React and React Router.</p>
        </div>

        <div className="card">
          <img src={project2} alt="PharmPal project" />
          <h2>PharmPal Pharmacy Management System</h2>
          <p>
            Software engineering project focused on pharmacy management and
            customer services.
          </p>
        </div>

        <div className="card">
          <img src={project3} alt="Rider Management System" />
          <h2>Rider Management System (Java)</h2>
          <p>
            Java application using arrays, classes, constructors, and
            object-oriented programming concepts.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
