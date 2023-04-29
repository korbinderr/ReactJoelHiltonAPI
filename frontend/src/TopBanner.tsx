import React from 'react';
import styles from './TopBanner.module.css';
import { Link, BrowserRouter, Route } from 'react-router-dom';

function TopBanner(props: any) {
  return (
    <header className={styles.div}>
      <div className="row">
        <div className="col-4">
          <img src="./camera.jpg" alt="companylogo" />
        </div>
        <div className="col align-self-center text-start">
          <h2>{props.title}</h2>
        </div>
        <nav className="col-2 align-self-center">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/podcast">Podcast</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default TopBanner;
