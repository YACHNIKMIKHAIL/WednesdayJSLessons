import axios from 'axios';
import {Simulate} from "react-dom/test-utils";

//http://www.omdbapi.com/?apikey=[6161f9e6]&
const configOMB = {
    baseURL: 'http://www.omdbapi.com/?apikey=6161f9e6&s='
};
const key = '';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(title)
            .then(res => {
                return res.data
            })
            .then(data => {
                return data
            })
            .catch(err => console.log(err))
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(title || type)
            .then(res => {
                console.log(res.data.Search)
                return res.data
            })
            .catch(err => console.log(err))
    }
};

export default API;
