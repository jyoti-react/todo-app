import React from 'react'
import style from './Button.module.css'
function Button(props) {
     const {value,...restprops}=props

  return (
    <div>
        <button {...restprops} className={style.button}>{value}</button>
    </div>
  )
}

export default Button