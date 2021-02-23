import React from "react";
import { CgRemoveR } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";

const List = ({ list, removeItem, editItem }) => {
  return (
    <div className="list-items">
      {list.map((li) => {
        const { id, title } = li;
        return (
          <div key={id} className="item">
            <p>{title}</p>
            <div className="btn-container">
              <button className="erase" onClick={() => removeItem(id)}>
                <CgRemoveR />
              </button>
              <button className="edit" onClick={() => editItem(id)}>
                <FiEdit />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
