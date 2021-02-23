import React, { useState } from "react";

import "./App.css";
import Alert from "./components/Alert";
import List from "./components/List";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: true,
    msg: "alert przykladowy",
    type: "",
  });

  const removeItem = (id) => {
    setList(list.filter((i) => i.id !== id));
    setAlert({
      show: true,
      type: "alert-txt-red",
      msg: "Item removed from list",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
    } else if (name) {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      setAlert({
        show: true,
        type: "alert-txt-green",
        msg: "Item added to list",
      });
    }
  };

  return (
    <section className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <Alert {...alert} list={list} />
        <h3>Todo List</h3>
        <div className="form-control">
          <input
            className="name-input"
            placeholder="Add your item"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add Todo</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="list-container">
          <List list={list} removeItem={removeItem} />
          <button className="clear-btn">Clear List</button>
        </div>
      )}
    </section>
  );
}

export default App;
