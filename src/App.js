import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
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
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/document" element={<Document /> } />
          <Route path="/aktualitasok" element={<Aktualitasok />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
