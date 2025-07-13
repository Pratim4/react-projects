// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Category from './category';
import { useEffect, useState } from 'react';

function App() {
  let [finalCategory, setFinalCategory]=useState([])
  let [finalProduct, setFinalProduct]=useState([])
  let [catName,setCatName]=useState('')
  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/category-list')
    .then((res)=>res.data)
    .then((finalResponse)=>{
      setFinalCategory(finalResponse)
    })
  }
  let getProduct=()=>{
    axios.get("https://dummyjson.com/products")
    .then((proRes)=>proRes.data)
    .then((finalProductData)=>{
      setFinalProduct(finalProductData.products)
      

    })
  }
  useEffect(()=>{
    getCategory();
    getProduct();

  },[])
  useEffect(()=>{
    if(catName!==''){
      axios.get(`https://dummyjson.com/products/category/${catName}`)
    .then((proRes)=>proRes.data)
    .then((finalProductData)=>{
      setFinalProduct(finalProductData.products)
    })
    }//If something came as a value in the catName then this useeffect will effective,so we need to bring some value to cat.
  },[catName])
  let Pitems=finalProduct.map((products,index)=>{
    return(
      <ProductContainer key={index} pData={products}/>

    )
  })

  return (
    <>
      <div className='py-[40px] pl-4'>
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div >
            
              <Category finalCategory={finalCategory} setCatName={setCatName}/>
            </div>
            <div>
              <div className='grid grid-cols-3 gap-5'>
                  {
                    finalProduct.length>=1 
                    ?
                    Pitems
                    :
                    "No Product Found"
                  }
                  
                  
                </div>
              </div>
            </div>
          </div>
          </div>
    </>
  );
}

export default App;

function ProductContainer({pData}) {
  return(

  <div className="shadow-lg text-center pb-4">
    <img src={pData.thumbnail} alt="watch" className='w-[100%] h-[160px]'/>
    <h4 className='text-center'>{pData.title}</h4>
    <p className="font-bold text-center">{pData.price}</p>
  </div>
  )
}
