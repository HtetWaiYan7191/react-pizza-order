import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Menu from "./features/menu/Menu"
import CreateOrder from "./features/order/CreateOrder"
import OrderDetail from "./features/order/OrderDetail"
import Cart from "./features/cart/Cart"

const router = createBrowserRouter([
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
    element: <Menu/>
  },
  {
    path: '/order/new',
    element: <CreateOrder/>
  },
  {
    path: '/order/:orderId',
    element: <OrderDetail/>
  }
])
export default function App() {

  return <RouterProvider router={router}/>
}
