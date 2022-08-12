import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const CategoriaContext = createContext();
// provider es donde se encuentran las funciones y state 

const CategoriasProvider = (props) => {
    //crear el state de lContext 

    const [categoria, setCategoria] = useState([]);

    // ejecutar el llamado desde la api 

    useEffect(() => {
        const obtenerCategorias = async () =>{
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
            const categoria = await axios.get(url);

            setCategoria(categoria.data.drinks);
        }

        obtenerCategorias();
    },[])


    return(
        <CategoriaContext.Provider
            value={{
                categoria
                
            }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )

}


export default CategoriasProvider;