import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Batman']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            {/**
             * title aplication
             */}
            <h1>GifExpertApp</h1>

            {/**
             * input 
             */}
            <AddCategory onNewCategory={(value) => onAddCategory(value)}/>

            {/**
             * List Gif
             */}
            <ol>
                {
                    categories.map((category) => <li key={category} >{category}</li>)
                }
            </ol>
        </>
    )
}