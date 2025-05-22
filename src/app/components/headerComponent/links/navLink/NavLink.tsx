"use client";

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { closeMenu } from '../../../../store/headerSlice';
import { NavLinkProps } from "../../../../types/nav";

const NavLink = ({item}: NavLinkProps) => {
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