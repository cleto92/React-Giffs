import React,{useState} from 'react'
import './Components/AddCategory'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

//Logica

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]) // <<-- Este es el Componente PADRE.
    const onAddCategory = (newCategory) => {
      if(categories.includes(newCategory)) return;
             setCategories([newCategory, ...categories])
    }


  // Retorno

    return (
        <>
          
          <AddCategory onNewCategory={event => onAddCategory(event)} />
                {categories.map( category => ( <GifGrid key={category} category={category} />
              ))
          }
          

        
        </>

  )
}
