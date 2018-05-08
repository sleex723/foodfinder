import React from 'react';
import styles from './Business.css';
import { Image } from 'react-bootstrap'

const business = (props) => {
  return(
    <div className={styles.BusinessContainer}>
      {console.log(props)}
      <div className={styles.BusinessName}>
        {props.businessInfo.name}
      </div>
      <div className={styles.ImgContainer}>
        <img className={styles.BusinessImg}src={props.businessInfo.image_url} rounded />
      </div>
    </div>
  )
}

export default business;