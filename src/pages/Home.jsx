import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>home</p>
      <Link to="/menu">Menu</Link>
    </div>
  )
}
