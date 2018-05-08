import React from 'react';
import styles from './SearchCategories.css'

const searchCategories = (props) => {
  return(
    <div className={styles.Categories}>
      {props.categories.map(category => {
        return <button onClick={props.removeCategory} name={category} className={styles.Category}>{category}</button>
      })}
    </div>
  )
}

export default searchCategories;