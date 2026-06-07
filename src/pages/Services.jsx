function Services() {
  return (
    <section>
      <h1>Services</h1>

      {/* Container that holds all service cards */}
      <div className="cardContainer">
        <div className="card">
          <h2>Web Development</h2>
          <p>
            I create responsive and user-friendly websites using modern web 
            technologies such as HTML, CSS, JavaScript, and React. My focus is on building 
            websites that are visually appealing, functional, and accessible across different 
            devices.
          </p>
        </div>

        <div className="card">
          <h2>Java Application Development</h2>
          <p>
            I design and develop Java-based applications using object-oriented programming 
            principles. This includes creating classes, implementing inheritance, managing data, 
            and solving real-world programming problems.
          </p>
        </div>

        <div className="card">
          <h2>Database Design and Management</h2>
          <p>
            I work with SQL and database systems to design, create, and manage databases. 
            I can write queries, create tables, and develop database solutions that efficiently 
            store and retrieve information.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;