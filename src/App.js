import React, { useState } from "react";

import "./App.css";
import Alert from "./components/Alert";
import List from "./components/List";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({ show: true, msg: "alert przykladowy" });
  return (
    <section className="wrapper">
      <form className="form">
        <Alert {...alert} />
        <h3>Todo List</h3>
        <div className="form-control">
          <input
            className="name-input"
            placeholder="Add your item"
            type="text"
          />
          <button type="submit">submit???</button>
        </div>
      </form>
      <div className="list-container">
        <List />
        <button className="clear-btn">Clear List</button>
      </div>
    </section>
  );
}

export default App;
