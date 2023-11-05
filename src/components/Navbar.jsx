import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className='bg-gradient-to-r from-indigo-500 to-indigo-800 md:min-w-screen h-24'>
        <div className='text-center p-9'>
            <NavLink to="/" className='border px-3 py-3 rounded-lg mx-2 font-bold text-white text-lg hover:text-indigo-100' > home </NavLink>
            <NavLink to="/favoritos" className='border px-3 py-3 rounded-lg mx-2 font-bold text-white text-lg hover:text-indigo-100' > favoritos </NavLink>
            

        </div>
        
    </nav>
    <div>
        <h1 className="text-3xl text-center mt-3 uppercase font-bold text-indigo-800">natural-pic</h1>
    </div>
       
    <div>
        
    </div>
    </>
   
  )
}

export default Navbar