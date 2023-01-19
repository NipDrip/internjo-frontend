<template>
  <div class="row justify-evenly">
    <div class="row" style="width:1200px">
      <q-infinite-scroll @load="onLoad" :offset="250">
        <div v-for="application in applications" class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card shadow-6" style="width:1200px">


            <q-card-section class="bg-primary text-white">
              <div class="text-h6">{{ application.job_title }}</div>
            </q-card-section>

            <q-card-section class="text-black">
              <div> <span class="text-bold"> Name: </span> {{ application.student.first_name }} {{ application.student.last_name }} </div>
              <div> <span class="text-bold"> Email: </span> {{ application.student.email }}</div>
              <div> <span class="text-bold"> Phone Number: </span> {{ application.student.phone_number }}</div>
              <div class="q-pt-sm"> <q-btn class="bg-primary text-yellow">Download Documents</q-btn> </div>
            </q-card-section>
            <q-separator inset />
            <q-card-actions align="right" >
              <q-btn class="bg-green text-white" to="internship/1/applicant/1/email"> Send Email to Applicant</q-btn>
              <q-btn class="bg-red text-white"> Remove card</q-btn>

            </q-card-actions>

          </q-card>
        </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
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

const applications = ref([
  {
    job_title: "Software Engineer",
    location: "abdoun",
    student:
    {
      first_name: "ahmad",
      last_name: "hammoudeh",
      email: "ahmad123hammoudeh@gmail.com",
      phone_number: "+962790898205",
    }
  },
  {
    job_title: "Software Engineer",
    location: "abdoun",
    student:
    {
      first_name: "ahmad",
      last_name: "hammoudeh",
      email: "ahmad123hammoudeh@gmail.com",
      phone_number: "+962790898205",
    }
  },
  {
    job_title: "Software Engineer",
    location: "abdoun",
    student:
    {
      first_name: "ahmad",
      last_name: "hammoudeh",
      email: "ahmad123hammoudeh@gmail.com",
      phone_number: "+962790898205",
    }
  },
  {
    job_title: "Software Engineer",
    location: "abdoun",
    student:
    {
      first_name: "ahmad",
      last_name: "hammoudeh",
      email: "ahmad123hammoudeh@gmail.com",
      phone_number: "+962790898205",
    }
  },
])
</script>
