<template>
  <div v-if="applications.length==0" class="q-pa-lg">
    <h3>You have no applications at the moment.</h3>
  </div>
  <div class="row justify-evenly">
    <div class="row" style="width:1200px">
      <div v-for="application in applications" class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card shadow-6" style="width:1200px">

          <q-card-section>
            <div class="text-bold"> {{application.status}} </div>
          </q-card-section>

          <q-separator />
          <q-card-section class="bg-teal text-white">
            <div class="text-h6">{{ application.company_name }} | {{application.position}}</div>
            <div class="text-subtitle2"> {{ application.date}} </div>
            <div class="text-subtitle2"> {{ application.location }} </div>
          </q-card-section>

          <q-card-actions class="text-black" align="right" >
            <q-btn flat @click="$router.push('application/' + application.id + '/review')">Review Company</q-btn>
          </q-card-actions>

        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { format } from 'quasar'
import { api } from 'src/boot/axios';
// @click="$router.push('applications/'+application.id+'review')"
const applications = ref([])

api.get('http://localhost:3000/applications/').then( (res) => {
  console.log(res)
  applications.value = res.data
})
</script>
