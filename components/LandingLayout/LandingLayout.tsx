import styles from "../LandingLayout/LandingLayout.module.css";
import Container from "../Container/Container";
import Waves from "../Waves/Waves";
import Area from "../../sections/Area/Area";

// INFO: Code for landing page between footer and header (h1) is in the Area.tsx file
function Footer() {
  return (
    <footer className={styles.container}>
      <Area />
    </footer>
  );
}

// <Area /> above is the content betweent header and footer



// WARNING: REMOVED WAVES TEMORARY
/*
<Container>
  <Waves flip image="/images/wave--infinite-grey.svg"  />
  <Area />
</Container>
*/

/*
<div className={styles.flex}>
          <div>
            <h3 className={styles.heading}>Quendl</h3>
            <h5 className={styles.heading}>About us</h5>
            <p className={styles.text}>Designs products and experience for users.</p>
          </div>
          <div className={styles.text_instagram}>
            <div className={styles.text_instagram_icon_padding} >
              <FontAwesomeIcon icon={faInstagram} color={"white"} size={"2x"} />
            </div>
            <div className={styles.text_instagram_text_padding}>
              <p className={styles.text}>mail@quendl.com</p>
              <p className={styles.text}>quendl_app</p>
            </div>
          </div>
          <address className={styles.address}>
            <h5 className={styles.heading}>Address</h5>
            <ul>
              <li>8-9 Marino Mart</li>
              <li>Fairview</li>
              <li>Street 3</li>
              <li>D03 P590</li>
            </ul>
          </address>
          <div>
            <h5 className={styles.heading}>Other Links</h5>
            <ul>
              <li>Privacy Policy</li>
              <li>Test</li>
            </ul>
          </div>
        </div>
        */

export default Footer;