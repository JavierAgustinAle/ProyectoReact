import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/styles.scss';
import { Link } from 'react-router-dom';
import { addToCart, deleteFromCart } from '../../redux/actionCreators';
import { connect } from 'react-redux'



const CourseCard = ({ id, image, title, price, addCourseToCart, cart, deleteCourseFromCart }) => (
    <React.Fragment>
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <Link to={`/cursos/${id}`}>
                    <img src={image} alt={title} />
                </Link>
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="center">
                    {title}
                </h3>
                <div className="s-main-center">
                    {
                        cart.find(a => a === id)
                            ?
                            <button className="button--ghost-alert button--tiny"
                                onClick={() => deleteCourseFromCart(id)} >
                                Remover del carrito
                            </button>
                            :
                            <button className="button--ghost-alert button--tiny"
                                onClick={() => addCourseToCart(id)}>
                                {` $ ${price} USD`}
                            </button>

                    }
                </div>
            </div>
        </article>

    </React.Fragment>
)

CourseCard.propTypes = {    //Indicamos que tipo de prop esperamos que nos lleguen, la defino abajo de la const!!
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number
}

CourseCard.defaultProps = {  //Indico los valores que tendran las props por defecto, si no llegan parametros usa estas.
    title: "No se encontro titulo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQd8FdQLudZ2csxo7iqwxBA9wCjQ_XYFf8bNxGKZVV1uhhK9gH7&usqp=CAU",
    price: 0
}

const mapStateToProps = state => ({
    cart: state.cart                //Pongo en mi propiedad cart lo que tenga el state en el array cart
})

const mapDispatchToProps = dispatch => ({
    addCourseToCart(id) {
        dispatch(addToCart(id))
    },

    deleteCourseFromCart(id) {
        dispatch(deleteFromCart(id))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(CourseCard);



// const InfoCurso = props => ASI RECIBO TODO EL OBJETO PROP, si pongo el nombre 
    //directamente puedo recibir solo lo que quiero del objeto, ej: InfoCurso = ({image, title, price}) =>

//Con un condicional puedo ver y decicir que hacer cuando recibe el parametro correcto y cuando no, ej 

                    //{ props.image                                         Condicion para cuando existe props.image
                    //? <img src={props.image} alt={props.title} />              Si es TRUE
                   // : <img src="Imagen Default" alt={props.title } /> }        Si es FALSE