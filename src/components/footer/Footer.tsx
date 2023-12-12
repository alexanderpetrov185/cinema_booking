import React from "react";
import "./footer.scss";
import { ReactComponent as VkIcon } from "../../static/icons/vk.svg";
import { ReactComponent as TelegramIcon } from "../../static/icons/telegram.svg";
import { ReactComponent as InstagramIcon } from "../../static/icons/instagram.svg";
import { ReactComponent as AppStoreIcon } from "../../static/icons/app_store.svg";
import { ReactComponent as GooglePlayIcon } from "../../static/icons/google_play.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <div className="socialItem left">
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
        <div className="socialItem right">
          <a href="/">
            <AppStoreIcon />
          </a>
          <a href="/">
            <GooglePlayIcon />
          </a>
        </div>
      </div>
      <div className="contacts">
        <div className="contactsItem">
          <a href="tel:+7 937 9391196">
            <span>+7 937 9391196</span>
          </a>
          <span className={"itemText"}>
            Часы работы: с 12:00-03:00; в выходные дни с 11:00-03:00
          </span>
        </div>

        <div className="contactsItem">
          <a href="mailto:alexanderpetrov185@gmail.com">
            <span>alexanderpetrov185@gmail.com</span>
          </a>
          <span className={"itemText"}>
            Йошкар-Ола, Охотный ряд, 123. 3 этаж Cinemas
          </span>
        </div>
        <div className="contactsItem">
          <span className={"itemText"}>© 2023 «Cinemas»</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
