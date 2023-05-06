import React from 'react'
import styles from './MainPage.module.scss'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export const MainPage = () => {
  return (
    <div className={styles.root}>
        <div className={styles.head}>
          <h1 className={styles.title}>Здравствуйте</h1>
          <p className={styles.suptitle}>сегодня вы узнаете про сплавы, как их получают, где используют и много всего интересного</p>
        </div>
        <div className={styles.buttons}>

          <Link to='/firstPage'>
            <Button name='Глава I'/>
          </Link>
          <Link to='/SecondPage'>
          <Button name={'Глава II'}/>
          </Link>
        </div>
    </div>
  )
}
