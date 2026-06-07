// Imports tools for navigation and receiving form data from the Contact page
import { Link, useLocation, useNavigate } from "react-router-dom";

function Home() {
  // Gets the data sent from the Contact form
  const location = useLocation();

  // Allows the popup message to be removed by updating the page state
  const navigate = useNavigate();

  const formData = location.state;

  // Clears the message after the close button is clicked
  function closeMessage() {
    navigate("/", { replace: true });
  }

  return (
    <section>
      {/* Shows a success note only after the contact form is submitted */}
      {formData && (
        <div className="successNote">
          <button className="closeNote" onClick={closeMessage}>
            ×
          </button>

          <h2>Message Sent!</h2>
          <p>Thanks {formData.firstName}, I will get back to you soon.</p>
        </div>
      )}

      {/* Main Home page layout */}
      <div className="homeLayout">
        <div>
          <p className="smallTitle">Welcome</p>
          <h1>
            Hello,
            <br></br>I am Sukhpreet
          </h1>

          <Link to="/about" className="button">
            About Me
          </Link>
        </div>

        <div className="homeCard">
          <h2>Mission Statement</h2>
          <p>
            My mission is to develop innovative, accessible, and efficient
            software solutions while continuously improving my technical skills.
            I strive to create applications that provide meaningful experiences
            for users and contribute positively to the technology industry.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
