import React from "react";
import "../css/about.css";
import github from "../assets/icons/github.svg";
import phone from "../assets/icons/phone.svg";
import mail from "../assets/icons/mail.svg";
import website from "../assets/icons/website.svg";

export default function About() {
  return (
    <div className="about">
      <ul className="p-2.5 flex flex-col ">
        <li>
          <img src={phone} />
          0902-177-060
        </li>
        <li>
          <img src={mail} />
          wenxin.yang.122000@gmail.com
        </li>
        <li>
          <img src={website} />
          https://seallalalalal.github.io/
        </li>
        <li>
          <img src={github} />
          https://github.com/seallalalalal
        </li>
      </ul>
    </div>
  );
}
