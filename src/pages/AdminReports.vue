<template>
  <div v-if="reports.length == 0" class="q-pa-lg">
    <h3> No Reports.</h3>
  </div>
  <div class="row justify-evenly">
    <div class="row" style="width:1200px">
      <div v-for="report in reports" class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card shadow-6" style="width:1200px">

          <q-card-section class="bg-black text-white">
            <div> Report on <span class="text-bold"> {{ report.internship_name }} </span> (ID: {{ report.internship_id }}) at <span class="text-bold"> {{ report.company_name }} </span></div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <div> <span class="text-bold"> Report date: </span>{{ report.report_date }} </div>
          </q-card-section>

          <q-separator />

          <q-card-section >
            <div >
              <div class="text-bold">Subject: </div>
              <div v-html=report.body></div>
            </div>
          </q-card-section>


        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { date, useQuasar } from 'quasar'
import { ref } from 'vue'
import { format } from 'quasar'
import { api } from 'src/boot/axios';

const reports = ref([
  {
    internship_id: 1,
    internship_name: "sde",
    company_name: "amazon",
    date: "1/10/2000",
    subject: "sooooooooooo baaaaaaaad"
  },

])

api.get('http://localhost:3000/reports').then((res) => {
  console.log(res)
  reports.value = res.data
})

</script>
