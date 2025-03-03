"use client";

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { usePathname } from "next/navigation";

import { toggleMenu, closeMenu } from '../../../../store/headerSlice';

type Props = {
    item: { title: string; path: string; }; 
}

const NavLink = ({item}: Props) => {
    const dispatch = useDispatch();
    const pathName = usePathname();
  return (
    <li className="header__nav-item">
      <Link className={`header__navLink ${pathName === item.path && "active"}`} href={item.path} onClick={() => dispatch(closeMenu())}>
       {item.title}
      </Link>
    </li>
  )
}

export default NavLink;