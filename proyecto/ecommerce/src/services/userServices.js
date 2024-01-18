//en este archivo van a ir todas las peticiones que se le van a hacer a los usuarios el login y el registro
//template strings ctrl + alt + } dos veces

import axios from "axios";

const BASE_URL = 'https://ecommerce-fake-store-su3i.onrender.com'

const loginUserService = (data) => {
    return axios.post(`${BASE_URL}/login`, data)
}

const registerUserService = (data) => {
    return axios.post(`${BASE_URL}/register`, data)
}

// funcion para hacer el logout
const logoutUserService = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
}

const getUser = (token) => {
    const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
    return axios.get(`${BASE_URL}/users/me`, config)
}

export {
    loginUserService,
    registerUserService,
    logoutUserService,
    getUser
}