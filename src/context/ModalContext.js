import axios from "axios";
import { createContext, useState, useEffect } from "react";


export const ModalContext = createContext();

const ModalProvider = (props) => {
    // state del provider

    const [idReceta, setIdReceta] = useState(null);
    const [receta , setReceta] = useState({});

    // una vez tenemso una receta, se llama la api 

    useEffect(() => {
        const ontenerReceta = async () =>{
            if(!idReceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const resultado = await axios.get(url);
            setReceta(resultado.data.drinks[0]);
            
        }
        ontenerReceta();
    },[idReceta]);

    return (  
        <ModalContext.Provider
            value={{
                setIdReceta,
                receta
            }}
        
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;