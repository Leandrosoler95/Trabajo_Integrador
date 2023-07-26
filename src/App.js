
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Ventas from "./pages/Ventas";
import Contacto from "./pages/Contacto";
import NoPage from "./pages/NoPage";
import SobreNosotros from "./pages/SobreNosotros";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Layout/><Footer/></>}>
            <Route index element={<Home/>} />
            <Route path="ventas" element={<Ventas/>} />
            <Route path="contacto" element={<Contacto/>} />
            <Route path="sobre-nosotros" element={<SobreNosotros/>} />
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
