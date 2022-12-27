import { React, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddItem from "./components/AddItem";
import ItemAndStoreList from "./components/ItemAndStoreList";

function App() {
  const [listOfItems, setListOfItems] = useState([]);

  const AddItemHandlerr = (sentItem) => {
    setListOfItems((preventList) => {
      return [...preventList, sentItem];
    });
  };

  /*const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];*/

  console.log(` from app ${listOfItems}`);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Shopping List</code>
        </p>
        <a>
          <AddItem AddItemHandler={AddItemHandlerr} />
          <ItemAndStoreList itemAndStoresList={listOfItems} />
        </a>
      </header>
    </div>
  );
}

export default App;
