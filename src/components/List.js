import React from "react";
import { CgRemoveR } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";

const List = () => {
  return (
    <div className="list-items">
      <div className="item">
        <p>pizdziocha</p>
        <div className="btn-container">
          <button className="erase">
            <CgRemoveR />
          </button>
          <button className="edit">
            <FiEdit />
          </button>
        </div>
      </div>
      <div className="item">
        <p>pizdziocha</p>
        <div className="btn-container">
          <button className="erase">
            <CgRemoveR />
          </button>
          <button className="edit">
            <FiEdit />
          </button>
        </div>
      </div>
      <div className="item">
        <p>pizdziocha</p>
        <div className="btn-container">
          <button className="erase">
            <CgRemoveR />
          </button>
          <button className="edit">
            <FiEdit />
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
