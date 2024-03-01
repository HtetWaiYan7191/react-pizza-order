/* eslint-disable no-unused-vars */

import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

export async function orderLoader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
export default function OrderDetail() {
  const order = useLoaderData();
  const {customer, status, priority, cart, id, orderPrice, priorityPrice, estimatedDelivery} = order
  return <div>{customer}</div>;
}
