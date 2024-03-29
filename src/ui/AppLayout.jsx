import CartOverview from '../features/cart/CartOverview'
import Header from './Header'
import {Outlet, useNavigation} from 'react-router-dom'
import Loader from './Loader';
export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading'
  return (
    <section>
        <Header/>
        {isLoading && <Loader/>}
        <main className="content">
            <Outlet/>
        </main>
       <CartOverview/>
    </section>
  )
}
