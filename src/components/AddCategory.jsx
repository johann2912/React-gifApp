import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('Batman')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    };

    const onSubmits = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim()
        const formatNewInputValue = newInputValue.charAt(0).toUpperCase() + newInputValue.slice(1).toLocaleLowerCase();
        if(formatNewInputValue.length <= 1) return;

        onNewCategory(formatNewInputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmits}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}