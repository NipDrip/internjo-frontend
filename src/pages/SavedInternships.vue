<template>

  <div class="row">
    <div v-for="(offer, i) in offers" class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" style="width:500px;">

        <q-card-section class="bg-primary text-white" style="height:80px">
          <div class="text-h6">{{ offer.job_title }} </div>
          <div class="text-subtitle2">{{ offer.company_name }} | {{ offer.location }} </div>
        </q-card-section>

        <q-separator />

        <q-card-section class="q-py-md" style="height:130px">
          <div class="text-h6"> Description </div>
          <div class="ellipsis-3-lines"> {{ offer.description }}</div>
        </q-card-section>

        <q-separator />

        <q-card-actions class="text-black" align="right" style="height:55px">
          <q-btn flat to="internship">Read More</q-btn>
          <q-btn @click="unsave(i)" flat round color="yellow-8"
            :icon="offer.saved ? 'eva-bookmark' : 'eva-bookmark-outline'" />
        </q-card-actions>
      </q-card>
    </div>
  </div>

</template>


<script setup>
import { ref } from 'vue'
import { format } from 'quasar'
import { api } from 'boot/axios'
import { Cookies } from 'quasar'


const offers = ref()

api.get('http://localhost:3000/saved_internships').then((res) => {
    console.log(res)
    offers.value = res.data
  })

function unsave(i) {
  offers.value[i].saved = !offers.value[i].saved
  api.put('http://localhost:3000/saved_internships/' + offers.value[i].id).then((res) => {
    console.log(res)
  })
}

</script>
