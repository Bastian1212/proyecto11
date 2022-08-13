import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const RecetasContext = createContext();

const RecetasProvider = (props) =>{
    const [consulta, setConsultas] = useState(false);
    const [Recetas, setRecetas] = useState([]);

    const [busqueda, setBusquedaRecetas] = useState({
        nombre:"", 
        categoria:""
    })

    useEffect(() => {
        if(consulta){
            const obtenerRecetaDesdeApi = async () =>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.nombre}&c=${busqueda.categoria}`;
                const Recetas = await axios.get(url);
                
                setRecetas(Recetas.data.drinks);
                
            }
        
            obtenerRecetaDesdeApi();

        }
        
    },[busqueda]);


    return (
        <RecetasContext.Provider
            value={{
                Recetas,
                setBusquedaRecetas,
                setConsultas
            }}
        >
            {props.children}
        </RecetasContext.Provider>

    ); 
}


export default RecetasProvider;