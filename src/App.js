import React, {Fragment} from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaRecetas from "./components/ListaRecetas";


import CategoriasProvider from "./context/CategoriaContext";
import RecetasProvider from "./context/RecetasContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header/>
        <div className="container mt-5">
          <div className="row">
              <Formulario/>
              <ListaRecetas/>
          </div>
         
        </div>
      </RecetasProvider>
    </CategoriasProvider>
    
      
    
    
  );
}

export default App;
