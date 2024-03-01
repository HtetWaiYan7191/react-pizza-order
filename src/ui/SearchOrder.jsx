import { useState } from "react";
import {useNavigate} from 'react-router-dom';

export default function SearchOrder() {
  const [query, setQuery] = useState();
 const navigate = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!query) return;
    navigate(`order/${query}`)
    setQuery('');
  }
  
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Order #"
        className="w-[18rem] px-2 py-2 transition-all duration-300 bg-yellow-100 border-2 rounded-full outline-none focus:w-[20rem] placeholder:ps-2 placeholder:text-stone-500"
      />
    </form>
  );
}
