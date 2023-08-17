import style from '../App.module.css';

const Card = ({ nombre, apellido }) => {
  return (
    <div className={style.card}>
        <h2>Nuestro nuevo presidente es {nombre} {apellido}</h2>
    </div>
  )
}

export default Card