// src/app/components/Footer.tsx
import React from 'react';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import "./footer.scss";
import FooterLinks from "./links/FooterLinks";
import SocialLinks from "./socialLinks/SocialLinks";

import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__top">
                        <div className="footer__top-left">
                            <div className="footer__top-left-top">
                                <Image width={232} height={24} className='footer_logo__img' src='/img/logo-white.svg' alt='logo' />
                            </div>
                            <div className="footer__top-left-bottom">
                                <div className="footer__top-left-bottom-left">
                                    <h3 className="footer__top-left-bottom-title">JAKARTA, id</h3>
                                    <p className="footer__top-left-bottom-text">Jl.Jend Soedirman</p>
                                    <p className="footer__top-left-bottom-text">blok 1 kav 2. 11220</p>
                                </div>
                                <div className="footer__top-left-bottom-right">
                                    <h3 className="footer__top-left-bottom-title">Contact information</h3>
                                    <p className="footer__top-left-bottom-text">INFO@PIXELMAGNET.COM</p>
                                    <p className="footer__top-left-bottom-text">011-123-456</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer__top-right">
                            <FooterLinks/>
                            {/* <ul className="footer__socialsList">
                                <li className="footer__socialsItem">
                                    <a href="" className="footer__socialsLink">instagram</a>
                                </li>
                                <li className="footer__socialsItem">
                                    <a href="" className="footer__socialsLink">x</a>
                                </li>
                                <li className="footer__socialsItem">
                                    <a href="" className="footer__socialsLink">facebook</a>
                                </li>
                                <li className="footer__socialsItem">
                                    <a href="" className="footer__socialsLink">youtube</a>
                                </li>
                            </ul> */}
                            <SocialLinks/>
                        </div>
                    </div>
                    <div className="footer__bottom">
                       <div className="footer__bottom-left">
                         <p className="footer-copy">© 2023 Pixelmagnet.agency ALL RIGHTS RESERVED.</p>
                       </div>
                       <div className="footer__bottom-right">
                         <ul className="footer__conditions-list">
                           <li className="footer__conditions-item">
                            <a className="footer__conditions-link" href="#">Terms of service</a>
                           </li>
                           <li className="footer__conditions-item">
                            <a className="footer__conditions-link" href="#">Privacy Policy</a>
                           </li>
                         </ul>
                       </div>
                    </div>
                    <div className="dark-mode-btn-wrapper">
                      <BtnDarkMode />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
