import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Menu, {loader as menuLoader} from "./features/menu/Menu"
import CreateOrder from "./features/order/CreateOrder"
import OrderDetail from "./features/order/OrderDetail"
import Cart from "./features/cart/Cart"
import AppLayout from "./ui/AppLayout"

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
      },
      {
        path: '/order/new',
        element: <CreateOrder/>
      },
      {
        path: '/order/:orderId',
        element: <OrderDetail/>
      }
    ]
  },
])
export default function App() {

  return <RouterProvider router={router}/>
}
