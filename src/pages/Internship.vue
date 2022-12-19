<template>
  <div class="items-center column" style="width:1200px">
    <div class="q-pa-md items-start q-gutter-md">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h2"> {{internship.job_title}} </div>
            <q-btn flat class="bg-white text-primary" to="/student/company">
            {{internship.company_name}} || {{internship.location}}
          </q-btn>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Description: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class ="q-pb-md"> Internship Duration: <span class="text-primary text-bold" >{{internship.duration}} months </span> </div>
          <div> {{internship.description}} </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Required Documents: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div v-for="document in internship.required_documents" >
            • {{document}}
          </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Required Documents: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div v-for="document in internship.required_documents">
            • {{document}}
          </div>
        </q-card-section>

        <q-separator inset/>

        <q-card-section>
          <div class="text-h5"> Qualifications: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div v-for="qual in internship.qualifications">
            • {{qual}}
          </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section class="text-black" align="right">
          <span class="q-pa-md text-bold text-red"> {{internship.days_left}} days left </span>
          <q-btn class="bg-primary text-white" to="/student/internship/apply">Apply Now</q-btn>
        </q-card-section>

      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { format } from 'quasar'
const darko = ref("3")
const internship = ref(
  {
    job_title: "Software Developement Engineer",
    company_name: "shariket a7mad jaber lal ta3leem",
    duration: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "abdoun",
    required_documents: ["Resume", "Cover Letter"],
    qualifications: ["1", "2", "3", "4"],
    days_left: 7,
  },
)

</script>
