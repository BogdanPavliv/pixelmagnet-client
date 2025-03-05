import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://pixelmagnet-admin-mern-server.netlify.app/api',
    withCredentials: true, // Додає облікові дані
    validateStatus: () => true,
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance
