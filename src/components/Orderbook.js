import React, { useState } from "react";
import '/Users/bassam/Desktop/myprojects/phonebookBackend/conuhacks-2023/src/Orderbook.css';

const OrderBook = () => {
  const [orders, setOrders] = useState([
    { side: "buy", price: 100, quantity: 10 },
    { side: "sell", price: 110, quantity: 15 },
    { side: "buy", price: 90, quantity: 20 },
    { side: "sell", price: 120, quantity: 25 },
  ]);

  return (
    <div className='orderbook-container'>
      <h2>Orders</h2>
      <table className='orders-table'>
        <thead>
          <tr>
            <th>Side</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.price} className={order.side}>
              <td>{order.side}</td>
              <td>{order.price}</td>
              <td>{order.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBook;