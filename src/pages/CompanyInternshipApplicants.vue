<template>
  <div class="row justify-evenly">
    <h3>Applicants for {{ internship_name }}</h3>
    <div class="row" style="width:1200px">
      <q-infinite-scroll @load="onLoad" :offset="250">
        <div v-for="application in applications" class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card shadow-6" style="width:1200px">


            <q-card-section class="bg-primary text-white">
            <div class="text-h6">{{ application.job_title }} (ID: {{ application.id }})</div>
            </q-card-section>

            <q-card-section class="text-black">
              <div> <span class="text-bold"> Name: </span> {{ application.student_name}} </div>
              <div> <span class="text-bold"> Email: </span> {{ application.student_email }}</div>
              <div> <span class="text-bold"> Phone Number: </span> {{ application.phone_number }}</div>
              <div class="q-pt-sm"> <q-btn class="bg-primary text-yellow" @click="downloadDocuments(application.documents)">Download Documents</q-btn> </div>
            </q-card-section>
            <q-separator inset />
            <q-card-actions align="right">
              <q-btn class="bg-green text-white" to="applicant/1/email" @click="sendEmail(application.id, application.internship_id, $router)"> Send Email to Applicant</q-btn>


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
import { api } from 'src/boot/axios';
import { exportFile } from 'quasar'
import { useRoute } from 'vue-router';

const internship_id = useRoute().params.id

const applications = ref([])
api.get('http://localhost:3000/internship_applications/'+ internship_id).then((res) => {
  console.log(res.data)
  applications.value = res.data
})

const internship_name = ref("")
api.get('http://localhost:3000/internships/' + internship_id).then((res) => {
  internship_name.value = res.data.job_title
})

function sendEmail(application_id, internship_id, router) {
  router.push('internship/' + internship_id + '/applicant/' + application_id + '/email');
}

// async function removeCard(i, application_id) {
//   await api.delete('http://localhost:3000/applications/' + application_id)
//   applications.value.splice(i, 1);
// }

function downloadDocuments(documents) {
  for (let i = 0; i < documents.length; ++i) {
    const status = exportFile(documents[i].name, documents[i].document)
  }
}
</script>
