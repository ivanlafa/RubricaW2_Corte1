import React, { useEffect, useState } from "react";
import { changeData } from "../helpers/loadData";
import "../styles/LikeButton.css";

export const LikeButton = ({ checked = false, id }) => {
  const [check, setCheck] = useState(checked);
  const [fill, setFill] = useState(check ? "yellow" : "none");

  useEffect(() => {
      changeData(id, check);
  }, [check, id]);

  return (
    <button className="star" onClick={ () => { setCheck( check ? false : true ); setFill( check ? "none" : "black" ); console.log(fill); } }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill={fill}
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    </button>
  );
};
