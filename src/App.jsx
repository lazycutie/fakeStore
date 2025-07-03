import Header from './components/header';
import Home from './components/home';
import Cartdetail from './components/Cartdetail'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigation } from 'react-router-dom';
import './App.css'

import { Toaster } from 'react-hot-toast';

console.log("App loaded");
function App() {



  return (
    <>
      <Header />
      <Routes>
        <Route path='/beauty' element={<Home key="beauty" cat="/category/beauty" />} />
        <Route path='/fragrances' element={<Home key="fragrances" cat="/category/fragrances" />} />
        <Route path='/furniture' element={<Home key="furniture" cat="/category/furniture" />} />
        <Route path='/groceries' element={<Home key="groceries" cat="/category/groceries" />} />
        <Route path='/home-decoration' element={<Home key="home-decoration" cat="/category/home-decoration" />} />
        <Route path='/kitchen-accessories' element={<Home key="kitchen-accessories" cat="/category/kitchen-accessories" />} />
        <Route path='/laptops' element={<Home key="laptops" cat="/category/laptops" />} />
        <Route path='/mens-shirts' element={<Home key="mens-shirts" cat="/category/mens-shirts" />} />
        <Route path='/mens-shoes' element={<Home key="mens-shoes" cat="/category/mens-shoes" />} />
        <Route path='/mens-watches' element={<Home key="mens-watches" cat="/category/mens-watches" />} />
        <Route path='/mobile-accessories' element={<Home key="mobile-accessories" cat="/category/mobile-accessories" />} />
        <Route path='/motorcycle' element={<Home key="motorcycle" cat="/category/motorcycle" />} />
        <Route path='/skin-care' element={<Home key="skin-care" cat="/category/skin-care" />} />
        <Route path='/smartphones' element={<Home key="smartphones" cat="/category/smartphones" />} />
        <Route path='/sports-accessories' element={<Home key="sports-accessories" cat="/category/sports-accessories" />} />
        <Route path='/sunglasses' element={<Home key="sunglasses" cat="/category/sunglasses" />} />
        <Route path='/tablets' element={<Home key="tablets" cat="/category/tablets" />} />
        <Route path='/tops' element={<Home key="tops" cat="/category/tops" />} />
        <Route path='/vehicle' element={<Home key="vehicle" cat="/category/vehicle" />} />
        <Route path='/womens-bags' element={<Home key="womens-bags" cat="/category/womens-bags" />} />
        <Route path='/womens-dresses' element={<Home key="womens-dresses" cat="/category/womens-dresses" />} />
        <Route path='/womens-jewellery' element={<Home key="womens-jewellery" cat="/category/womens-jewellery" />} />
        <Route path='/womens-shoes' element={<Home key="womens-shoes" cat="/category/womens-shoes" />} />
        <Route path='/womens-watches' element={<Home key="womens-watches" cat="/category/womens-watches" />} /> 
        <Route path='/' element={<Home cat="" />} />
        <Route path='/cart' element={<Cartdetail />} />

      </Routes>
      <Toaster />

    </>
  )
}

export default App
