import React, { useState } from "react";
import '/Users/bassam/Desktop/myprojects/phonebookBackend/conuhacks-2023/src/Orderbook.css'

const OrderBook = ({bids,asks}) => {
 
  return (
    <div className='orderbook-container'>
      <div className='bids-container'>
        <h2>Bids</h2>
        <table className='bids-table'>
          <thead>
            <tr>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <tr key={bid.price}>
                <td>{bid.price}</td>
                <td>{bid.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='asks-container'>
        <h2>Asks</h2>
        <table className='asks-table'>
          <thead>
            <tr>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {asks.map((ask) => (
              <tr key={ask.price}>
                <td>{ask.price}</td>
                <td>{ask.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderBook;
