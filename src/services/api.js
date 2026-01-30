import axios from "axios";

//e2ee1da33c821a2e786f85f99f7d560d
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;