import "./css/About.css";

function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p>We are committed to delivering high-quality products and services, focusing on customer satisfaction and innovation.</p>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To make high-quality services and products accessible to everyone, improving lives through innovation.</p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>To become a global leader in innovation and customer satisfaction, leading the way for sustainable growth.</p>
        </div>
      </section>

      <section className="our-values">
        <h2>Our Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Focus</li>
          <li>Excellence</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <h3 className="name">John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <h3 className="name">Jane Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <h3 className="name">Mary Johnson</h3>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default About;
