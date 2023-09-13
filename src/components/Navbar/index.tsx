import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from './Navbar.module.css';
import { links } from 'data/data';
import { useScrollLock } from 'hooks';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const hideMenu = () => {
    showMenu && unlockScroll();
    setShowMenu(!showMenu);
  };

  const toggleMenu = () => {
    showMenu && unlockScroll();
    !showMenu && lockScroll();
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styled.nav}>
      <div
        className={
          showMenu
            ? `${styled.navMenu} ${styled.showMenu}`
            : styled.navMenu
        }
      >
        <ul className={styled.navList}>
          {links.map(({ name, icon, path, id }) => {
            return (
              <li key={id} className={styled.navItem}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? `${styled.navLink} ${styled.activeNav}`
                      : styled.navLink
                  }
                  onClick={hideMenu}
                >
                  {icon}
                  <h3 className={styled.navName}>{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={
          showMenu
            ? `${styled.navToggle} ${styled.animateToggle}`
            : styled.navToggle
        }
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
