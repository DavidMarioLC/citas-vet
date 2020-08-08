import React, { useState, useEffect } from 'react';

import image from '../image/doctor.svg'
import Form from '../components/Form'
import Card from '../components/Card'
const App = () => {

  let localStoreCitas = JSON.parse(localStorage.getItem('citas'))

  if (!localStoreCitas) {
    localStoreCitas = []
  }

  //almacenando citas
  const [citas, guardarCitas] = useState(localStoreCitas)

  //useefect
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas))

  }, [citas])

  const saveCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])

  }
  const deleteCita = id => {
    const listcitas = citas.filter(cita => cita.id !== id);
    guardarCitas(listcitas)
  }

  return (
    <div className="layout">
      <div className="wrapper">
        <div className="layout__content">

          <div className="image">
            <h1 className="title__app">CITAS-VET</h1>
            <img className="image__doctora" src={image} alt="doctora imagen" />
          </div>
          <Form saveCita={saveCita} />
          <div className="citas">
            <h3 className="citas__title">Administrar citas</h3>
            <div className="citas__content">
              {citas.length <= 0 && <h2 className="empty">No hay citas registradas.</h2>}

              {citas.map(cita => (
                <Card deleteCita={deleteCita} key={cita.id} id={cita.id} mascota={cita.mascota} dueño={cita.dueño} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas} />
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
