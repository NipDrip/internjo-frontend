<template>
  <div class="row justify-evenly">
    <div class="row" style="width:900px">
      <div v-for="(company, i) in companies" class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" style="width:900px">
          <q-card-section class="bg-green text-white">
            <div class="text-h6">{{ company.name }}</div>
            <div class="text-subtitle2"> {{ company.location }} </div>
          </q-card-section>

          <q-separator />
          <q-card-section>
            <q-rating size="20px" v-model=company.review :max="5" color="primary" icon-selected="star" icon-half="star_half" readonly/>
            <span class="text-caption text-grey q-ml-sm">{{company.review}}</span>
            <q-btn flat class="float-right" @click="follow(i)"> {{company.followed ? 'Unfollow' : 'Follow' }}</q-btn>

            <q-btn flat class="float-right" @click="$router.push('company/'+company.id)"> Visit Company Account </q-btn>
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

          <q-input filled v-model="company_name" label="Company Name *" />

          <q-input filled v-model="location" label="Location *" />

          <div align="left">
            <q-checkbox v-model="followed" label="Followed" />
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

const companies = ref([])
api.get('http://localhost:3000/companies').then((res) => {
  console.log(res)
  companies.value = res.data
})

function follow(i) {
  api.put('http://localhost:3000/followed_companies/'+companies.value[i].id).then((res) => {
    console.log(res)
  })
  companies.value[i].followed = !companies.value[i].followed
}

const company_name = ref(null)
const location = ref(null)
const followed = ref(false)

function onSubmit() {
  api.get('http://localhost:3000/search_companies/', { params: { company_name: company_name.value, location: location.value, followed: followed.value } }).then((res) => {
    console.log(res)
    companies.value = res.data
  })
}


function onReset() {
  company_name.value = null
  location.value = null
  followed.value = false
}
</script>
