import './App.css';
import Navbar from './components/Navbar';
import {
  Routes,
  Route
} from "react-router-dom";
import { Home, About, Contact, Product, Products, Cart } from './pages';
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='FakeShop-E-commerce' element={<Home />} />
        <Route path='FakeShop-E-commerce/products' element={<Product />} />
        <Route path='FakeShop-E-commerce/products/:id' element={<Products />} />
        <Route path='FakeShop-E-commerce/about' element={<About />} />
        <Route path='FakeShop-E-commerce/contact' element={<Contact />} />
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
