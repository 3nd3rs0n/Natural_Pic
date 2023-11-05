import {useContext, useState} from 'react'
import { apiContext } from '../../context/ApiProvider'

const Favoritos = () => {
  const {categoria,nuevo} = useContext(apiContext)
  // const [favorito,setFavorito] = useState(true)
 
 

//    function updateFavorite (e) {
//     setFavorito(!favorito)

//  }

  return (

    
      
    <div>
                <div className="container text-center">
                    <div className="row row-cols-2 row-cols-lg-5 gap-2 g-lg-3 ">
                        {nuevo.filter(cat => cat.liked ).map((cat) => (
                            <div className="m-3" key={cat.id}>
                              <img className='w-100 h-100' src={cat.src.tiny} alt={cat.id} />
                              <i className="fa fa-heart-o"></i>
                                    {/* {!cat.liked ? 
                                        (<p>Favorite contact: {favorito} <i onClick={(e) => updateFavorite(e)} className="fa fa-heart-o"></i></p> ) 
                                        : 
                                        (<p>Favorite contact: {favorito} <i onClick={(e) => updateFavorite(e)} className="fa fa-heart" style={{color: 'red'}}></i></p> )
                                    }     */}
                            </div>
                        ))}
                    </div>
                </div>

    </div>
 
    
  )
}

export default Favoritos