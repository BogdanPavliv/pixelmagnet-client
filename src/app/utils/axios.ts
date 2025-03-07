import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://pixelmagnet-admin-mern-server.onrender.com/api',
    withCredentials: true, // Додає облікові дані
    validateStatus: () => true,
})
// baseURL: 'http://localhost:3002/api',
instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance
