export default function Loader() {
  return (
    <div className="fixed top-0 flex items-center justify-center w-full h-screen bg-gray-200 loader-container opacity-30">
      <span className="w-20 h-20 border-t-4 border-b-4 border-yellow-500 rounded-full animate-spin"></span>
    </div>
  )
}
