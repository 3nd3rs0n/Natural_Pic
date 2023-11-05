import Navbar from './components/Navbar'
import Home from './components/views/Home'
import Favoritos from './components/views/Favoritos'
import {Route,Routes} from 'react-router-dom'




const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/favoritos' element={  <Favoritos/>} />
      </Routes>
    
     
     
    </>
  
   
    
    
   
  )
}

export default App


