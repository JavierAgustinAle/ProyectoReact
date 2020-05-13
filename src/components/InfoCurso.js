import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/styles.scss';



const InfoCurso = props => (
    <React.Fragment>
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                { <img src={props.image} alt={props.title} /> }
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="center">
                    {props.title}
                </h3>
                <div className="s-main-center">
                    <a className="button--ghost-alert button--tiny" href="localhost:3000">{` $ ${props.price} USD`}</a>
                </div>
            </div>
        </article>
    </React.Fragment>
)

InfoCurso.propTypes = {    //Indicamos que tipo de prop esperamos que nos lleguen, la defino abajo de la const!!
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number
}

InfoCurso.defaultProps = {  //Indico los valores que tendran las props por defecto, si no llegan parametros usa estas.
    title: "No se encontro titulo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQd8FdQLudZ2csxo7iqwxBA9wCjQ_XYFf8bNxGKZVV1uhhK9gH7&usqp=CAU",
    price: 0
}


export default InfoCurso;



// const InfoCurso = props => ASI RECIBO TODO EL OBJETO PROP, si pongo el nombre 
    //directamente puedo recibir solo lo que quiero del objeto, ej: InfoCurso = ({image, title, price}) =>

//Con un condicional puedo ver y decicir que hacer cuando recibe el parametro correcto y cuando no, ej 

                    //{ props.image                                         Condicion para cuando existe props.image
                    //? <img src={props.image} alt={props.title} />              Si es TRUE
                   // : <img src="Imagen Default" alt={props.title } /> }        Si es FALSE
                