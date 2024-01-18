//REGLAS PARA CREAR UN HOOK DE REACT
//1. EL NOMBRE DE LA FUNCION DEBE DE COMENZAR CON LA PALABRA "USE"
//2. UN CUSTOME HOOK, ES UNA FUNCION QUE UTILIZA OTROS HOOKS DE REACT.
//3.LOS HOOKS DEBEN DE SER FUNCIONES
//4.LOS HOOKS DEBEN SER REUTILIZABLES, NO PARA CASOS MUY ESPECÍFICOS
//5.DEBEN RETORNAR ALGO, UN VALOR, UN OBJETO, UN ARRAY, FUNCIONES, ETC

import { useState } from "react"

function useForm(defaultData, callback) {
    //Estado unico para guardar los datos de mi formulario en un objeto
    const [formData,setFormData] = useState(defaultData)
    //defaultData (valores por defecto) va a ser un objeto con los campos de mi form y su valor inicial
    
    //funcion que maneja ek registro del formulario
    const handleSubmit = (event) => {
        event.preventDefault()
        callback(formData)
        setFormData(defaultData)
    }
    
    //funcion que maneja los cambios en cada input
    const handleInputChange = (event) =>{
        const {name, value } = event.target 
        setFormData({...formData, [name]:value})
    }

    return{
        formData,
        handleInputChange,
        handleSubmit
    }
}

export default useForm
