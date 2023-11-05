
import {useContext} from 'react'
import { apiContext } from '../../context/ApiProvider'



function Home() {
  const {categoria,setNuevo} = useContext(apiContext)
  



  
  

  function agregarFavorito (id){
   
    const favoritos = categoria.data.photos.map(cat => {
      if (cat.id === id) {
        return {
          ...cat, 
          liked:!cat.liked
        }
        
      }
      return cat

    })

    
   
    setNuevo(favoritos)
    console.log(favoritos)
    
    

  }
  
  

  

  return (

    
      
    <div>
                <div  className="container text-center">
                    <div className="row row-cols-2 row-cols-lg-5 gap-2 g-lg-3 ">
                        {categoria.data.photos.map((cat) => (
                            <div className="m-3" key={cat.id}>
                              
                              <img onClick={() => agregarFavorito (cat.id)} className='w-100 h-100' src={cat.src.tiny} alt={cat.id} />
                              
                                {cat.liked ? (<i className="fa-solid fa-heart "  style={{color: 'red'}} ></i>)  : (<i className="fa-solid fa-heart " style={{color: 'red'}} ></i>)}
                                   
                            </div>
                        ))}
                    </div>
                </div>

    </div>
    
   

    
  )
}

export default Home