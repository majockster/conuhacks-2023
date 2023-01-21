import StockHeader from './components/Header'
import ActionButton from './components/Button'
import { useState } from 'react'
import CandleChart from './components/CandleChart'
import React, { Component }  from 'react';
import OrderBook from './components/Orderbook';

const App = () => {

  const [bids, setBids] = useState([
    { price: 100, quantity: 10 },
    { price: 90, quantity: 15 },
    { price: 80, quantity: 20 },
  ]);
  const [asks, setAsks] = useState([
    { price: 110, quantity: 10 },
    { price: 120, quantity: 15 },
    { price: 130, quantity: 20 },
  ]);

  const [AequitasInfo, setAequitasInfo] = useState([]);
  const [AlphaInfo, setAlphaInfo] = useState([]);;
  const [TsxInfo, setTsxInfo] = useState([]);;
  const [Display,setDisplay] = useState("");

  const [data, setData] = useState([
    { date: new Date(), open: 100, high: 110, low: 90, close: 105 },
    { date: new Date(), open: 110, high: 120, low: 105, close: 115 },
    // ...
  ]);
  
  const [config, setConfig] = useState({
    width: 800,
    height: 600,
    type: "hybrid"
  });



  const showAequitas= ()=>{

    setDisplay("Aequitas info")

  }

  const showAlpha = ()=>{

    setDisplay("Alpha info")
  }

  const showTsx= ()=>{

    setDisplay("Txs info")

  }

  const showAll3 = ()=>{

    setDisplay(<OrderBook bids={bids} asks={asks} />)


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