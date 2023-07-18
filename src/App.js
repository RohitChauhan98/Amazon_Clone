import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header'
import ShoppingCart from './components/pages/ShoppingCart';
import LoginPage from './components/pages/LoginPage';
import history from './components/pages/LoginPage'
import { auth } from './components/firebase'
import { useStateValue } from './components/StateProvider';
import { useEffect } from 'react';


function HeaderWithRoutes() {
  const location = useLocation();
  const showHeader = !location.pathname.includes('/login');

  return showHeader ? <Header /> : null;
}

function App() {

  const [{ user}, dispatch] = useStateValue();

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
    <Router history={history}>
      <HeaderWithRoutes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
