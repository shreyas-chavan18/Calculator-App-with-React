import React from 'react'
import Styles from "./Display.module.css"

function Display({displayVal}) {
  return <input className={Styles.display} type="text" value={displayVal} readOnly/>;
}

export default Display