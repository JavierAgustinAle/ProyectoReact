import React, {Component} from 'react';
import '../assets/css/styles.scss';


class TarjetaCurso extends Component {

    render() {
        return(
            <React.Fragment>
                <article className="card">
              <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src="https://edteam-media.s3.amazonaws.com/courses/original/565fa9ec-8f84-448a-b0d8-855d059f16dd.png" alt="ImgCurso" />
              </div>
              <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="t5 s-mb-2 s-center">
                  Programación orientada a objetos con Go
                </h3>
                <div className="s-mb-2 s-main-center">
                  <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                      <div className="circle img-container">
                        <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/952327c3-2bd9-41d1-819e-9b5d7eb84c13.jpg" alt="ImgProfesor" />
                      </div>
                    </div>
                    <span className="small">Alexys Lozada</span>
                  </div>
                </div>
                <div className="s-main-center">
                  <a className="button--ghost-alert button--tiny" href="www.facebook.com">$ 20USD</a>
                </div>
              </div>
            </article>
            </React.Fragment>
        );
    }
}

export default TarjetaCurso;