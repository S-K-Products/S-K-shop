import styles from "../../styles/Home/AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <h1>About Us</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutPhoto}>
          <img src="/AboutUs.jpg" alt="About Us" />
        </div>
        <div className={styles.aboutContent}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eos earum dolores iusto esse dolorem itaque sit quisquam distinctio suscipit, consequatur tempora ipsam recusandae? Ab exercitationem, obcaecati tenetur repellat excepturi iure unde sed!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aut doloribus quis atque odio dignissimos totam enim, odit voluptas quaerat?
          </p>
          <button className={styles.aboutButton}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;