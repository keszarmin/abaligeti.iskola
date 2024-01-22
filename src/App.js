import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Document from "./pages/document/Document";
import Aktualitasok from "./pages/aktualitasok/Aktualitasok";
import Galeria from "./pages/galery/Galeria";
import 'tailwindcss/tailwind.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/abaligeti.iskola" element={<Home />} />
          <Route path="/abaligeti.iskola/contact" element={<Contact />} /> 
          <Route path="/abaligeti.iskola/about" element={<About />} />
          <Route path="/abaligeti.iskola/document" element={<Document /> } />
          <Route path="/abaligeti.iskola/aktualitasok" element={<Aktualitasok />} />
          <Route path="/abaligeti.iskola/galeria" element={<Galeria />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
