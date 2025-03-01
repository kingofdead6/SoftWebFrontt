import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Shared/NavBar'; 
import Home from './pages/Home/page'; 
import Footer from './components/Shared/Footer';
import AboutUs from './pages/About/page';
import Service from './pages/Services/page';
import Contact from './pages/Contact/page';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;

      