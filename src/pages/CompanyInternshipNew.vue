<template>
  <div class="q-pa-lg text-h2"> Create New Internship </div>
  <div class="items-center column" style="width:1200px">
    <div class="q-pa-md items-start q-gutter-md" style="width:1200px">
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
            <q-input v-model.number="internship.duration" type="number" filled label="Internship Duration in Months"
              style="max-width: 200px" />
          </div>
          <div class="q-pa-md">
            <q-input v-model.number="internship.salary_per_month" filled label="Salary Per Month" style="max-width: 200px" />
          </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Required Documents: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div v-for="(doc, i) in internship.documents_needed">
            <div class="q-py-xs row">
              <q-input class="q-pr-md" style="width:250px" filled v-model=internship.documents_needed[i] :dense="true" />
              <q-btn round color="red" @click="removeDocument(i)" icon="eva-close-outline" />
            </div>
          </div>

          <div class="q-py-xs">
            <q-btn class="bg-secondary text-white" @click="addDocument" icon="add" fab/>
          </div>

        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Qualifications: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div v-for="(qual, i) in internship.qualifications">
            <div class="q-py-xs row">
              <q-input class="q-pr-md" style="width:1000px" filled v-model=internship.qualifications[i] :dense="true" />
              <q-btn round color="red" @click="removeQual(i)" icon="eva-close-outline" />
            </div>
          </div>

          <div class="q-py-xs">
            <q-btn class="bg-secondary text-white" @click="addQual" fab icon="add" />
          </div>
        </q-card-section>

        <q-separator inset />

        <q-card-actions class="text-black" align="right">
          <q-btn class="bg-primary text-white" @click="addInternship($router)"> Post </q-btn>
        </q-card-actions>

      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { format } from 'quasar'
import { api } from 'src/boot/axios';

const internship = ref({
  documents_needed: [],
  qualifications: [],
})

async function addInternship(router) {
  let internship_id
  await api.post('http://localhost:3000/internships/', internship.value).then((res) => {
    console.log(res)
    internship_id = res.data.id
  })
  router.push(internship_id + '/view')
}

function addDocument() {
  internship.value.documents_needed.push("")
}

function removeDocument(i) {
  internship.value.documents_needed.splice(i, 1)
}

function addQual() {
  internship.value.qualifications.push("")
}

function removeQual(i) {
  internship.value.qualifications.splice(i, 1)
}

</script>
