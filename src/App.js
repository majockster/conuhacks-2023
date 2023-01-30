import StockHeader from './components/Header'
import ActionButton from './components/Button'
import { useState,useEffect } from 'react'
import React, { Component }  from 'react';
import OrderBook from './components/Orderbook';
import axios from 'axios'
import { response } from 'express';


const App = () => {

  const [Display,setDisplay] = useState("hello world")

  const [orders1, setOrders1] = useState([]);
  const [orders2, setOrders2] = useState([]);
  const [orders3, setOrders3] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8000/aequitas')
    .then(response=>{
      setOrders1(response.data)
    })
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/alpha')
    .then(response=>{
      setOrders2(response.data)
    })
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/tsx')
    .then(response=>{
      setOrders3(response.data)
    })
  }, []);



  const showAequitas= ()=>{

    setDisplay(<OrderBook orders={orders1} setOrders={setOrders1}/>)

  }

  const showAlpha = ()=>{

    setDisplay(<OrderBook orders={orders2} setOrders={setOrders2}/>)
  }

  const showTsx= ()=>{

    setDisplay(<OrderBook orders={orders3} setOrders={setOrders3}/>)

  }

  const showAll3 = ()=>{

  


  }
  

  let show = false;

  const showCandleStickChart =()=>{

    return('Trying to show candle stick chart')

    // show = !show

    // if (show){
    //   return(
    //     <CandleChart data={data} config={config}/>
    //   )
    // }

    // else {
    //   return('')
    // }

    
    }


  

  return (
  <div>
    <StockHeader />
    <ActionButton text="Aequitas Orders" onClick={()=>showAequitas()}/>  <ActionButton text="Alpha Orders" onClick={()=>showAlpha()}/>  <ActionButton text="Tsx Orders" onClick={()=>showTsx()}/>   <ActionButton text="Show all three" onClick={()=>showAll3()}/>
    <ActionButton text="Display chart" onClick={()=>setDisplay(showCandleStickChart)}/>

    <h4>{Display}</h4>


  </div>
  )
  }

export default App