import styles from "../../styles/Home/AboutSection.module.css";

const Ourmision = () => {
  return (
    <section className={styles.aboutSection}>
      <h1>Our Mission & Values</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutPhoto2}>
          <img src="..\a.hand.jpg" alt="About Us" />
          <p className={styles.aboutD}>Transparent & ethical trading</p>
        </div>
        <div className={styles.aboutPhoto2}>
          <img src="..\a.rate.jpg" alt="About Us" />
          <p className={styles.aboutD}>Premium, world-class services</p>
        </div>
        <div className={styles.aboutPhoto2}>
          <img src="..\a.bulb.jpg" alt="About Us" />
          <p className={styles.aboutD}>Advanced financial solutions</p>
        </div>
      </div>
    </section>
  );
};

export default Ourmision;