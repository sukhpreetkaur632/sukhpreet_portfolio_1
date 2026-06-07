import profileImage from "../assets/profile.jpeg";
import myResume from "../assets/myResume.pdf";

function About() {
  return (
    <section>
      <h1>About Me</h1>

      <div className="aboutLayout">
        <img src={profileImage} alt="My profile" className="profileImage" />

        <div className="infoCard">
          <h2>Sukhpreet Kaur</h2>

          <p>
            My name is Sukhpreet Kaur, and I am a passionate Web Development 
            student with a strong interest in creating modern, user-friendly, 
            and responsive web applications. I enjoy learning new technologies 
            and applying my knowledge to build practical solutions that improve 
            user experiences. 
          <br></br>
            Currently, I am expanding my skills in HTML, 
            CSS, JavaScript, React, Java, SQL, and database management. 
            Through my academic projects and personal practice, 
            I have gained experience in designing websites, developing 
            interactive user interfaces, and implementing programming 
            concepts to solve real-world problems. 
          </p>

          <a href={myResume} target="_blank" className="button">
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;