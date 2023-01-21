import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { useState } from "react";

  import React from 'react'
  
  export const CandleChart = ({data,config}) => {


    return (
      <div>
        
  <Chart data={data} config={config}>
    <YAxis />
  </Chart>
      </div>
    )
  }

  export default CandleChart
  