import './App.css';
import NavBar from './componentes/NavBar';
import Footer from './componentes/Footer';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react';
import ProductCart from './componentes/ProductCart';
import { Home } from './componentes/Home';
import Checkout from './componentes/Checkout';
import FrecuentQuestions from './componentes/FrecuentQuestions';
import Geolocation from './componentes/Geolocation';
import ReduxExample from './componentes/ReduxExample';

function App() {

  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path='/products/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<ProductCart />} />
          <Route path='/geolocation' element={<Geolocation />} />
          <Route path='/faq' element={<FrecuentQuestions />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/redux' element={<ReduxExample />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;

