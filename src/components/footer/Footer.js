import React from 'react';
import {
  ImFacebook2, ImInstagram, ImTwitter, ImYoutube,
} from 'react-icons/im';
import styles from './styles/footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles['flex-container']}>
        <div className={styles.title}>
          <ImFacebook2 className={styles.icons} />
          <ImInstagram className={styles.icons} />
          <ImTwitter className={styles.icons2} />
          <ImYoutube className={styles.icons2} />
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.link} href="#">Audio and Subtitle</div>
            <div className={styles.link} href="#">Media center</div>
            <div className={styles.link} href="#">Privacy</div>
          </div>

          <div className={styles.column}>
            <div className={styles.link} href="#">Audio Description</div>
            <div className={styles.link} href="#">Inverter Relations</div>
            <div className={styles.link} href="#">Legal Notices</div>
          </div>

          <div className={styles.column}>
            <div className={styles.link} href="#">Help Center</div>
            <div className={styles.link} href="#">Job</div>
            <div className={styles.link} href="#">Cookie Preferences</div>
          </div>

          <div className={styles.column}>
            <div className={styles.link} href="#">Corporate Information</div>
            <div className={styles.link} href="#">Gift Cards</div>
            <div className={styles.link} href="#">Terms of Use</div>
          </div>

        </div>
        <div className={styles.link} href="#">Contact us</div>
      </div>
      <div className={styles['service-button-container']}>
        <div className={styles['service-button']}>Service Code</div>
      </div>
    </div>
  );
}

export default Footer;
