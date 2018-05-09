import React from 'react';
import styles from './Business.css';
import { Image } from 'react-bootstrap'

const business = (props) => {
  let URL = {
    photo: `https://yelp.com/biz_photos/${props.businessInfo.alias}`,
    business: `https://yelp.com/biz/${props.businessInfo.alias}`,
    location: `https://maps.google.com/maps?q=${props.businessInfo.location.address1}+${props.businessInfo.location.address2}+${props.businessInfo.location.city}+${props.businessInfo.location.state}+${props.businessInfo.location.zip_code}`
  }
  let stars = null;
  if (props.businessInfo.rating > 0 && props.businessInfo.rating <= 1.49) {
    stars = <div className={styles.Stars}>
      <span className={styles.rating}>{props.businessInfo.rating} </span>
			<span class="glyphicon glyphicon-star" />
      <span class="glyphicon glyphicon-star-empty" />
      <span class="glyphicon glyphicon-star-empty" />
			<span class="glyphicon glyphicon-star-empty" />
			<span class="glyphicon glyphicon-star-empty" />
		</div>;
  }
  if (props.businessInfo.rating > 1.49 && props.businessInfo.rating <= 2.49) {
    stars = (
      <div className={styles.Stars}>
        <span className={styles.rating}>{props.businessInfo.rating }</span>
        <span class="glyphicon glyphicon-star" />
        <span class="glyphicon glyphicon-star" />
        <span class="glyphicon glyphicon-star-empty" />
        <span class="glyphicon glyphicon-star-empty" />
        <span class="glyphicon glyphicon-star-empty" />
      </div>
    )
  }
  if (props.businessInfo.rating > 2.49 && props.businessInfo.rating <= 3.49) {
    stars = <div className={styles.Stars}>
      <span className={styles.rating}>{props.businessInfo.rating} </span>
			<span class="glyphicon glyphicon-star" />
			<span class="glyphicon glyphicon-star" />
			<span class="glyphicon glyphicon-star" />
			<span class="glyphicon glyphicon-star-empty" />
			<span class="glyphicon glyphicon-star-empty" />
		</div>;
  }
  if (props.businessInfo.rating > 3.49 && props.businessInfo.rating <= 4) {
    stars = <div className={styles.Stars}>
      <span className={styles.rating}>{props.businessInfo.rating} </span>
			<span class="glyphicon glyphicon-star" />
			<span class="glyphicon glyphicon-star" />
			<span class="glyphicon glyphicon-star" />
			<span class="glyphicon glyphicon-star" />
			<span class="glyphicon glyphicon-star-empty" />
		</div>;
  }
  if (props.businessInfo.rating > 4 && props.businessInfo.rating <= 5) {
    stars = <div className={styles.Stars}>
      <span className={styles.rating}>{props.businessInfo.rating} </span>
				<span class="glyphicon glyphicon-star" />
				<span class="glyphicon glyphicon-star" />
				<span class="glyphicon glyphicon-star" />
				<span class="glyphicon glyphicon-star" />
				<span class="glyphicon glyphicon-star" />
			</div>;
  }
  return(
    <div className={styles.BusinessContainer}>
      <div className={styles.BusinessName}>
        <a href={URL.business}>{props.businessInfo.name}</a>
      </div>
      <div className={styles.ImgContainer}>
        <a href={URL.photo}>
          <img className={styles.BusinessImg}src={props.businessInfo.image_url} rounded />
        </a>
      </div>
      <div className={styles.Price}>{props.businessInfo.price}</div>
      <div className={styles.Phone}>{props.businessInfo.phone}</div>
      {stars}
      <a href={URL.business}><div className={styles.ReviewCount}>{props.businessInfo.review_count} Reviews</div></a>
      <a href={URL.location}>
        <div className={styles.Address}>{props.businessInfo.location.address1}</div>
        <div className={styles.Address}>{props.businessInfo.location.address2}</div>
        <div className={styles.Address}>{props.businessInfo.location.city}, {props.businessInfo.location.state} {props.businessInfo.location.zip_code}</div>
      </a>
    </div>
  )
}

export default business;