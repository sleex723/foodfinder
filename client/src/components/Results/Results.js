import React, { Component } from 'react';
import styles from './Results.css';
import Search from '../Home/Search/Search';
import Logo from '../../img/foodfinder.png';

class Results extends Component {
  state = {

  }

  render() {
    return(
      <div className={styles.Container}>
        <div className={styles.Header}>
          <img className={styles.Logo} src={Logo}/>
        </div>
      </div>
    )
  }
}

export default Results;