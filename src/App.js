import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Signupcomponent from './components/Signup';
import Signincomponet from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* navbar goes here  */}
      <Navbar/>
      <header className="App-header">
        
        <h1>Premium Agricultural Farm Equipments</h1>
      </header>
      <nav>
        <Link to="/Signup" className='btn btn-danger btn-sm m-2' >Signup</Link>
        <Link to="/Signin" className='btn btn-danger btn-sm m-2'>Signin</Link>
        <Link to="/Addproduct" className='btn btn-danger btn-sm m-2'>Addproduct</Link>
        <Link to="/" className='btn btn-danger btn-sm m-2'> Getproduct</Link>
        
      </nav>
      {/* routes  */}
      <Routes>
        <Route path="/" element={<Getproduct/>}/>
        <Route path="/Signup" element={<Signupcomponent/>}/>
        <Route path="/Signin" element={<Signincomponet/>}/>
        <Route path="/Addproduct" element={<Addproduct/>}/>
        <Route path="/makepayment" element={<Mpesapayment/>}/>

        

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
