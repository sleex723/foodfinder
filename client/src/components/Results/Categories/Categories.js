import React from 'react';
import styles from './Categories.css';
import Businesses from './Businesses/Businesses'

const categories = (props) => {
  return(
    <div className={styles.CategoriesContainer}>
      <div>
        {props.categories.data.map( category => {
          return(<div className={styles.CategoryContainer}>
            <div className={styles.CategoryName}>
              {category.category}
            </div>
            <Businesses businesses={category.restaurants.businesses} />
          </div>)
        })}
      </div>
    </div>
  )
}

export default categories