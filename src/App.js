import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Pages/Home";
import ProtectedLayout from "./Components/ProtectedLayout/ProtectedLayout";
import Main from "./Pages/Main/Main";
import PlayMovie from "./Pages/PlayMovie/PlayMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedLayout />}>
            <Route path="/browse" element={<Main />} />
            <Route path="/play/:id" element={<PlayMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
