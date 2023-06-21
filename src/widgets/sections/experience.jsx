import React from "react";
import { EXPERIENCE } from "../../constant/nav";

export default function Experience() {
  return EXPERIENCE.map((e) => {
    return (
      <>
        <span>
          {e.name}|{e.organization}
        </span>
        <span>
          {e.startTime} - {e.endTime}
        </span>
        <span>{e.tools}</span>
        <span>{e.description}</span>
      </>
    );
  });
}
