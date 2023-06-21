import React from "react";
import { NAV } from "../constant/nav.jsx";
import "../css/nav.css";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import avatar from "../assets/images/avatar.jpeg";

export default function NavBar({ ObserverRefs }) {
  const [visibleKey, setVisibleKey] = useState(0);
  const observers = useRef([]);

  const onClick = (item, key) => {
    setVisibleKey(key);
  };

  const observerCallback = async (e, key) => {
    if (e.length && e[0].isIntersecting) {
      setVisibleKey(key);
    }
  };

  return (
    <div className="nav bg-theme-brown">
      <img src={avatar} className="avatar" />
      <span className="name">楊文忻</span>
      <ul class="bg-theme-brown">
        {NAV.map((item) => {
          return (
            <li>
              <a href={item.link}>{item.word}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
