import React from "react";


const ItemListContainer = ({ greeting }) => {
  return (
    <div
      className="greeting"
      style={{
        fontSize: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <p>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
