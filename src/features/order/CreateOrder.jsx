import { Form, useNavigation, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { redirect } from "react-router-dom";
import { getFirstName } from "../../redux/user/userSlice";
import { useSelector } from "react-redux";
import { clearCart, getCart } from "../../redux/cart/cartSlice";
import store from '../../redux/store';

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhoneNumber(data.phone))
    errors.phone =
      "Please give us your correct phone number 🤔. We might need to contact you 🤨";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

function isValidPhoneNumber(phoneNumber) {
  // Regular expression to match a valid phone number
  const phoneRegex =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  // Check if the phoneNumber matches the regex pattern
  return phoneRegex.test(phoneNumber);
}



function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const firstName = useSelector(getFirstName);
  const cart = useSelector(getCart)

  if(!cart) return (
    <h2>No cart ! </h2>
  )
  return (
    <div className="flex flex-col items-center mt-8 order-container">
      <div className="mx-auto md:w-[60%] w-full">
        <h2 className="mb-8 text-4xl font-semibold">Hello {firstName} 🥳</h2>

        <Form method="POST" className="order-new-form">
          <h2 className="mb-6 text-2xl font-semibold">
            Ready to order? Let&apos; go !
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <label htmlFor="customer" id="customer" className="text-xl w-52">
              First Name
            </label>
            <input
              required
              value={firstName}
              className="px-3 py-2 border-2 rounded-full grow focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              type="text"
              name="customer"
            />
          </div>

          <div className="flex items-center gap-4 mb-4">
            <label htmlFor="phone" id="phone" className="text-xl w-52">
              Phone Number
            </label>
            <input
              required
              className="px-3 py-2 border-2 rounded-full grow focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              type="tel"
              name="phone"
            />
            {formErrors?.phone && <span>{formErrors.phone}</span>}
          </div>

          <div className="flex items-center gap-4 mb-4 ">
            <label htmlFor="address" id="address" className="text-xl w-52">
              Address
            </label>
            <input
              required
              className="px-3 py-2 border-2 rounded-full grow focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              type="text"
              name="address"
            />
          </div>

          <div className="flex items-center ">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              className="inline-block w-6 h-6 me-4"
            />
            <label htmlFor="priority" className="text-xl">
              Want to give your order priority ?
            </label>
          </div>

          <div className="btn-container">
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            <button
              disabled={isSubmitting}
              className="px-4 py-2 mt-6 text-xl bg-yellow-500 border rounded-full"
            >
              {isSubmitting ? "Placing Order" : "Order Now For X dollars"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CreateOrder;
