import CartOverview from '../features/cart/CartOverview'
import Header from './Header'
import {Outlet, useNavigation} from 'react-router-dom'
import Loader from './Loader';
import SearchOrder from './SearchOrder';
export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading'
  return (
    <section>
        <Header/>
        {isLoading && <Loader/>}
        <SearchOrder/>
        <main className="content">
            <h2>content</h2>
            <Outlet/>
        </main>
       <CartOverview/>
    </section>
  )
}
