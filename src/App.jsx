import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Manali Jadhav</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="intro">Hello, I'm</p>

          <h1>
            Manali <span>Jadhav</span>
          </h1>

          <h2>Java Full Stack Developer</h2>

          <p>
            I am a passionate developer with hands-on experience in Java,
            Spring Boot, React, MySQL and REST APIs. I enjoy building
            practical web applications and continuously improving my
            technical skills.
          </p>

          <div className="buttons">
           <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="section-content">
          <p className="section-label">ABOUT ME</p>

          <h2>Who I Am</h2>

          <p className="about-text">
            I am a Computer Science graduate and Java Full Stack Developer
            with a strong foundation in object-oriented programming,
            backend development and database management. I have worked
            with Java, Spring Boot, Spring Security, React, MySQL and
            REST APIs to develop full-stack web applications.
          </p>

          <p className="about-text">
            I enjoy solving problems, learning new technologies and
            transforming requirements into clean and functional software
            solutions. I am looking forward to growing as a software
            developer and contributing to real-world projects.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="skills" id="skills">
        <div className="section-content">
          <p className="section-label">MY SKILLS</p>

          <h2>Technical Skills</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Java</h3>
              <p>Core Java, OOP, Collections, Exception Handling</p>
            </div>

            <div className="skill-card">
              <h3>Spring Boot</h3>
              <p>REST APIs, Spring MVC, Spring Data JPA</p>
            </div>

            <div className="skill-card">
              <h3>Spring Security</h3>
              <p>Authentication, Authorization and JWT</p>
            </div>

            <div className="skill-card">
              <h3>React</h3>
              <p>Components, Hooks, State Management and API Integration</p>
            </div>

            <div className="skill-card">
              <h3>Database</h3>
              <p>MySQL, SQL Queries, Joins and Database Design</p>
            </div>

            <div className="skill-card">
              <h3>Web Technologies</h3>
              <p>HTML, CSS, JavaScript and Bootstrap</p>
            </div>

            <div className="skill-card">
              <h3>Tools</h3>
              <p>Git, GitHub, Docker, Jenkins and Swagger</p>
            </div>

            <div className="skill-card">
              <h3>Development</h3>
              <p>REST API Development, MVC and Full Stack Applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects" id="projects">
        <div className="section-content">
          <p className="section-label">MY WORK</p>

          <h2>Projects</h2>

          <div className="project-grid">

            {/* StayEase */}
            <div className="project-card">
              <div className="project-header">
                <span className="project-number">01</span>
                <h3>StayEase</h3>
              </div>

              <p>
                StayEase is a full-stack Smart Hotel Booking and Management
                System designed to simplify hotel and room booking
                operations. Users can register and log in, search hotels
                by city, explore available rooms and make hotel bookings.
              </p>

              <p>
                The system includes authentication and role-based
                authorization, hotel and room management, booking
                management and room availability handling. Booking
                functionality checks room availability and calculates
                the total booking amount based on the selected duration.
              </p>

              <div className="tech-tags">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>Spring Security</span>
                <span>JWT</span>
                <span>React</span>
                <span>MySQL</span>
                <span>REST API</span>
              </div>

              <a
                href="https://github.com/manalijadhav1409-source/StayEase"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>

            {/* E-Commerce */}
            <div className="project-card">
              <div className="project-header">
                <span className="project-number">02</span>
                <h3>E-Commerce Website</h3>
              </div>

              <p>
                E-Commerce Website is a full-stack web application designed
                to provide a complete online shopping experience. Users
                can browse products, view product details, add products
                to the cart, update quantities and proceed through the
                checkout flow.
              </p>

              <p>
                The application also provides product management
                functionality for adding and updating products, including
                product image uploads. The frontend communicates with the
                backend through REST APIs, while MySQL is used for
                persistent data storage.
              </p>

              <div className="tech-tags">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>REST API</span>
                <span>React</span>
                <span>JavaScript</span>
                <span>MySQL</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>

              <a
                href="https://github.com/manalijadhav1409-source/Ecommerce-Website"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="experience" id="experience">
        <div className="section-content">
          <p className="section-label">EXPERIENCE</p>

          <h2>Internship</h2>

          <div className="experience-card">
            <div>
              <h3>Full Stack Developer Intern</h3>
              <h4>Anyatam Adhyayan IT</h4>
              <p className="duration">1 Month Internship</p>
            </div>

            <p>
              Worked in a software development environment and gained
              practical exposure to Core Java concepts and application
              development. Worked on understanding project requirements,
              implementation and development practices.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="section-content">
          <p className="section-label">GET IN TOUCH</p>

          <h2>Let's Connect</h2>

          <p>
            I am open to opportunities and would love to connect.
            Feel free to reach out through email or social platforms.
          </p>

          <div className="contact-links">
            <a href="mailto:manalijadhav1409@gmail.com">
              Email
            </a>

            <a
              href="https://github.com/manalijadhav1409-source"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/manali-jadhav-44b61b283"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Manali Jadhav. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;