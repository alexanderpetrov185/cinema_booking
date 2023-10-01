import axios from "axios"

// for DOCKER
// export const API_URL = "http://localhost:4000/api"

//for local
export const API_URL = "http://localhost:5000/api"

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

$api.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
        return config
    }
);

export default $api;