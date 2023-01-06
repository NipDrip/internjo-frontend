<template>
  <div class="row justify-evenly">
    <div class="row" style="width:1200px">
      <div v-for="application in applications" class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card shadow-6" style="width:1200px">

          <q-card-section>
            <div class="text-bold"> {{application.status}} </div>
          </q-card-section>

          <q-separator />
          <q-card-section class="bg-teal text-white">
            <div class="text-h6">{{ application.company_name }} | {{application.job_title}}</div>
            <div class="text-subtitle2"> {{ application.date}} </div>
            <div class="text-subtitle2"> {{ application.location }} </div>
          </q-card-section>

          <q-card-actions v-if="application.status=='Accepted'" class="text-black" align="right" >
            <q-btn flat to="company/review">Review Company</q-btn>
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
const applications = ref([
  {
    status: "No longer under consideration",
    job_title: "Software Engineer",
    company_name: "Orange",
    location: "abdoun",
    date: "Oct 13, 2022"
  },
  {
    status: "Accepted",
    job_title: "Sales Offices",
    company_name: "Maqsam",
    location: "abdoun",
    date: "Oct 13, 2022"
  },
  {
    status: "No longer under consideration",
    job_title: "Software Engineer",
    company_name: "Maqsam",
    location: "abdoun",
    date: "Oct 13, 2022"
  },
  {
    status: "No longer under consideration",
    job_title: "Software Engineer",
    company_name: "google",
    location: "abdoun",
    date: "Oct 13, 2022"
  },
])

const jobKeywords = ref(null)
const company = ref(null)
const city = ref(null)

function onSubmit() {

}

function onReset() {
  jobKeywords.value = null
  company.value = null
  city.value = null
}
</script>
