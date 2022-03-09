import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./routes/detail.route";
import Main from "./routes/main.route";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
