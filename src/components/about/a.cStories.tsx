import styles from "../../styles/Home/AboutSection.module.css";

const Stories = () => {
  return (
    <section className={styles.aboutSection}>
      <h1>Client Success Stories</h1>
      <div className={styles.aboutContainer}>

      <div className={styles.StoriesIMGg}>
        <img src="..\a.sry.png" alt="About Us"className={styles.StoriesIMGimg} />
      </div>

        <div className={styles.StoriesContent}>
          <p className={styles.description}>World-Wise International has transformed the way we invest in gold and forex. Their professionalism and transparency are unmatched!</p>
          <br /><br />

          <div className={styles.StoriesIMG}>
            <img src="..\a.man.jpg" alt="About Us" />
            <h3 className={styles.name}>John</h3>
          </div>
        </div>
        
        <div className={styles.StoriesContent}>
          <p className={styles.description}>World-Wise International has transformed the way we invest in gold and forex. Their professionalism and transparency are unmatched!</p>
          <br /><br />

          <div className={styles.StoriesIMG}>
            <img src="..\a.man.jpg" alt="About Us" />
            <h3 className={styles.name}>John</h3>
          </div>
        </div>
      </div>
      
      <br />
      <br />

      <div className={styles.aboutContainer}>

        <div className={styles.StoriesContent}>
          <p className={styles.description}>World-Wise International has transformed the way we invest in gold and forex. Their professionalism and transparency are unmatched!</p>
          <br /><br />

          <div className={styles.StoriesIMG}>
            <img src="..\a.man.jpg" alt="About Us" />
            <h3 className={styles.name}>John</h3>
          </div>
        </div>

        <div className={styles.StoriesContent}>
          <p className={styles.description}>World-Wise International has transformed the way we invest in gold and forex. Their professionalism and transparency are unmatched!</p>
          <br /><br />

          <div className={styles.StoriesIMG}>
            <img src="..\a.man.jpg" alt="About Us" />
            <h3 className={styles.name}>John</h3>
          </div>
        </div>

        <div className={styles.StoriesContent}>
          <p className={styles.description}>World-Wise International has transformed the way we invest in gold and forex. Their professionalism and transparency are unmatched!</p>
          <br /><br />

          <div className={styles.StoriesIMG}>
            <img src="..\a.man.jpg" alt="About Us" />
            <h3 className={styles.name}>John</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;