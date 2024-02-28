import {useNavigate, useRouteError} from 'react-router-dom';
export default function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className='error-container'>
      <h2 className="text-2xl font-semibold">Something went wrong</h2>
      <p>{error.data ?? error.message}</p>
      <button onClick={() => navigate(-1)} className='text-blue-500 underline'>Go Back</button>
    </div>
  )
}
