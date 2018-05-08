import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import Search from './Search/Search';
import styles from './Home.css';
import Logo from '../../img/foodfinder.png'

class Home extends Component {

  render() {
    return(
      <div className={styles.Container}>
        <div className={styles.Main}>
          <img className={styles.Logo} src={Logo}/>
          <Search />
        </div>
      </div>
    )
  }
}

export default Home