import React, { useState } from "react";
import style from "./Todo.module.css";
import Button from "../Component/Button/Button";
import ListItem from "../Component/ListItem/ListItem";
import noItem from "../images/noitems.png";
import Modal from "../Component/modal/Modal";
function Todo() {
  const [item, setItem] = useState({
    userItem: "",
  });
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function handleDone(index) {
    const newData = [...data];
    newData[index].isStrike = true;
    setData(newData);
  }

  function handleInputValue(e) {
    setItem({ userItem: e.target.value });
  }

  function handleShowModal(value) {
    setShowModal(value);
  }

  function handleAddItem() {
    if(item.userItem.trim()!==""){
      setData([...data, item]);
      setItem({ userItem: "" });
      setShowModal(false)
    }else{
      alert("field must be filled")
    }
    
  }

  function handleDelete(itemIndex) {
    setData(data.filter((item, index) => index !== itemIndex));
  }
  return (
    <div>
      <div
        className={style.container}
        style={showModal ? { filter: "blur(15px)" } : {}}
      >
        <div className={style.main}>
          <div className={style.innerTopContainer}>
            <h1>TODO APP</h1>
            <div className={style.inputContainer}>
              <Button
                value="ADD"
                style={{ width: "100%", backgroundColor: "rgb(32, 181, 245)" }}
                onClick={() => handleShowModal(true)}
              />
            </div>
            <h3>List Of Items</h3>
            </div>
            <div className={style.dataMainContainer}>
            
              <div className={style.dataItemContainer}>
                {data.length !== 0 ? (
                  data.map((item, index) => (
                    <ListItem
                      item={item.userItem}
                      key={index}
                      data={item}
                      handleStrike={() => handleDone(index)}
                      onClick={() => handleDelete(index)}
                    />
                  ))
                ) : (
                  <div className={style.noItemContainer}>
                    <div className={style.image}>
                      <img src={noItem} alt="noitem"></img>
                    </div>
                    <p className={style.noItemText}>No Items Added</p>
                  </div>
                )}
              </div>
            </div>
         
        </div>
      </div>
      <Modal
        show={showModal ? { display: "block" } : { display: "none" }}
        getvalue={handleInputValue}
        addItem={handleAddItem}
        showmodal={handleShowModal}
        value={item.userItem}
      ></Modal>
    </div>
  );
}

export default Todo;
