<template>
    <div>
        
        <form @submit.prevent="handleForm">
            <div>
                <label for="brand">Brand</label>
                <input type="text" id="brand" v-model="newCar.brand" required minlength="3">
            </div>
            <div>
                <label for="model">Model</label>
                <input type="text" id="model" v-model="newCar.model" required minlength="3">
            </div>
            <div>
                <select id="year" v-model="newCar.year" required>
                    <option v-for="(year,index) in years" :key="index" :value="year">
                        {{year}}
                    </option>
                </select>
            </div>
            <div>
                <label for="maxSpeed">Max Speed</label>
                <input type="number" id="maxSpeed" v-model="newCar.maxSpeed">
            </div>
            <div>
                <label for="numberOfDoors">Number of doors</label>
                <input type="number" id="numberOfDoors" v-model="newCar.numberOfDoors" required>
            </div>
            <div>
                <label for="isAutomatic">Automatic or not</label>
                <input type="checkbox" id="isAutomatic" v-model="newCar.isAutomatic" >
            </div>
            <div>
                <h5>Engine Type</h5>
                <label for="diesel">Gasoline</label>
                <input type="radio" id="diesel" value="diesel" v-model="newCar.engine">
                <label for="petrol">Petrol</label>
                <input type="radio" id="petrol" value="petrol" v-model="newCar.engine">
                <label for="electric">Electric</label>
                <input type="radio" id="electric" value="electric" v-model="newCar.engine">
                <label for="hybrid">Hybrid</label>
                <input type="radio" id="hybrid" value="hybrid" v-model="newCar.engine">
            </div>
            <button type="submit">Confirm</button>
            <button @click="reset">Reset</button>
            <button @click="preview">Preview</button>
        </form>
    </div>
</template>

<script>
import { carsService } from '@/services/CarsService'

export default {
    data() {
        return {
            newCar : {
                brand: '',
                model: '',
                year: 0,
                maxSpeed: 0,
                isAutomatic: true,
                engine:'',
                numberOfDoors: 0,
            },
            years : [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
            id: ''
        }
    },
    methods:{
        handleForm() {
            if(this.id) {
                carsService.edit(this.id,this.newCar)
                this.$router.push('/cars')
                return
            }
            carsService.add(this.newCar)
            this.$router.push('/cars')
            .then(response => {
                this.cars = this.cars.filter(car => car.id !== id)
            })
        },

        reset() {
            this.newCar = {
                brand: '',
                model: '',
                year: 0,
                maxSpeed: 0,
                isAutomatic: true,
                engine:'',
                numberOfDoors: 0,
            }
        },

        preview() {
            alert(JSON.stringify(this.newCar, null, 4))
        },

    },
    created() {
        this.id = this.$router.currentRoute.params.id;
        if(this.id) {
            carsService.getSingleCar(this.id)
            .then(response => {
                console.log(response)
                this.newCar = response.data
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

<style>

</style>
