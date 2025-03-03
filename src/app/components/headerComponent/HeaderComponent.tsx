"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Links from './links/Links';

import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from "../../hooks/useMediaQuery";
import { RootState } from '../../store/store';
import { toggleMenu, closeMenu } from "../../store/headerSlice";

import { useLocalStorage } from './../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

type Props = {
  isTopOfPage: boolean;
}

const HeaderComponent = ({ isTopOfPage }: Props) => {
  const dispatch = useDispatch();
  const isMenuToggled = useSelector((state: RootState) => state.header.isMenuToggled);
  const isAboveMediumScreens = useMediaQuery("(max-width: 991px)");
  const headerBackground = isTopOfPage ? "" : "";
  
  return (
    <>
      <header className="header" style={{backgroundColor: headerBackground}}>
          <div className="container">
              <div className="header__inner">
                  <Link className="logo" href={"/"}>
                    <>
                     <Image className='logo__img-white' width={213} height={17} src='/img/logo-white.svg' alt='logo'/>
                     <Image className='logo__img' width={213} height={17} src='/img/logo.svg' alt='logo'/>
                    </>
                  </Link>
                  {isAboveMediumScreens ? (
                    <button className="menu__btn" onClick={() => dispatch(toggleMenu())}>
                      <span className={isMenuToggled ? "nav-icon nav-icon--active" : "nav-icon"}></span>
                    </button>
                  ) : (
                    <nav className="header__nav">
                    <Links/>
                    <div className="action">
                      <Link className="action__buttonMenu" href={"/contacts"}>
                        Let’s Talk
                        <>
                         <Image className="action__button--menu-image-white" width={36} height={36} src="/img/header/arrow-right-white.svg" alt="arrow-right" />
                         <Image className="action__button--menu-image" width={36} height={36} src="/img/header/arrow-right.svg" alt="arrow-right" />
                        </>
                      </Link>
                    </div>
                  </nav>
                  )}
              </div>
          </div>
      </header>

      {/* Mobile menu modal */}
      {isAboveMediumScreens && isMenuToggled && (
        <div className="mobile-menu__nav">
          <Links/>
          <div className="action">
            <Link className="action__buttonMenu" href={"/contacts"}>
              Let’s Talk
              <>
                <Image className="action__button--menu-image-white" width={36} height={36} src="/img/header/arrow-right-white.svg" alt="arrow-right" />
                <Image className="action__button--menu-image" width={36} height={36} src="/img/header/arrow-right.svg" alt="arrow-right" />
              </>
            </Link>
          </div>
        </div>
      )}
    </>
    
  )
}

export default HeaderComponent;