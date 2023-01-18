<template>
  <div class="items-center column" style="width:1200px">
    <div class="q-pa-md items-start q-gutter-md">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h2"> {{internship.job_title}} </div>
            <q-btn flat class="bg-white text-primary" @click="$router.push('/student/company/'+internship.company_id)">
            {{internship.company_name}} || {{internship.location}}
          </q-btn>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Description: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class ="q-pb-md"> Internship Duration: <span class="text-primary text-bold" >{{internship.duration}} months </span> </div>
          <div class="q-pb-md"> Internship Salary: <span class="text-primary text-bold">{{internship.salary_per_month}} JD/month </span></div>
          <div> {{internship.description}} </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Required Documents: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div v-for="document in internship.documents_needed">
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
          <!-- <span class="q-pa-md text-bold text-red"> {{internship.days_left}} days left </span> -->
          <q-btn fab class="bg-primary text-white" @click="$router.push(internship.id+'/apply')">Apply Now</q-btn>

          <q-btn @click="unsave" flat round color="yellow-8"
            :icon="internship.saved ? 'eva-bookmark' : 'eva-bookmark-outline'">
            <q-tooltip>
              Save Internship
            </q-tooltip>
          </q-btn>

          <q-btn flat round color="red-8" icon="eva-alert-circle-outline" @click="$router.push(internship.id+'/report')">
            <q-tooltip>
              Report Company
            </q-tooltip>
          </q-btn>
        </q-card-section>

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
  console.log(res.data)
  internship.value = res.data
})


function unsave() {
  internship.value.saved = !internship.value.saved
  api.put('http://localhost:3000/saved_internships/' + internship_id).then((res) => {
    console.log(res)
  })
}

</script>
