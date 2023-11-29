import React from 'react'
import styles from './styles.module.css'
import logo from './gaurdianslogo.svg'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { default as Button } from './Button'

export const Box = ({ text }) => {
  return <div className={styles.home}>Example Component: {text}</div>
}

export const Navigation = ({ title, navigation, logo, active, avatar }) => {
  return (
    <div className={styles.navigation_white}>
      <div className={`${styles.dflex} ${styles.nav_brand}`}>
        <img src={logo} />

        <h1
          className={`${styles.capitalize} ${styles.fmmd} ${styles.mya} ${styles.ms_2} ${styles.nav_color}`}
        >
          {title}
        </h1>
      </div>

      <div className={`${styles.centered} ${styles.ms_3} `}>
        {navigation?.map((item) => (
          <div
            className={`${active == item ? styles.menu_active : styles.menu}  ${
              styles.pad_btn
            } ${styles.centered}`}
          >
            <a
              href={`/${item}`}
              style={{ textDecoration: 'none' }}
              className={styles.text_col}
            >
              <p
                className={`${styles.fssm} ${styles.centered}`}
                style={{ margin: '0' }}
              >
                {item}
              </p>
            </a>
          </div>
        ))}
      </div>

      <div className={styles.mya}>
        <div className={styles.mya} style={{ position: 'relative' }}>
          <img
            style={{ width: '3.2vw', height: '7vh', borderRadius: '50vw' }}
            className={styles.mya}
            src={avatar}
          ></img>
          <div className={styles.active_indication}></div>
        </div>
      </div>
    </div>
  )
}
