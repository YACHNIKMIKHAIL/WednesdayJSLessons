import axios from 'axios';

//http://www.omdbapi.com/?apikey=[6161f9e6]&
const configOMB = {
    baseURL: 'http://www.omdbapi.com/?apikey=6161f9e6&s='
};
const key = '';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        axiosInstance.get(title)
            .then(res => res.data)
            .then(data => console.log(data))
            .catch(err => console.log('Please try later ' + err))
    },
    searchFilmsByType: (title: string, type: string) => {
        axiosInstance.get(title || type)
            .then(res => res.data)
            .then(data=>data.data)
    }
};
API.searchFilmsByTitle('Batman')

export default API;
