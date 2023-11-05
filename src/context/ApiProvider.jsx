import {useState,useEffect,createContext} from 'react'

import data from './photos.json'


export const apiContext = createContext();






const ApiProvider = ({children}) => {

    const [categoria, setcategorias] = useState({data})
    const [nuevo,setNuevo] = useState([])
      
  

    

    


  return (
    <apiContext.Provider
        value={{ categoria,setcategorias,setNuevo,nuevo}}
    >
        {children}

    </apiContext.Provider>
  )
}

export default ApiProvider

// nuevo uses state favorita,setfavborita con arreglo vacio 
//usar context en componente favborito y hacer lo mismo en home de las cards 