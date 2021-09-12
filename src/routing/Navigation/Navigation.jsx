import { NavLink } from "react-router-dom";
import styles from "./NavigationStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState("");
  const [navAnimation, setNavAnimation] = useState("");

  const closeMenu = () => {
    setIsNavOpen(false);
    setNavAnimation(styles.hideNav);
  };

  const openMenu = () => {
    setIsNavOpen(true);
    setNavAnimation(styles.showNav);
  };

  const openCloseMenu = () => {
    isNavOpen ? closeMenu() : openMenu();
  };

  return (
    <div className={styles.header}>
      <BurgerMenu isNavOpen={isNavOpen} onBurgerClick={openCloseMenu} />
      <div
        onClick={openCloseMenu}
        className={`${styles.navbar} ${navAnimation}`}
      >
        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/hot"
        >
          Hot!
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/regular"
        >
          Normalne
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/favourites"
        >
          Ulubione
        </NavLink>
        <NavLink
          activeClassName={styles.activeBtn}
          className={styles.toFormBtn}
          to="/addMeme"
        >
          <FontAwesomeIcon className={styles.plusIcon} icon={faPlus} />
          Dodaj mem
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
