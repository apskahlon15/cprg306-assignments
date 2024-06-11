"use client";
import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <div className="bg-rose-300">
      <h1
        className="text-4xl font-extrabold
      text-black
      "
      >
        Shopping List{" "}
      </h1>
      <ItemList />
    </div>
  );
};

export default Page;
