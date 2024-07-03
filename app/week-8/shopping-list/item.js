"use client";

import React from "react";

const Item = ({ name, quantity, category, onSelect, className }) => {
  return (
    <li className={`list-none w-35 ${className}`} onClick={onSelect}>
      <div
        className={`flex items-center justify-between px-4 py-3 bg-rose-400 w-1/3 m-3 hover:bg-rose-700 hover:text-white ${className}`}
      >
        <div>
          <h3 className="text-xl font-bold text-black">{name}</h3>
          <p className="text-black font-medium">
            Buy {quantity} in {category}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Item;
