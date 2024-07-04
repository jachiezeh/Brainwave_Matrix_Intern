
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFlaskVial} from '@fortawesome/free-solid-svg-icons';
import {faGears} from '@fortawesome/free-solid-svg-icons';

const collectible_banner = <FontAwesomeIcon icon={faFlaskVial} size='8x'/>
const utility_banner = <FontAwesomeIcon icon={faGears} size='8x'/>

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/collectibles' element={<ShopCategory banner={collectible_banner} category="Collectible"/>}/>
        <Route path='/utilities' element={<ShopCategory banner={utility_banner} category="Utility"/>}/>

        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route> 
      
        <Route path='/cart' element={<Cart/>}/>
          
        <Route path='/login' element={<LoginSignup/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
