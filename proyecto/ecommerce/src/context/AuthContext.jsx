import { useContext, createContext, useState, Children, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token') //cuando nos loogiemos la variable isAuth va a cambiar a true y va a modificar el localstorage en la consola del navegador y al hacer logout pasa a false y elimina el localstorage
        if (token) {
            const decoded = jwtDecode(token)
        setUser(decoded)
        setIsAuth(true)
        }
        
    }, [isAuth]) //llamada por primera vez a la API y el poner esta variable en los corchetes indica que cada vez que se actualice la variable se va a estar ejecuntando el código del useEffect de arriba

    const values = {
        user,
        isAuth,
    }


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )

}

const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context
}

export {
    AuthProvider,
    AuthContext,
    useAuthContext
}