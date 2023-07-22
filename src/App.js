import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header'
import ShoppingCart from './components/pages/ShoppingCart';
import LoginPage from './components/pages/LoginPage';
import { auth } from './components/firebase'
import { useStateValue } from './components/StateProvider';
import { useEffect } from 'react';
import Payment from './components/pages/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'


const stripePromise = loadStripe("pk_test_51NVTKUSIPnLGVNrcewzj1KfFpaFkSCVSgsFJRifK5Dx34EKNwnWttiDLHZHd6BwG2qNOZ2MtDwTtYyMOyggRj9JB00MdF2jdQT");

function HeaderWithRoutes() {
  const location = useLocation();
  const showHeader = !location.pathname.includes('/login' || '/payment');

  return showHeader ? <Header /> : null;
}

function App() {

  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser)
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])



  return (
    <Router >
      <HeaderWithRoutes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/payment" element={<Elements stripe={stripePromise}><Payment /></Elements>} />
      </Routes>
    </Router>
  );
}

export default App;
