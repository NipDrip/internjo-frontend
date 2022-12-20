<template>
  <div class="row justify-evenly">
    <div class="row" style="width:900px">
      <div v-for="company in companies" class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" style="width:900px">
          <q-card-section class="bg-green text-white">
            <div class="text-h6">{{ company.company_name }}</div>
            <div class="text-subtitle2"> {{ company.location }} </div>
          </q-card-section>

          <q-separator />
          <q-card-section>
            <q-rating size="18px" v-model="stars" :max="5" color="primary" />
            <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
            <q-btn flat class="float-right"> Visit Company Account </q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="q-pa-md" style="width: 650px" align="right">
      <q-card square bordered class="q-pa-sm shadow-4">

        <q-card-section>
          <h5 align="left" class="text-h5 q-my-xs">Search Here</h5>
        </q-card-section>


        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

          <q-input filled v-model="companyName" label="Company Name *" />

          <q-input filled v-model="jobKeywords" label="Job Keywords *" />

          <q-input filled v-model="city" label="Location *" />

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
const companies = ref([
  {
    company_name: "orange",
    description: "dar jaber",
    location: "abdoun",
    rating: 4.5,
  },
  {
    company_name: "zain",
    description: "dar jaber",
    location: "sweifieh",
    rating: 3.6,
  },
  {
    company_name: "sde jjj",
    description: "jjj",
    location: "amman",
    rating: 5,
  },
])

const companyName = ref(null)
const jobKeywords = ref(null)
const city = ref(null)

function onSubmit() {

}


function onReset() {
  companyName.value = null
  jobKeywords.value = null
  city.value = null
}
</script>
