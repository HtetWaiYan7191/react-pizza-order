import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";
import {useSelector} from 'react-redux';

export default function Header() {
  const fullName = useSelector(state => state.user.fullName);
  return (
    <div className={`flex items-center ${fullName ? 'justify-between' : 'justify-between'} p-6 text-black bg-yellow-500 header`}>
      <Link to="/" className="text-lg tracking-[0.7rem]">FAST REACT PIZZA CO.</Link>
      <SearchOrder />
      {fullName && <p className="text-xl">{fullName.split(' ').at(0).toUpperCase()}</p>}
    </div>
  );
}
