import React from 'react'
import PropTypes from 'prop-types'
const Card = ({ id, mascota, dueño, fecha, hora, sintomas, deleteCita }) => {
    return (
        <div className="card">
            <div className="card__content">
                <p className="card__label">Mascota: <strong>{mascota}</strong></p>
                <p className="card__label">Dueño: <strong>{dueño}</strong></p>
                <p className="card__label">Fecha: <strong>{fecha}</strong></p>
                <p className="card__label">Hora: <strong>{hora}</strong></p>
                <p className="card__label">Síntomas: <strong>{sintomas}</strong></p>
                <button onClick={() => { deleteCita(id) }} className="card__button">Eliminar</button>
            </div>
        </div>
    )
}
Card.propTypes = {
    id: PropTypes.string.isRequired,
    mascota: PropTypes.string.isRequired,
    dueño: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    deleteCita: PropTypes.func.isRequired

}
export default Card
