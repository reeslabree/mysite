import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "../styles/components/Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref>
        <a className={styles.nav_logo} onClick={() => setOpen(false)}>
          reeslabree.com
        </a>
      </Link>

      <div onClick={handleClick} className={styles.nav_icon}>
        {open ? <FiX /> : <FiMenu />}
      </div>

      <ul className={open ? styles.nav_links_active : styles.nav_links}>
        <li className={styles.nav_item}>
          <Link href="/projects" passHref>
            <a className={styles.nav_link} onClick={closeMenu}>
              Projects
            </a>
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="/blog" passHref>
            <a className={styles.nav_link} onClick={closeMenu}>
              Blog
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
