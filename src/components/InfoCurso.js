import React, {Component} from 'react';
import '../assets/css/styles.scss';


const curso = {
    "title": "Curso de React",
    "Image":"https://edteam-media.s3.amazonaws.com/courses/original/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png",
    "price": "50usd"
}


class InfoCurso extends Component {
    render() {
        return(
            <React.Fragment>
                <article className="card">
              <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={curso.Image} alt={curso.title} />
              </div>
              <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                    <h3 className="center">
                        {curso.title}
                    </h3>
                    <div className="s-main-center">
                        <a className="button--ghost-alert button--tiny" href="localhost:3000">{` $ ${curso.price}`}</a>
                    </div>
              </div>
            </article>
            </React.Fragment>
        );
     }
}

export default InfoCurso;
// PROPS ==> son las propiedades de los elementos, por ejemplo las props src y alt de IMG

//Tambien puedo mandar el src de img con una expresion JSX osea entre llaves {}