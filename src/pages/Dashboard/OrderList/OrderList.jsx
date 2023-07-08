import React from "react";
import OrderListTable from "./OrderListTable/OrderListTable";

const OrderList = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="ml-1 ">Name</th>
            <th className="ml-4">Email</th>
            <th className="ml-4 ">Service</th>
            <th className="">Pay</th>
            <th className="">Status</th>
          </tr>
        </thead>
        <tbody>
          <OrderListTable />
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
