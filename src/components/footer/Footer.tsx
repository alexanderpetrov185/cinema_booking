import React from "react";
import styles from "./footer.module.scss";
import { ReactComponent as VkIcon } from "../../static/icons/vk.svg";
import { ReactComponent as TelegramIcon } from "../../static/icons/telegram.svg";
import { ReactComponent as InstagramIcon } from "../../static/icons/instagram.svg";
import { ReactComponent as AppStoreIcon } from "../../static/icons/app_store.svg";
import { ReactComponent as GooglePlayIcon } from "../../static/icons/google_play.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.socialLinks}>
        <div className={styles.socialLeft}>
          <span>Мы в соцсетях:</span>
          <a href="https://vk.com/beatboxerr">
            <VkIcon />
          </a>
          <a href="t.me/@Claptrap42">
            <TelegramIcon />
          </a>
          <a href="/">
            <InstagramIcon />
          </a>
        </div>
        <div className={styles.socialRight}>
          <a href="/">
            <AppStoreIcon />
          </a>
          <a href="/">
            <GooglePlayIcon />
          </a>
        </div>
      </div>

      <div className={styles.contactsItem}>
        <a href="tel:+7 937 9391196">
          <span>+7 937 9391196</span>
        </a>
        <span>Часы работы: с 12:00-03:00,</span>
        <span>в выходные дни с 11:00-03:00</span>
      </div>

      <div className={styles.contactsItem}>
        <a href="mailto:alexanderpetrov185@gmail.com">
          <span>alexanderpetrov185@gmail.com</span>
        </a>
        <span>Йошкар-Ола, Улица Строителей, 123.</span>
        <span>3 этаж, Cinemas</span>
      </div>
      <div className={styles.contactsItem}>
        <span>© 2023 «Cinemas»</span>
      </div>
    </div>
  );
};

export default Footer;
