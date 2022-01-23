import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Pregunta from "./components/Pregunta";

function App() {

    // Definir un state
    const [ presupuesto, setPresupuesto ] = useState(0);
    const [ restante, setRestante ] = useState(0);
    const [ mostrarpregunta, setPregunta ] = useState(true);


  return (
    
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
        
        {/* carga condicional de un componente   */}
            { mostrarpregunta ? 
              (
                  <Pregunta 
                    setPresupuesto = {setPresupuesto}
                    setRestante    = {setRestante}
                    setPregunta    = {setPregunta}
                  />
              
              ) : (
              
                  <div className="row">
                    <div className="one-half column">
                      <Formulario />
                    </div> 
          
                    <div className="one-half column">
                      2
                    </div>  
                  </div>  
              ) 
            }

        </div>
      </header>
    </div>
  );
}

export default App;
