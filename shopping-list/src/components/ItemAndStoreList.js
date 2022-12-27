import React, { useState } from "react";

const ItemAndStoreList = (props) => {
  const openGrosheris = function () {
    console.log("yep");
  };
  return (
    <div>
      <ul>
        {props.itemAndStoresList
          .map(function (el, index) {
            return el.store;
          })
          .map((ite) => (
            <button onClick={openGrosheris}>{`${ite}`}</button>
          ))}
      </ul>
    </div>
  );
};
export default ItemAndStoreList;
