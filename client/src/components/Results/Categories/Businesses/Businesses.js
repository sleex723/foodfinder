import React from 'react';
import styles from './Businesses.css';
import Business from './Business/Business'


const businesses = (props) => {

  return (
    <div className={styles.BusinessesContainer}>
      {props.businesses.map(business => {
        return(
            <Business businessInfo={business}/>
        )
      })}
    </div>
  )
}

export default businesses;