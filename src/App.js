import StockHeader from './components/Header'
import ActionButton from './components/Button'
import { useState } from 'react'
import CandleChart from './components/CandleChart'

const App = () => {

  const [AequitasInfo, setAequitasInfo] = useState([]);
  const [AlphaInfo, setAlphaInfo] = useState([]);;
  const [TsxInfo, setTsxInfo] = useState([]);;

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

  }

  const showAlpha = ()=>{

  }

  const showTsx= ()=>{

  }

  const showAll3 = ()=>{


  }

  let show = false;

  const showCandleStickChart =()=>{

    show = !show

    if (show){
      return(
        <CandleChart data={data} config={config}/>
      )
    }

    else {
      return('')
    }
    }


  

  return (
  <div>
    <StockHeader />
    <ActionButton text="Aequitas Orders" onClick={showAequitas()}/>  <ActionButton text="Alpha Orders" onClick={showAlpha()}/>  <ActionButton text="Tsx Orders" onClick={showTsx()}/>   <ActionButton text="Show all three" onClick={showAll3()}/>
    <ActionButton text="Display chart" onClick={showCandleStickChart()}/>


  </div>
  )
  }

export default App