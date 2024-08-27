import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  return (
      <BrowserRouter>
        <Navbar setSearch={setSearch} search={search} />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
