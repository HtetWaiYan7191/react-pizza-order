import { Link } from 'react-router-dom'

export default function BackToMenu() {
  return (
        <Link to="/menu" className='text-blue-500'> {"<-"} Back to menu</Link>
  )
}
