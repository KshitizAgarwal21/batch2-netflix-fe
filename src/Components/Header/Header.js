import React from "react";
import logo from "../../assets/netflixlogo-removebg-preview.png";
import LanguageIcon from "@mui/icons-material/Language";
import "./header.css";
export default function Header() {
  return (
    <header>
      <img src={logo} className="logo"></img>
      <div className="action">
        <div className="icon">
          <LanguageIcon />
          <select className="lang-select">
            <option>English</option>
            <option> Hindi</option>
          </select>
        </div>

        <button className="signin">Sign in</button>
      </div>
    </header>
  );
}
