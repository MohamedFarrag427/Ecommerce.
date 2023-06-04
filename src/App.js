import Header from './components/Header';
import Index from './components/Index';
import About from './components/About';
import Footer from './components/Footer';
import HomeFurn from './components/Furnitures/HomeFurn';
import OfficeFurn from './components/Furnitures/OfficeFurn';
import HospitalFurn from './components/Furnitures/HospitalFurn';
import Contact from './components/Contact';
import LogIn from './components/User/logIn';
import Register from './components/User/Register';
import ForgotPass from './components/User/ForgotPass';
import ShopStore from './components/Shop/ShopStore';
import ProductItem from './components/Products/ProductItem';
import AllProducts from './components/Products/Allproducts';
import PageNotFound from './components/PageNotFound';
import Elumod from './components/Blogs/Elumod';
import Spatialize from './components/Blogs/Spatialize';
import Nostrud from './components/Blogs/Nostrud';
import Cart from './components/Cart';
import SearchProduct from './components/Search/SearchProduct';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Index/>}/>
        <Route path='about' exact element={<About/>}/>
        <Route path='furniture/home' exact element={<HomeFurn/>}/>
        <Route path='furniture/office' exact element={<OfficeFurn/>}/>
        <Route path='furniture/hospital' exact element={<HospitalFurn/>}/>
        <Route path='contact' exact element={<Contact/>}/>
        <Route path='user-sign' exact element={<LogIn/>}/>
        <Route path='user-register' exact element={<Register/>}/>
        <Route path='forgot-password' exact element={<ForgotPass/>}/>
        <Route path='products' exact element={<AllProducts/>}/>
        <Route path='product/:title' exact element={<ProductItem/>}/>
        <Route path='home/blog-eiumod-tempor-incididunt-ut-labore' exact element={<Elumod/>}/>
        <Route path='home/blog-ut-enim-adminim-veniam-quis-nostrud' exact element={<Nostrud/>}/>
        <Route path='home/blog-spatialize-with-that-the-furns' exact element={<Spatialize/>}/>
        <Route path='/cart' exact element={<Cart/>}/>
        <Route path='/search/:title' exact element={<SearchProduct/>}/>
        <Route path='*' exact element={<PageNotFound/>}/>
      </Routes>
      <ShopStore/>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;


