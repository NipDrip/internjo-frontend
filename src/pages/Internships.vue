<template>
  <div class="row justify-evenly">
    <div class="row" style="width:1000px">
      <div v-for="(offer, i) in offers" class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" style="width:450px;">

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
            <q-btn flat @click="$router.push('internship/'+offer.id)">Read More</q-btn>
            <q-btn @click="unsave(i)" flat round color="yellow-8"
              :icon="offer.saved ? 'eva-bookmark' : 'eva-bookmark-outline'" />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <div class="q-pa-md" style="width: 650px" align="right">
      <q-card square bordered class="q-pa-sm shadow-4">

        <q-card-section>
          <h5 align="left" class="text-h5 q-my-xs">Search Here</h5>
        </q-card-section>


        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

          <q-input filled v-model="jobKeywords" label="Job Keywords *" />

          <q-input filled v-model="company" label="Company *" />

          <q-input filled v-model="city" label="City *" />

          <div align="left">
              <q-checkbox v-model="payed" label="Payed" />
          </div>

          <div>
            <q-btn label="Filter" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>

        </q-form>
      </q-card>
    </div>

  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { format } from 'quasar'
import { api } from 'src/boot/axios';
import routes from 'src/router/routes';

const offers = ref()
api.get('http://localhost:3000/internships').then((res) => {
  console.log(res)
  offers.value = res.data
})

function unsave(i) {
  offers.value[i].saved = !offers.value[i].saved
  api.put('http://localhost:3000/saved_internships/' + offers.value[i].id).then((res) => {
    console.log(res)
  })
}

const jobKeywords = ref(null)
const company = ref(null)
const city = ref(null)
const payed = ref(false)

function onSubmit() {

}

function onReset() {
  jobKeywords.value = null
  company.value = null
  city.value = null
  payed.value = false
}
</script>
