import React from "react";

export const List = ({ data }) => {

  return (
    <div>
      {data.map((x,i) => {
        return <li key={i}>{x}</li>;
      })}
    </div>
  );
};
