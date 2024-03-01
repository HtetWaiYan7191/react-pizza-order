import { Form } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { redirect } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
 const data = Object.fromEntries(formData);
 const order = {
  ...data,
  cart: JSON.parse(data.cart),
  priority: data.priority === 'on',
 };

 const newOrder = await createOrder(order);
 return redirect(`/order/${newOrder.id}`)

}

const fakeCart = [
  {
    pizzaId: 1,
    name: 'spinach and mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
  {
    pizzaId: 2,
    name: 'spinach ',
    quantity: 4,
    unitPrice: 15,
    totalPrice: 15,
  },

  {
    pizzaId: 2,
    name: ' mushroom',
    quantity: 6,
    unitPrice: 15,
    totalPrice: 15,
  },
]

function CreateOrder() {
  return (
    <div className="order-container">
      <h2>Jonas</h2>

      <Form method="POST" className="order-new-form">
        <h2 className="text-lg font-semibold">Ready to order ? Lets go !</h2>
        <div className="">
          <label htmlFor="customer" id="customer">First Name</label>
          <input required className="border-2" type="text" name="customer" />
        </div>

        <div className="">
          <label htmlFor="phone" id="phone">Phone Number</label>
          <input required className="border-2" type="tel" name="phone" />
        </div>

        <div className="">
          <label htmlFor="address" id="address">Address</label>
          <input required className="border-2" type="text" name="address" />
        </div>

        <input type="checkbox" name="priority" id="priority" />
        <label htmlFor="priority">Want to give your order priority ?</label>

        <div className="btn-container">
          <input type="hidden" name="cart" value={JSON.stringify(fakeCart)} />
          <button className="px-3 py-1 border">Order now</button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
