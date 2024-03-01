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
        placeholder="search order"
        className="p-2 border-2"
      />
    </form>
  );
}
