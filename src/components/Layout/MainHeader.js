import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";

function MainHeader() {
  return (
    <Fragment>
      <header className={styles.header}>
          <h2>Great Quotes</h2>
          <nav className={styles.navbar}>
            <ul>
              <li>
                <NavLink activeClassName={styles.active} to="/quotes">All Quotes</NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.active} to="/add-quote">Add Quote</NavLink>
              </li>
            </ul>
          </nav>
      </header>
    </Fragment>
  );
}
export default MainHeader;
