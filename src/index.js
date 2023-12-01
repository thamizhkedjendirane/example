import React from 'react'
import styles from './styles.module.css'
import logo from './gaurdianslogo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
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

export const CommonContainer = ({ children, avatar }) => {
  return <div className={styles.common_containers}>{children}</div>
}

export const Card = ({
  children,
  avatar,
  username,
  date,
  shortdiscription,
  title,
  discription
}) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.Card_header} ${styles.pad_cm} my-1`}>
        <img src={avatar} />
        <div className={`${styles.mya} ${styles.ms_2}`}>
          <p
            style={{ margin: '0' }}
            className={`${styles.fmd} ${styles.username}`}
          >
            {username}
          </p>
          <p
            style={{ margin: '0' }}
            className={`${styles.fmd} ${styles.f_secondary}`}
          >
            {date}
          </p>
        </div>
      </div>
      <div className={` ${styles.Card_body}`}>
        <div className={styles.Card_img}>
          <img src={avatar} className='w-100' />
        </div>
        <div className={styles.pad_cm}>
          <p className={`${styles.fmd} ${styles.f_secondary} m-0`}>
            {shortdiscription}
          </p>
          <h4 className={`${styles.flg} m-0`}>{title}</h4>
          <p className={`${styles.fmd} ${styles.f_secondary} mt-1`}>
            {discription}
          </p>
        </div>
      </div>
    </div>
  )
}

export const FlexContainer = ({ children }) => {
  return (
    <div className='d-flex flex-wrap justify-content-center'>{children}</div>
  )
}

export const GuardiansAvatar = ({ avatar }) => {
  return (
    <div className={styles.mya} style={{ position: 'relative' }}>
      <img
        style={{ width: '3.2vw', height: '7vh', borderRadius: '50vw' }}
        className={styles.mya}
        src={avatar}
      ></img>
      <div className={styles.active_indication}></div>
    </div>
  )
}
