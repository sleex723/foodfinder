import React, { Component } from 'react';
import styles from './Results.css';
import Search from '../Home/Search/Search';
import Logo from '../../img/foodfinder.png';
import Categories from './Categories/Categories';

class Results extends Component {

  render() {
    return(
      <div className={styles.Container}>
        <div className={styles.Header}>
          <img onClick={() => this.props.view('home')} className={styles.Logo} src={Logo}/>
        </div>
        <Categories categories={this.props.categories}/>
      </div>
    )
  }
}

export default Results;