import styles from "../../styles/Home/s.Stories.module.css";

const Stories = () => {
  return (
    <section className={styles.aboutSection}>
      <h1>Client Success Stories</h1>
      <div className={styles.aboutContainer}>

        <div className={styles.StoriesContent}>
          <img src="..\gold-bar.png" alt="" />
          <p className={styles.description}>Premium Gemstones & Gold Trading</p>
          <h3> Access a wide selection of certified, high-value gemstones and gold, sourced from trusted global suppliers.</h3>
          <br /><br />
        </div>
        
        <div className={styles.StoriesContent}>
          <img src="..\bitcoin.png" alt="" />
          <p className={styles.description}>Secure Crypto & Bitcoin Trading</p>
          <h3>Buy and trade Bitcoin and other cryptocurrencies with full security and competitive rates.</h3>
          <br /><br />
        </div>
        
        <div className={styles.StoriesContent}>
          <img src="..\king.png" alt="" />
          <p className={styles.description}>VIP Foreign Exchange Solutions </p>
          <h3>Enjoy fast currency exchange with premium rates and same-day transactions for high-value clients.</h3>
          <br /><br />
        </div>
      </div>
      
      <br />
      <br />

      <div className={styles.aboutContainer}>

        <div className={styles.StoriesContent}>
          <img src="..\walet.png" alt="" />
          <p className={styles.description}>Instant Loans Without Credit Checks</p>
          <h3>Get quick and secure loans with no traditional credit check. Fast approvals for eligible clients.</h3>
          <br /><br />
        </div>

        <div className={styles.StoriesContent}>
          <img src="..\coin.png" alt="" />
          <p className={styles.description}>Exclusive Commodity Supply & Trade </p>
          <h3>We source and procure high-demand commodities globally, ensuring quality and reliability.</h3>
          <br /><br />
        </div>

        <div className={styles.StoriesContent}>
          <img src="..\jug.png" alt="" />
          <p className={styles.description}>Premium Liquor Wholesale & Export</p>
          <h3>Wholesale and international distribution of luxury liquor brands, ensuring premium quality.</h3>
          <br /><br />
        </div>
      </div>
    </section>
  );
};

export default Stories;