import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
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
          <Navigate to={"/"} />
        </>
      )}
    </div>
  );
}
