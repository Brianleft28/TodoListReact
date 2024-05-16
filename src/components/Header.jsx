
const Header = () => {


  return (
    <div className='bg-gray-600 bg-opacity-50 backdrop-filter fixed top-0 left-0 min-w-full z-50 backdrop-blur shadow-lg border-green-400 border-b-2'>
        <div className='hover:cursor-pointer selection:bg-none flex p-3 items-center justify-center'>
             <h1 className='shadow-sm text-white text-3xl'>| Daily<span className='font-bold text-green-300 text-3xl'>Tasker</span> |</h1>
        </div>
    </div>
  )
}

export default Header