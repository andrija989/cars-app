import axios from 'axios';

export default class CarsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll() {
        return axios.get('cars')
    }
}

export const carsService = new CarsService()