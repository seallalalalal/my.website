import React from "react";
import "../css/education.css";
export default function Education(props) {
  return (
    <>
      {props.value.map((e) => {
        return (
          <div key={e.degree} className="education">
            <span>{e.degree}</span>
            <span>{e.school}</span>
            <span>
              {e.startTime} - {e.endTime}
            </span>
          </div>
        );
      })}
    </>
  );
}
