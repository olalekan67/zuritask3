import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CardProvider } from './component/context/CardContext';
import Home from './component/Home';
import PlacesToStay from './component/PlacesToSTay';
import NavBar from './component/NavBar';
import Footer from './component/assets/Footer';

function App() {
  return (
    <CardProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/places' element={<PlacesToStay />} />
        </Routes>
        <Footer />
      </Router>
    </CardProvider>
      
    
  );
}

export default App;
