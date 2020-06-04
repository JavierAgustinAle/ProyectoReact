import { useState } from 'react'

const useCounter = () => {

    const [count, setCount] = useState(0)  // El state es count, y setCount el metodo que modifica el state. Inicializo count en 0

    function increase() {
        setCount(count + 1)
    }

    function decrease() {
        setCount(count - 1)
    }

    return {    // Puedo retornar funciones tambien
        count,
        increase,
        decrease
    }
}

export default useCounter;