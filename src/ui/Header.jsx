import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-6 text-black bg-yellow-500 header">
      <Link to="/" className="text-lg tracking-[0.7rem]">FAST REACT PIZZA CO.</Link>
      <SearchOrder />
    </div>
  );
}
