import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
export default function Footer() {
  return (
    <footer>
      <p>Questions? Call 000-800-919-1694</p>
      <div className="footer-content">
        <div style={{ width: "33%" }}>
          <p>FAQ</p>
          <p>Media Centre</p>
          <p>Ways to Watch</p>
          <p>Cookie Preferences</p>
          <p>Speed Test</p>
        </div>
        <div style={{ width: "33%" }}>
          <p>FAQ</p>
          <p>Media Centre</p>
          <p>Ways to Watch</p>
          <p>Cookie Preferences</p>
          <p>Speed Test</p>
        </div>
        <div style={{ width: "33%" }}>
          <p>FAQ</p>
          <p>Media Centre</p>
          <p>Ways to Watch</p>
          <p>Cookie Preferences</p>
          <p>Speed Test</p>
        </div>
      </div>
      <div className="icon" style={{ marginTop: "50px" }}>
        <LanguageIcon />
        <select className="lang-select">
          <option>English</option>
          <option> Hindi</option>
        </select>
      </div>

      <p className="copyright">Netflix India</p>
    </footer>
  );
}
