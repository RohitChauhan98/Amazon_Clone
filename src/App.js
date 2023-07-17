import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Header from './components/Header'
import ShoppingCart from './components/pages/ShoppingCart';


function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<ShoppingCart />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
