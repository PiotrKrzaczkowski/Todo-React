import React, { useState } from "react";

import "./App.css";
import Alert from "./components/Alert";
import List from "./components/List";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const removeItem = (id) => {
    setList(list.filter((i) => i.id !== id));
    setAlert({
      show: true,
      type: "alert-txt-red",
      msg: "Item removed from list",
    });
    setIsEditing(false);
    setName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setAlert({
        show: true,
        msg: "Type something!",
        type: "alert-txt-red",
      });
    } else if (name && isEditing) {
      setList(
        list.map((i) => {
          if (i.id === editId) {
            return { ...i, title: name };
          }
          return i;
        })
      );
      setAlert({ show: true, msg: "Item Edited", type: "alert-txt-green" });
      setIsEditing(false);
      setEditId(null);
    } else {
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

  const clearList = () => {
    setAlert({ show: true, msg: "All list is empty", type: "alert-txt-red" });
    setName("");
    setList([]);
  };

  const editItem = (id) => {
    const editingItem = list.find((i) => i.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(editingItem.title);
  };

  const resetAlert = () => {
    setAlert({ show: false, msg: "", type: "" });
  };

  return (
    <section className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <Alert {...alert} list={list} resetAlert={resetAlert} />
        <h3>Todo List</h3>
        <div className="form-control">
          <input
            className="name-input"
            placeholder="Add your item"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            {isEditing ? "Edit" : "Add Todo"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="list-container">
          <List list={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear List
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
