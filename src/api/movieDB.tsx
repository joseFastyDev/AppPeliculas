import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '6e6504368960140d6342278f7d645425',
        language: 'es-ES'
    }
})

export default movieDB;