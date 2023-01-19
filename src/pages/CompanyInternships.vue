<template>

  <div class="row justify-evenly">
    <div class="row" style="width:1200px">
      <q-page>
      <q-infinite-scroll @load="onLoad" :offset="250">
        <div v-for="internship in internships" class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card shadow-6" style="width:1200px">


            <q-card-section class="bg-secondary text-white">
              <div class="text-h6">{{internship.job_title}}</div>
              <div class="text-subtitle2"> {{ internship.date}} </div>
            </q-card-section>

            <q-card-actions class="text-black" align="right">
              <q-btn flat @click="$router.push('internship/' + internship.id + '/edit')">Edit Internship</q-btn>
              <q-btn flat @click="$router.push('internship/' + internship.id + '/applicants')">View Applicants</q-btn>
            </q-card-actions>

          </q-card>
        </div>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="secondary" size="40px" />
          </div>
        </template>

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn fab icon="add" color="primary" @click="$router.push('internship/new')">
            <q-tooltip>
              New Position
            </q-tooltip>
          </q-btn>
        </q-page-sticky>

      </q-infinite-scroll>
    </q-page>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { format } from 'quasar'
import { api } from 'src/boot/axios';

const internships = ref()
api.get('http://localhost:3000/internships').then((res) => {
  console.log(res)
  internships.value = res.data
})
</script>
