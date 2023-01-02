
import './App.css';
import Footer from './Navbars/Footer';
import Header from './Navbars/Header';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import {BrowserRouter,Routes,Route,MemoryRouter} from 'react-router-dom'
import AdminPanel from './Pages/AdminPanel';
import Cart from './Pages/Cart';

function App() {
  return (
    <>
     <BrowserRouter>

    <Header/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/AdminPanel' element={<AdminPanel/>}/>
      <Route path='/Cart' element={<Cart/>}/>


    </Routes>
    <Footer/>
 
    </BrowserRouter>
    
    </>
  );
}

export default App;
