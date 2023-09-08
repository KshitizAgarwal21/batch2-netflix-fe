import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Home from "../../Pages/Home";

export default function ProtectedLayout() {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
      navigate("/browse");
    }
  }, []);

  return (
    <div>
      {auth ? (
        <>
          {" "}
          <Outlet />
        </>
      ) : (
        <>
          <Home />
        </>
      )}
    </div>
  );
}
