 import Header from './components/header';
import Home from './components/home';
import Cartdetail from './components/Cartdetail'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigation } from 'react-router-dom';
import './App.css'
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import axios from 'axios'; 
console.log("App loaded");
function App() {
  const[catego,setCatego]= useState([]) 
  const cate = async()=>{
    const cats = await axios.get('https://dummyjson.com/products/category-list')
    setCatego(cats.data)
  }
  useEffect(() => {
      cate();
    }, []);

  return (
    <>
      <Header />
      <Routes> 
        {catego.map((ele)=>{ 
          return( 
            <Route path={`/${ele}`}element={<Home key={ele} cat={`/category/${ele}`}/>}/>
          ) 
        })} 
        <Route path='/' element={<Home cat=""/>} />
        <Route path='/cart' element={<Cartdetail />} /> 
      </Routes>
      <Toaster />

    </>
  )
} 
export default App
