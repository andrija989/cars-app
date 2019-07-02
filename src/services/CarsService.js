import axios from 'axios';

export default class CarsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll() {
        return axios.get('cars')
    }
    add (newCar) {
        axios.post(`cars` ,newCar)
        .then(response => {
            console.log(response)
        })
        .catch(e => {
            console.log(e)
        })
    }
    getSingleCar(id) {
        return axios.get(`cars/${id}`)
    }

    edit(id,newCar) {
        axios.put(`cars/${id}`,newCar)
        .then(response => {
            console.log(response)
        })
        .catch(e => {
            console.log(e)
        })
    }
}

export const carsService = new CarsService()