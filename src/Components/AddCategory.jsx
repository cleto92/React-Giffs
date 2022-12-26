import React, {useState} from 'react'

export const AddCategory = ({onNewCategory}) => {

const [input, setInput] = useState()
const handleChange = ({target}) => {
    setInput(target.value)
}

const onSubmit = (event) => {
    event.preventDefault()
    if(input.trim().length <= 1) return
    onNewCategory(input.trim() )
    setInput('')
    
}

  return (
    <form onSubmit={onSubmit}>
    <input onChange={handleChange} type="text" placeholder="Buscar Gif" value={input} />
    </form>
  )
}
