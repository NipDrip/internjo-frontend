<template>
  <div class="items-center column" style="width:1200px">
    <div class="q-pa-md items-start q-gutter-md" style="width:1200px">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h2"> {{ internship.job_title }} </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Description: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-pb-md"> Internship Duration: <span class="text-primary text-bold">{{ internship.duration }} months</span> </div>
          <div class="q-pb-md"> Internship Salary: <span class="text-primary text-bold">{{internship.salary_per_month}} JD/month</span></div>
          <div> {{ internship.description }} </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Required Documents: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div v-for="document in internship.documents_needed">
            • {{ document }}
          </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Qualifications: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div v-for="qual in internship.qualifications">
            • {{ qual }}
          </div>
        </q-card-section>

        <q-separator inset />

        <q-card-actions class="text-black" align="right">
          <q-btn class="bg-primary text-white" to="edit">Edit</q-btn>
        </q-card-actions>

      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { format } from 'quasar'
import { api } from 'src/boot/axios';
import { useRoute } from "vue-router";

const internship_id = useRoute().params.id;

const internship = ref({})
api.get('http://localhost:3000/internships/' + internship_id).then((res) => {
  console.log(res)
  internship.value = res.data
})


</script>
