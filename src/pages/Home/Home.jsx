import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to JavaScript Methods Guide</h1>
        <p className={styles.intro}>
          JavaScript is an essential part of modern web development, offering a
          rich set of methods to work with arrays, objects, and more. In this
          guide, we'll explore some of the most commonly used methods that will
          help you write cleaner, more efficient code.
        </p>
        <p className={styles.intro}>
          Whether you're transforming data, filtering arrays, or iterating over
          objects, mastering these methods will greatly enhance your coding
          skills and productivity. Dive in to learn more and become a more
          proficient JavaScript developer.
        </p>

        <div className={styles.actions}>
          <Link to="/guides">
            <button className={styles.button}>Explore Methods</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
