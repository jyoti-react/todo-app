import React, { useState } from 'react'
import Button from '../Button/Button'
import style from './ListItem.module.css'

function ListItem(props) {
   
    const {item,index,data,handleStrike,...restprops}=props
  
  return (
    <div className={style.dataItem} >
    <p className={data.isStrike? style.line : ""}>{item}</p>
    <div className={style.btnContainer}>
    <Button
     value="Done" 
     style={{borderRadius:"10px",width:"70px",backgroundColor:"rgb(10, 235, 10)"}}
      onClick={handleStrike}
     />
     <Button 
     value="Delete" 
     style={{borderRadius:"10px",width:"70px",backgroundColor:"red"}}
     {...restprops} 
     />
    </div>
  </div>
  )
}

export default ListItem