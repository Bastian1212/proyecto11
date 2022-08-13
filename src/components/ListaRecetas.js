import React, {useContext} from "react";
import Receta from "./Receta";

import { RecetasContext } from "../context/RecetasContext";


const ListaRecetas = () => {

    const {Recetas} = useContext(RecetasContext);
    //console.log(Recetas);
    return (  
        <div className="row mt-5">
            {Recetas.map(receta => (
                <Receta
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}
        </div>
    );
}
 
export default ListaRecetas;