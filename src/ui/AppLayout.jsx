import CartOverview from '../features/cart/CartOverview'
import Header from './Header'
import {Outlet} from 'react-router-dom'
export default function AppLayout() {
  return (
    <section>
        <Header/>
        <main className="content">
            <h2>content</h2>
            <Outlet/>
        </main>
       <CartOverview/>
    </section>
  )
}
