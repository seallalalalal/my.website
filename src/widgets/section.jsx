import React from "react";

export default function Section(props) {
  console.log(props.title);
  return (
    <div className="section">
      <span className="title">{props.title}</span>
      {props.children}
    </div>
  );
}
