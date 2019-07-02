<template>
    <div>
        <ul>
            <li v-for="(car,index) in cars" :key="index">
                {{car}}
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
}
</script>

<style>

</style>
