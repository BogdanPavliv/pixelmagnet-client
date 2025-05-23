import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://pixelmagnet-admin-mern-server.onrender.com/api',
    withCredentials: true, // Adds credentials
    validateStatus: () => true,
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance
