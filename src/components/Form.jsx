import React, { useState } from 'react'
import PropTypes from 'prop-types';
import uuid from 'uuid/dist/v4'
const Form = ({ saveCita }) => {

    const [cita, setCita] = useState({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [message, setMessage] = useState(false)
    const handlerState = (e) => {

        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })

    }
    const submitCita = (e) => {
        e.preventDefault()

        //validando form
        if (mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setMessage(true)
            return;
        }
        //volviendo a poner false si al segundo envio es correcto
        setMessage(false)
        //asignando id
        cita.id = uuid()

        //guardando la cita
        saveCita(cita)
        //reiniciar el form
        setCita({
            mascota: '',
            dueño: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    const { mascota, dueño, fecha, hora, sintomas } = cita

    return (
        <div className="form" onSubmit={submitCita}>
            <h3 className="form__title">Crea tu cita</h3>
            {message && <div className="message">Para guardar tu cita debes llenar todos los campos.</div>}
            <form className="form__content">
                <label className="item__label" htmlFor="">Nombre de la mascota</label>
                <input value={mascota} onChange={handlerState} name="mascota" className="item__input" type="text" />
                <label className="item__label" htmlFor="">Nombre del dueño</label>
                <input value={dueño} onChange={handlerState} name="dueño" className="item__input" type="text" />
                <label className="item__label" htmlFor="">Fecha</label>
                <input value={fecha} onChange={handlerState} name="fecha" className="item__input" type="date" />
                <label className="item__label" htmlFor="">Hora</label>
                <input value={hora} onChange={handlerState} name="hora" className="item__input" type="time" />
                <label className="item__label" htmlFor="">Sintomas</label>
                <textarea value={sintomas} onChange={handlerState} name="sintomas" className="item__textarea" cols="30" rows="5"></textarea>
                <button type="submit" className="item__guardar">Guardar cita</button>
            </form>
        </div>
    )
}

Form.propTypes = {
    saveCita: PropTypes.func.isRequired
}
export default Form
