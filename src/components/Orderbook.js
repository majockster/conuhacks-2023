import React, { useState,useEffect } from "react";
import '/Users/bassam/Desktop/myprojects/phonebookBackend/conuhacks-2023/src/Orderbook.css';

const OrderBook = ({orders,setOrders}) => {

  const data = orders


  useEffect(() => {
    let intervalId = null;
    const totalData = data.length;
    const totalDuration = 4 * 60 * 1000; // 4 minutes in milliseconds
    const dataPerInterval = totalData / totalDuration;
    let currentData = 0;

    intervalId = setInterval(() => {
        if (currentData < totalData) {
            setOrders(prevItems => prevItems.concat(data[currentData]));
            currentData += 1;
        } else {
            clearInterval(intervalId);
        }
    }, totalDuration / totalData);
    return () => clearInterval(intervalId);
}, []);


  useEffect(() => {
    setOrders(orders);
}, []);


  return (
    <div style={{ overflow: "auto", maxHeight: "500px" }} className='orderbook-container'>
      <h2>Orders</h2>
      <table className='orders-table'>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>OrderPrice</th>
            <th>MessageTyoe</th>
            <th>Direction</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.Symbol} className={order.MessageType}>
              <td>{order.Symbol}</td>
                <td>{order.OrderPrice}</td>
              <td>{order.MessageType}</td>
              <td>{order.Direction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBook;