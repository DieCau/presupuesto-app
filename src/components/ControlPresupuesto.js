import React, { Fragment } from 'react';
import { revisarPresupuesto } from '../helpers';
;


const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
      <Fragment>
          <div className="alert alert-primary">
            Presupuesto: $ {presupuesto}
          </div>
          <div className={revisarPresupuesto}>
            Restante: $ {restante}
          </div>
      </Fragment>
  );
};

export default ControlPresupuesto;
