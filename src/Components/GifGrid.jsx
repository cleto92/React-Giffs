import { GifItem } from './GifItem'
import { useFetchGifs } from '../Hooks/useFetchGifs'

export const GifGrid = ({category}) => {

    const {isLoading, images} = useFetchGifs(category)
    console.log({isLoading, images})
  
  return (
    <>

        <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando</h2>)
            }
        <div className="card-grid">
        {
                    images.map( (image) => (
                        <GifItem key={image.id}
                            {...image}
                        />
                    ))
            }
        
        </div>

        
    </>
  )
}
