import { Link, useLocation, useNavigate } from "react-router-dom";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  function closeMessage() {
    navigate("/", { replace: true });
  }

  return (
    <section>
      {formData && (
        <div className="successNote">
          <button className="closeNote" onClick={closeMessage}>
            ×
          </button>

          <h2>Message Sent!</h2>
          <p>Thanks {formData.firstName}, I will get back to you soon.</p>
        </div>
      )}

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