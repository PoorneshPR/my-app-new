import React from "react";
import Header from './Header.js'
import Content from "./Content.js";
import Footer from "./footer.js";
import { useState } from "react";

function App() {
  const [itemspropertiess, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Practice Coding",
    },
    {
      id: 2,
      checked: true,
      item: "Play Cricket",
    },
    {
      id: 3,
      checked: false,
      item: "Play football",
    },
    {
      id: 4,
      checked: false,
      item: "Learn Technology",
    },
  ]);
  const handleCheck = (id) => {
    console.log(id);
    const listItems = itemspropertiess.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };
  const handleDelete = (id) => {
    console.log(id);
    const listItems = itemspropertiess.filter((item) => item.id != id);
    setItems(listItems);
  };
  const name="Poornesh";
  return (
    <div >
      <Header props={"Sample"}/>
      <Content
      items={itemspropertiess}
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
