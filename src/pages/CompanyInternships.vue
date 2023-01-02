<template>
  <div class="row justify-evenly">
    <div class="row" style="width:1200px">
      <q-infinite-scroll @load="onLoad" :offset="250">
        <div v-for="internship in internships" class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card shadow-6" style="width:1200px">


            <q-card-section class="bg-teal text-white">
              <div class="text-h6">{{internship.job_title}}</div>
              <div class="text-subtitle2"> {{ internship.date}} </div>
              <div class="text-subtitle2"> {{ internship.location }} </div>
            </q-card-section>

            <q-card-actions class="text-black" align="right">
              <q-btn flat to="internship/edit">Edit Internship</q-btn>
              <q-btn flat to="internship/applicants">applicants</q-btn>
            </q-card-actions>

          </q-card>
        </div>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="secondary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { format } from 'quasar'
const internships = ref([
  {
    job_title: "Software Engineer",
    location: "abdoun",
    last_edit: "Oct 13, 2022"
  },
  {
    job_title: "Software Engineer",
    location: "abdoun",
    last_edit: "Oct 13, 2022"
  },
  {
    job_title: "Software Engineer",
    location: "abdoun",
    last_edit: "Oct 13, 2022"
  },
  {
    job_title: "Software Engineer",
    location: "abdoun",
    last_edit: "Oct 13, 2022"
  },
  {
    job_title: "Software Engineer",
    location: "abdoun",
    last_edit: "Oct 13, 2022"
  },
])
</script>
