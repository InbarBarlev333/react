import React, { useState } from "react";

const AddItem = (props) => {
  const [enteredStore, setenteredStore] = useState("");
  const [enteredItem, setenteredItem] = useState("");

  const SubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredItem, enteredStore);

    const ItemToSend = {
      store: enteredStore,
      item: enteredItem,
    };

    console.log(ItemToSend);
    console.log(props.AddItemHandler);
    props.AddItemHandler(ItemToSend);
    setenteredItem("");
    setenteredStore("");
  };

  const storenameChangeHandler = (event) => {
    setenteredStore(event.target.value);
  };

  const itemChangeHandler = (event) => {
    setenteredItem(event.target.value);
  };
  return (
    <form onSubmit={SubmitHandler}>
      <h1>Add Item</h1>
      <label htmlFor="store">store</label>
      <input
        id="store"
        type="text"
        value={enteredStore}
        onChange={storenameChangeHandler}
      />

      <label htmlFor="item">item</label>
      <input
        id="item"
        type="text"
        value={enteredItem}
        onChange={itemChangeHandler}
      />

      <button type="submit">Add Item to shopping list!</button>
    </form>
  );
};
export default AddItem;
