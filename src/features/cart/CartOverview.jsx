import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { getTotalPrice, getTotalQuantity } from '../../redux/cart/cartSlice'

export default function CartOverview() {
  const pizzaCount = useSelector(getTotalQuantity)
  const totalPrice = useSelector(getTotalPrice)

  
  if(!pizzaCount) return null;
  return (
    <div className='fixed bottom-0 z-10 flex items-center justify-between w-full p-8 text-white/90 cart-overview-container bg-stone-800'>
       <div className="flex total-pizza gap-x-6">
       <span>{pizzaCount} PIZZAS</span>
       <span>$ {totalPrice.toFixed(2)}</span>
       </div>
       <Link to="/cart">OPEN CART {'->'}</Link>
    </div>
  )
}
