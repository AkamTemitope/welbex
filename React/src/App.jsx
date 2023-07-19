import { Route, Routes } from "react-router-dom";
import { Home, Timer, Welbex } from "./pages";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/welbex" element={<Welbex />} />
    </Routes>
  );
}

export default App;
