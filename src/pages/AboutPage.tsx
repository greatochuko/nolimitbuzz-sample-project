import { Link } from "react-router-dom";
import styles from "../styles/AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={styles["about-container"]}>
      <section>
        <h1>About This Project</h1>
        <ul>
          <li style={{ listStyleType: "none" }}>
            <strong>Name:</strong> Ogheneochuko Great
          </li>
          <li style={{ listStyleType: "none" }}>
            <strong>Email:</strong>{" "}
            <Link to={"mailto:greatochuko123@gmail.com"}>
              greatochuko123@gmail.com
            </Link>
          </li>
        </ul>
        <p>
          This project was designed to demonstrate my skills and creativity as a
          frontend developer, focusing on building a dynamic and user-friendly
          React application. It incorporates modern web development practices,
          ensuring responsiveness, usability, and seamless functionality.
        </p>
      </section>

      <section>
        <h2>Project Objectives</h2>
        <ul>
          <li>
            <strong>Dynamic UI Creation:</strong> Developing a visually
            appealing and intuitive user interface.
          </li>
          <li>
            <strong>API Integration:</strong> Fetching and displaying data from
            the JSONPlaceholder API.
          </li>
          <li>
            <strong>Routing Implementation:</strong> Using React Router for
            smooth navigation.
          </li>
          <li>
            <strong>Responsive Design:</strong> Ensuring the application works
            flawlessly across devices.
          </li>
        </ul>
      </section>

      <section>
        <h2>What I&apos;ve Done</h2>
        <ul>
          <li>
            Built a React-based application that fetches and displays user data
            dynamically.
          </li>
          <li>
            Integrated React Router for navigation between pages, including a
            user details page.
          </li>
          <li>
            Focused on clean, modular code to ensure scalability and
            maintainability.
          </li>
          <li>
            Styled the application for an engaging and responsive user
            experience.
          </li>
        </ul>
      </section>
    </div>
  );
}
