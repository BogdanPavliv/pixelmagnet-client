import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://pixelmagnet-admin-mern-server.netlify.app/api',
    validateStatus: () => true,
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance
