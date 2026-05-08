import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Signupcomponent from './components/Signup';
import Signincomponet from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* navbar goes here  */}
        <Navbar />
        <header className="App-header bg-info">
          <marquee behavior="scroll" direction="left" scrollamount="5">

            <h1 className="hero-title" style={{ color: "rgb(16, 2, 209)" }}>Premium Agricultural Farm Equipments</h1>
          </marquee>

          <div className="header-overlay">
            <marquee behavior="scroll" direction="left" scrollamount="5">

              <p className="tagline animate-text">Durable. Efficient. Built for modern farming.</p>
            </marquee>
          </div>
        </header>
        <nav>
          <Link to="/Signup" className='btn btn-danger btn-sm m-2' >Signup</Link>
          <Link to="/Signin" className='btn btn-danger btn-sm m-2'>Signin</Link>
          <Link to="/Addproduct" className='btn btn-danger btn-sm m-2'>Addproduct</Link>
          <Link to="/" className='btn btn-danger btn-sm m-2'> Getproduct</Link>

        </nav>
        {/* routes  */}
        <Routes>
          <Route path="/" element={<Getproduct />} />
          <Route path="/Signup" element={<Signupcomponent />} />
          <Route path="/Signin" element={<Signincomponet />} />
          <Route path="/Addproduct" element={<Addproduct />} />
          <Route path="/makepayment" element={<Mpesapayment />} />
          <Route path='/chatbot' element={<Chatbot/>}/>
          


        </Routes>

      </div>
      <Chatbot/>
    </BrowserRouter>
  );
}

export default App;
