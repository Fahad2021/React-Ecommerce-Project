import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ProductDetail from './components/ProductDetails/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route  exact path='/' element={<Shop/>} /> 
          <Route  path="/shop" element={<Shop />} />
          <Route  path="/review" element={<Review />} />
          <Route  path="/manage" element={<Inventory/>}/>
          <Route  path="product/:productKey" element={<ProductDetail/>}/>
          <Route  path="*" element={<Notfound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
