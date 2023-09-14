import { useState, useEffect } from 'react';
import { themes } from 'data/data';
import { BsMoon, BsSun } from 'react-icons/bs';
import { FaCog } from 'react-icons/fa';
import { ThemeItem } from './ThemeItem';
import styles from './Themes.module.css';
import { getStorageColor, getStorageTheme } from './utils';
import { useOutsideClick } from 'hooks';

export const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());
  const themeRef = useOutsideClick(() => {
    setShowSwitcher(false);
  });

  const changeColor = (color: string) => {
    setColor(color);
  };

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--first-color',
      color
    );
    localStorage.setItem('color', color);
  }, [color]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div ref={themeRef}>
      <div
        className={`${showSwitcher ? styles.showSwitcher : ''}  ${
          styles.styleSwitcher
        }`}
      >
        <div
          className={styles.styleSwitcherToggler}
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          <FaCog />
        </div>

        <div className={styles.themeToggler} onClick={toggleTheme}>
          {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
        </div>

        <h3 className={styles.styleSwitcherTitle}>Style Switcher</h3>
        <div className={styles.styleSwitcherItems}>
          {themes.map((theme, id) => {
            return (
              <ThemeItem
                key={id}
                {...theme}
                onChangeColor={changeColor}
              />
            );
          })}
        </div>

        <div
          className={styles.styleSwitcherClose}
          onClick={() => {
            setShowSwitcher(!showSwitcher);
          }}
        >
          &times;
        </div>
      </div>
    </div>
  );
};
