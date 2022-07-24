import React from 'react'
import styles from './Find.module.css';

const Card = ({ image, kind }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <p className={styles.paragraph_Card}>{kind}</p>
    </div>
  )
}

export default Card