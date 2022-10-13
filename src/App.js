import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Hero from './components/Hero';
import Details from './components/Details'
import Footer from './components/Footer'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  return (
    
      <div className="App">
      <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Hero/>}></Route>
      </Routes>
      <Routes>
        <Route path='/' element={<Details/>}></Route>
      </Routes>
      <Routes>
    <Route path='/Login' element={<Login/>}>
    
   </Route>
    </Routes>
    <Routes>
    <Route path='/SignUp' element={<SignUp/>}>
    
   </Route>
    </Routes>

      <Footer></Footer>
     </Router>
      
    </div>
   
  
    
  );
}

export default App;
