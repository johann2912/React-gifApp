import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

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
            {
                categories.map((category) =>  (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ))
            }
        </>
    )
}