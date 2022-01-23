import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({ setPresupuesto, setRestante, setPregunta }) => {

  // Definir el State
  const [ cantidad, setCantidad ] = useState(0);
  const [ error, setError ] = useState(false);


  // Funcion que lee el presupuesto
  const definirPresupuesto = e => {
    setCantidad( parseInt(e.target.value, 10));    
  }
  
  // Submit para definir el prepuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    // Validar que sea una cantidad valida
    if( cantidad < 1 || isNaN(cantidad) ) {
      setError(true);
      return;
    }

    // Qué hacer si se pasa la validación
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setPregunta(false);
  }

  return (
      <Fragment>
          <h2>Coloca tu Presupuesto</h2>
          
          { error ?  <Error  mensaje="El Prespuesto es Incorrecto" /> : null }

          <form
            onSubmit={ agregarPresupuesto }
          >
              <input
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"   
                onChange={ definirPresupuesto }           
              />

              <input 
                type="submit" 
                className='button-primary u-full-width'
                value="Definir Presupuesto"
              />

          </form>

      </Fragment>
  );
};

export default Pregunta;
