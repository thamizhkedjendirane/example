// src/Button.js
import React from 'react';
import styles from './styles.module.css'
const Button = ({ label }) => {
  return <button className={styles.home}>{label}</button>;
};

export default Button;
