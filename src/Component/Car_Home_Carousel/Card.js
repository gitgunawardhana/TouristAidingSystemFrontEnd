import React from 'react'
import styles from './Find.module.css';

const Card = ({image,kind}) => {
  return (
    <div className={styles.card}>
        <img src={image} alt="" />
        <p>{kind}</p>
    </div>
  )
}

export default Card