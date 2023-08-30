import React from 'react';
import "./footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <div className="socialLinks">
                    <span>Мы в соцсетях:</span>
                    <img src="/assets/icons/vk.svg" alt="vk"/>
                    <img src="/assets/icons/telegram.svg" alt="telegram"/>
                </div>
                <div className="marketLinks">
                    <img src="/assets/icons/appstore.png" alt="appStore"/>
                    <img src="/assets/icons/googleplay.png" alt="googlePlay"/>
                </div>
            </div>
            <div className="contacts">
                <div className="contactsItem">
                    <span>+7 495 642-41-41</span>
                    <span>Часы работы: с 12:00-03:00; в выходные дни с 11:00-03:00</span>
                </div>
                <div className="contactsItem">
                    <span>Cinemas@gmail.com</span>
                    <span>Москва, Охотный ряд, 2. 4 этаж Торговой галереи Seasons</span>
                </div>
                <div className="contactsItem">
                    <span>© 2023 «Cinemas».</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;