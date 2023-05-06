import React from 'react'
import styles from './Buttos.module.scss'


export const Button = ({ style, onClick, name }) => {
  return (
      <button 
        onClick={onClick}
        className={`${style}` ? `${styles.button} ${style}` : `${styles.button}`}
      >
          {name}
      </button>
  )
}

