
import { useState } from "react";


export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    //const {username, email, password} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        //console.log(target)
        //console.log(name, value)
        setFormState({
            ...formState,
            [name]: value   // Actualiza el estado usando el nombre del campo como clave
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}




