import styles from "../../styles/product/product.module.css";

const Stories = () => {
  return (
    <section  className={styles.aboutSection}><br /><br />
      <h1>Our products</h1>
      <div className={styles.aboutContainer}>

        <div className={styles.StoriesContent}>
          <img src="..\p1.jpg" alt="" />
          <p className={styles.description}>Village Eggs</p>
          <h3> Access a wide selection of certified, high-value gemstones and gold, sourced from trusted global suppliers.</h3>
          <br /><br />
        </div>
        
        <div className={styles.StoriesContent}>
          <img src="..\p2.jpg" alt="" />
          <p className={styles.description}>Half-Farm Eggs</p>
          <h3>Buy and trade Bitcoin and other cryptocurrencies with full security and competitive rates.</h3>
          <br /><br />
        </div>
        
        <div className={styles.StoriesContent}>
          <img src="..\p3.jpg" alt="" />
          <p className={styles.description}>Farm Eggs</p>
          <h3>Enjoy fast currency exchange with premium rates and same-day transactions for high-value clients.</h3>
          <br /><br />
        </div>
      </div>
    
    </section>
  );
};

export default Stories;