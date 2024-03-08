import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 2) return;
        // setCategories(categories => [...categories,  inputValue]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

  return (
    <form 
        onSubmit={onSubmit}>

        <input 
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={onInputChange}
         />
    </form>
  )
}
