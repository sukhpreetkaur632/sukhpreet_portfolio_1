import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

function Projects() {
  return (
    <section>
      <h1>Projects</h1>

      <div className="cardContainer">
        <a href="https://your-project-link.com" target="_blank" className="card projectLink">
          <img src={project1} alt="Portfolio project" />
          <h2>React Portfolio Website</h2>
          <p>
            Personal portfolio built with React and React Router.
          </p>
        </a>

        <a href="https://your-project-link.com" target="_blank" className="card projectLink">
          <img src={project2} alt="PharmPal project" />
          <h2>PharmPal Pharmacy Management System</h2>
          <p>
            Software engineering project focused on pharmacy management and customer services. 
          </p>
        </a>

        <a href="https://your-project-link.com" target="_blank" className="card projectLink">
          <img src={project3} alt="Rider Management System" />
          <h2>Rider Management System (Java)</h2>
          <p>
            Java application using arrays, classes, constructors, and object-oriented programming 
            concepts. 
          </p>
        </a>
      </div>
    </section>
  );
}

export default Projects;