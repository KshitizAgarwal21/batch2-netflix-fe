import React from "react";
import logo from "../../assets/netflixlogo-removebg-preview.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import "./authheader.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function AuthHeader() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <header>
        <div className="authfirst">
          <img src={logo} className="authlogo"></img>
          <div className="authaction">
            <ul className="authmenu">
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "20%",
          }}
        >
          <div className="authsecond">
            <SearchIcon style={{ color: "#fff", height: "50px" }} />
            <p>Profile name</p>
            <NotificationsIcon style={{ height: "50px" }} />
            <select className="myselect">
              <option>Hello</option>
            </select>
          </div>
        </div>
      </header>
    </>
  );
}
