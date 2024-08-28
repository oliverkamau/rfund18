import { useEffect } from "react";
import { useState } from "react";

export default function Recipes(){


    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/recipes/getRecipes`);
          const result = await response.json();
          setRecipes(result);
          console.log(result)
        } catch (error) {
            alert('Connection not found');
        }
    };
  
      fetchData();
}, [])
}