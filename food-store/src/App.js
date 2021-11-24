import { Route, Routes } from 'react-router';
import './App.css';
import MainNav from './Components/Navigation/MainNav';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Products from './Pages/Products';

function App() {
  return (
    <div>
      <MainNav/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </div>
  );
}

export default App;
