import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Landing from './Components'
import LandingPage from './Components/Home/LandingPage'
import About from './Components/miscellaneous/About/About';
import Contact from './Components/miscellaneous/Contact/Contact';
import Footer from './Components/miscellaneous/Footer/Footer';
// import About from './Components/miscellaneous/About/About';
// import Contact from './Components/miscellaneous/Contact/Contact';
import Header from './Components/miscellaneous/Header/Header';
import ProductCard from './Components/Product/ProductCard';
import Women from './Components/Product/Women';
import Men from './Components/Product/Men';
import Kids from './Components/Product/Kid';

import Login from './Components/miscellaneous/Login/Login';
import Register from './Components/miscellaneous/Register/Register';
import { useEffect } from 'react';
import './store';
import store from './store';
import { loadUser } from './Action/userAction';
import { useSelector } from 'react-redux';
import Profile from './Components/User/Profile';

// import Men from './Components/Product/Men';
// import Kids from './Components/Product/Kid';
// import Home from './Home';





function App() {
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(()=>{
  store.dispatch(loadUser());
  },[])
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<ProductCard/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={isAuthenticated ? <Profile/> : <Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="/loader" element={<Loader/>}/> */}
    </Routes>
    </BrowserRouter>
   
      
      {/* <Home/> */}
      {/* <About/> */}
      <Footer/>
      {/* <Contact/> */}
      

    </div>
  );
}

export default App;
