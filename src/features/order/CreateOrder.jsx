import { Form, useNavigation, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { redirect } from "react-router-dom";

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
  return redirect(`/order/${newOrder.id}`);
}

function isValidPhoneNumber(phoneNumber) {
  // Regular expression to match a valid phone number
  const phoneRegex =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  // Check if the phoneNumber matches the regex pattern
  return phoneRegex.test(phoneNumber);
}

const fakeCart = [
  {
    pizzaId: 1,
    name: "spinach and mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
  {
    pizzaId: 2,
    name: "spinach ",
    quantity: 4,
    unitPrice: 15,
    totalPrice: 15,
  },

  {
    pizzaId: 2,
    name: " mushroom",
    quantity: 6,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  console.log(navigation.state);
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  console.log(formErrors);

  return (
    <div className="order-container">
      <h2>Jonas</h2>

      <Form method="POST" className="order-new-form">
        <h2 className="text-lg font-semibold">Ready to order ? Lets go !</h2>
        <div className="">
          <label htmlFor="customer" id="customer">
            First Name
          </label>
          <input required className="border-2" type="text" name="customer" />
        </div>

        <div className="">
          <label htmlFor="phone" id="phone">
            Phone Number
          </label>
          <input required className="border-2" type="tel" name="phone" />
          {formErrors?.phone && <span>{formErrors.phone}</span>}
        </div>

        <div className="">
          <label htmlFor="address" id="address">
            Address
          </label>
          <input required className="border-2" type="text" name="address" />
        </div>

        <input type="checkbox" name="priority" id="priority" />
        <label htmlFor="priority">Want to give your order priority ?</label>

        <div className="btn-container">
          <input type="hidden" name="cart" value={JSON.stringify(fakeCart)} />
          <button disabled={isSubmitting} className="px-3 py-1 border">
            {isSubmitting ? "Placing Order" : "Order Now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
