import React from "react";
import style from "./Modal.module.css";
import Button from "../Button/Button";
function Modal(props) {
  const { getvalue, addItem, show, showmodal, value } = props;

  return (
    <div className={style.modalContainer} style={show}>
      <p className={style.cross} onClick={() => showmodal(false)}>
        &#x2715;
      </p>
      <input
        type="text"
        className={style.input}
        placeholder="Enter something here..."
        onChange={getvalue}
        value={value}
      ></input>
      <Button
        value="ADD"
        style={{ width: "100%", backgroundColor: "rgb(32, 181, 245)" }}
        onClick={addItem}
      />
      <Button
        value="Cancel"
        style={{
          width: "100%",
          backgroundColor: "transparent",
          color: "black",
          border: "2px solid skyblue",
        }}
        onClick={() => showmodal(false)}
      />
    </div>
  );
}

export default Modal;
