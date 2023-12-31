import React from 'react';
import "./footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <div className="socialItem">
                    <span>Мы в соцсетях:</span>
                    <a href="https://vk.com/beatboxerr">
                        <img src="/assets/icons/vk.svg" alt="vk"/>
                    </a>
                    <a href="t.me/@Claptrap42">
                        <img src="/assets/icons/telegram.svg" alt="telegram"/>
                    </a>
                    <a href="/">
                        <img src="/assets/icons/instagram.svg" alt="instagram"/>
                    </a>
                </div>
                <div className="socialItem">
                    <a href="/">
                        <img src="/assets/icons/app_store.svg" alt="appStore"/>
                    </a>
                    <a href="/">
                        <img src="/assets/icons/google_play.svg" alt="googlePlay"/>
                    </a>
                </div>
            </div>
            <div className="contacts">
                <div className="contactsItem">
                    <a href="tel:+7 937 9391196">
                        <span>+7 937 9391196</span>
                    </a>
                    <span className={"itemText"}>Часы работы: с 12:00-03:00; в выходные дни с 11:00-03:00</span>
                </div>

                <div className="contactsItem">
                    <a href="mailto:alexanderpetrov185@gmail.com">
                        <span>alexanderpetrov185@gmail.com</span>
                    </a>
                    <span className={"itemText"}>Москва, Охотный ряд, 123. 3 этаж Cinemas</span>
                </div>
                <div className="contactsItem">
                    <span className={"itemText"}>© 2023 «Cinemas».</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;