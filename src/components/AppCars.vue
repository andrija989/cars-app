<template>
    <div>
        <ul>
            <li v-for="(car,index) in cars" :key="index">
                {{car}}
                <router-link :to="routeToEdit(car)">Edit</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { carsService } from '@/services/CarsService'

export default {
    data() {
        return {
            cars : []
        }
    },

    created () {
        carsService.getAll()
            .then(response => {
            this.cars = response.data
            
            }).catch(e => {
            console.log(e)
        })
      
    },

    methods: {
       routeToEdit (car) {
            return `/edit/${car.id}`
    }
  }
}
</script>

<style>

</style>
