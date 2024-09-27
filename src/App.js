import Nosotros from './Pages/Nosotros'
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Servicios from './Pages/Servicios';
import Blog from './Pages/Blog';
import ContactoPage from './Pages/ContactoPage';
import Home from './Pages/Home';
import UnArticulo from './Components/UnArticulo';
import Privacidad from './Pages/Privacidad';


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/Nosotros" element={ <Nosotros /> } />
          <Route path="/Servicios" element={ <Servicios /> } />
          <Route path="/Blog" element={ <Blog /> } />
          <Route path="/Contacto" element={ <ContactoPage /> } />
          <Route path="/Blog/:id" element={ <UnArticulo /> } />
          <Route path='/Privacidad' element={<Privacidad />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
