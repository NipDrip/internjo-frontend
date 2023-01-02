<template>
  <div class="items-center column" style="width:1200px">
    <div class="q-pa-md items-start q-gutter-md">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <q-input outlined v-model=internship.job_title label="Job Title" :dense="dense" />
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Description: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-pa-md">
            <q-input v-model=internship.description filled type="textarea" />
          </div>
          <div class="q-pa-md">
            <q-input v-model.number="internship.duration" type="number" filled label="Internship Duration in Months" style="max-width: 200px" />
          </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Required Documents: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-gutter-sm">
            <q-checkbox v-model=internship.resume label="Resume" />
          </div>

          <div class="q-gutter-sm">
            <q-checkbox v-model=internship.cover_letter label="Cover Letter" />
          </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Qualifications: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div v-for="(qual, i) in internship.qualifications">
            <div class="q-py-xs row" >
              <q-input class="q-pr-md" style="width:1000px" filled v-model=internship.qualifications[i] :dense="true"/>
              <q-btn round color="red" @click="removeQual(i)" icon="eva-close-outline" />
            </div>
          </div>

          <div class="q-py-xs">
            <q-btn class="bg-secondary text-white" @click="addQual" >Add Qualifications</q-btn>
          </div>
        </q-card-section>

        <q-separator inset />

        <q-card-actions class="text-black" align="right">
          <q-btn class="bg-primary text-white" to="view">Save & View</q-btn>
          <q-btn class="bg-primary text-white">Save</q-btn>
        </q-card-actions>

      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { format } from 'quasar'

const internship = ref(
  {
    job_title: "Software Engineer",
    company_name: "shariket a7mad jaber lal ta3leem",
    duration: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "abdoun",
    resume: true,
    cover_letter: false,
    qualifications: ["1", "2", "3", "4"],
    days_left: 7,
  },
)

function addQual() {
  internship.value.qualifications.push("")
}

function removeQual(i) {
  internship.value.qualifications.splice(i, 1)
}

</script>
