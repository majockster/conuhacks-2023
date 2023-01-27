import StockHeader from './components/Header'
import ActionButton from './components/Button'
import { useState } from 'react'
import CandleChart from './components/CandleChart'
import React, { Component }  from 'react';
import OrderBook from './components/Orderbook';
// import dataAE from './AequitasData.json'
import dataAl from'./AlphaData.json'
import dataTsx from './TSXData.json'


const App = () => {

  const [Display,setDisplay] = useState("hello world")

  const [orders, setOrders] = useState([
    { side: "buy", price: 100, quantity: 10 },
    { side: "sell", price: 110, quantity: 15 },
    { side: "buy", price: 90, quantity: 20 },
    { side: "sell", price: 120, quantity: 25 },
  ]);


  
  const [config, setConfig] = useState({
    width: 800,
    height: 600,
    type: "hybrid"
  });



  const showAequitas= ()=>{

    setDisplay(<OrderBook orders={dataAl} setOrders={setOrders}/>)

  }

  const showAlpha = ()=>{

    setDisplay(<OrderBook orders={dataAl} setOrders={setOrders}/>)
  }

  const showTsx= ()=>{

    setDisplay(<OrderBook orders={dataTsx} setOrders={setOrders}/>)

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