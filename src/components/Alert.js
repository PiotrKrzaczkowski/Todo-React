import React, { useEffect } from "react";

const Alert = ({ msg, type, list, show }) => {
  useEffect(() => {
    const timeOut = setTimeout;
  }, [list]);
  return <p className={`alert-txt ${type}`}>{msg}</p>;
};

export default Alert;
