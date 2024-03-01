import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Menu, {loader as menuLoader} from "./features/menu/Menu"
import CreateOrder from "./features/order/CreateOrder"
import OrderDetail, { orderLoader } from "./features/order/OrderDetail"
import Cart from "./features/cart/Cart"
import AppLayout from "./ui/AppLayout"
import Error from "./pages/Error"
import {action as createOrderAction} from './features/order/CreateOrder';

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/menu',
        element: <Menu/>,
        loader: menuLoader,
        errorElement: <Error/>
      },
      {
        path: '/order/new',
        element: <CreateOrder/>,
        action: createOrderAction,
        errorElement: <Error/>
      },
      {
        path: '/order/:orderId',
        element: <OrderDetail/>,
        loader: orderLoader,
        errorElement: <Error/>
      }
    ]
  },
])
export default function App() {

  return <RouterProvider router={router}/>
}
