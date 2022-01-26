import React, { useEffect, useState } from 'react';
import ControlPresupuesto from './components/ControlPresupuesto';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Pregunta from './components/Pregunta';

function App() {
  // Definir un state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [ creargasto, setCrearGasto ] = useState(false);

  // UseEffect que actualiza el restante

  useEffect(() => {
    if(creargasto) {

      // agrega el nuevo presupuesto
      setGastos([
        ...gastos, 
        gasto
      ]);


      // resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      // resetear a false
      setCrearGasto(false)
    }

  }, [gasto]);

  
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {/* carga condicional de un componente   */}
          {mostrarpregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPregunta={setPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  setGasto={setGasto} 
                  setCrearGasto={setCrearGasto}
                />
              </div>

              <div className="one-half column">
                <Listado 
                  gastos={gastos} 
                />

                <ControlPresupuesto 
                  presupuesto={presupuesto} 
                  restante={restante} 
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
