import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('Batman')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    };

    const onSubmits = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if(newInputValue.length <= 1) return;

        onNewCategory(newInputValue);
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