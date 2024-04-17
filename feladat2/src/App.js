import { Routes, Route } from "react-router-dom";
import Kezdolap from "./pages/Kezdolap";
import Kilatok from "./pages/Kilatok";
import Kepek from "./pages/Kepek";

function App() {

  return (
    <div>
      <h1 className="text-center">Balatoni kilátók</h1>
      <Routes>
        <Route path="/" element={<Kezdolap />} />
        <Route path="/kilatok" element={<Kilatok />} />
        <Route path="/kepek" element={<Kepek />} />
      </Routes>
      <Footer />
    </div>
  );
}


function Footer() {
  return (
    <footer className="bg-secondary text-center" >
      <p className="text-white">Készítette: Gombos-Katona Anett</p>
    </footer>
  )
}

export default App;
