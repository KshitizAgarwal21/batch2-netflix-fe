import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./login.css";
export default function Login() {
  const [persist, setPersist] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async () => {
    const resp = await axios.post(
      "http://localhost:8080/login/loginapi",
      formData
    );

    if (resp.status === 200) {
      if (persist) {
        localStorage.setItem("token", resp.data.token);
        navigate("/browse");
      } else {
        sessionStorage.setItem("token", resp.data.token);
        navigate("/browse");
      }
    }

    //api call
    //check resp
    //if success
    //if persist
    //localstorage set
    //else sessionstorage set
  };
  return (
    <div>
      {" "}
      <div className="App">
        <div className="gradient">
          <Header />
        </div>

        <div className="login-box">
          <div style={{ width: "90%", margin: "0 auto" }}>
            <h1 style={{ color: "#fff" }}>Sign In</h1>
            <input
              type="email"
              className="nf-input"
              placeholder="Email"
              onChange={handleChange}
              name="username"
            ></input>
            <br />
            <br />

            <input
              type="password"
              className="nf-input"
              placeholder="Password"
              onChange={handleChange}
              name="password"
            ></input>
            <br />
            <br />
            <button className="nf-login" onClick={handleSubmit}>
              Sign in
            </button>

            <div className="extras">
              <div>
                <input
                  type="checkbox"
                  onChange={() => {
                    setPersist(!persist);
                  }}
                ></input>
                Remember me
              </div>

              <span>Need Help?</span>
            </div>
            <br />
            <p style={{ color: "#fff" }}>
              New to Netflix? Sign up now. This page is protected by Google
              reCAPTCHA to ensure you're not a bot. Learn more.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
