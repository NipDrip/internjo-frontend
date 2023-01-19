<template>
  <div class="items-center column" style="width:1200px">
    <div class="q-pa-md items-start q-gutter-md" style="width:1200px">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h2"> About Us </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> About  {{ company.name }}:</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-pa-md">
            <q-input v-model=company.about_us filled type="textarea" />
          </div>
          <div class="q-pa-md">
            <q-input v-model=company.location filled label="Location" style="max-width: 200px" />
          </div>
        </q-card-section>
        <q-separator inset/>

        <q-card-actions align="right">
          <q-btn class="bg-secondary text-white" style="width:100px" @click="saveChanges"> Save </q-btn>
        </q-card-actions>

      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { format } from 'quasar'
import { api } from 'src/boot/axios';

const company = ref({})
api.get('http://localhost:3000/company').then((res) => {
  company.value = res.data
})

function saveChanges() {
  api.put('http://localhost:3000/company_update', {about_us: company.value.about_us, location:company.value.location})
}

</script>
