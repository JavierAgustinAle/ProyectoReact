import React from 'react';
import '../assets/css/styles.scss';

// Este es un COMPONENTE PRESENTACIONAL  //

const InfoCurso = props => (
    <React.Fragment>
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="center">
                    {props.title}
                </h3>
                <div className="s-main-center">
                    <a className="button--ghost-alert button--tiny" href="localhost:3000">{` $ ${props.price}`}</a>
                </div>
            </div>
        </article>
    </React.Fragment>
)

export default InfoCurso;

// const InfoCurso = props => ASI RECIBO TODO EL OBJETO PROP, si pongo el nombre 
    //directamente puedo recibir solo lo que quiero del objeto, ej: InfoCurso = ({image, title, price}) =>