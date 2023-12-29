import PageNotFound from './components/PageNotFound';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home'
import Cart from '../src/pages/cart/Cart'
import BookDetail from './components/book/BookDetail'
import Login from './components/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/book/:id' element={<BookDetail/>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
