import React, { useEffect } from "react";

const Alert = ({ msg, type, list, resetAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      resetAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`alert-txt ${type}`}>{msg}</p>;
};

export default Alert;
