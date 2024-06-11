"use client";
import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="list-none w-35">
      <div className="flex items-center justify-between px-4 py-3 bg-rose-400 max-w-sm m-3">
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
