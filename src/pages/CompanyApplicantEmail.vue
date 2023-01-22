<template>
  <div class="q-pa-md items-center column">
    <q-card flat bordered class="my-card" style="width:850px">

      <div class="q-pa-md q-gutter-sm">
        <h4> Email to the Applicant Here: </h4>
          <q-input v-model="editor" filled type="textarea" />
      </div>
      <q-card-actions class="q-pa-md" vertical align="right">
        <q-btn color="primary" to="email/sent" @click="sendEmail()">Send Email</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { format } from 'quasar'
import { api } from 'src/boot/axios';
import { useRoute } from 'vue-router';
import { extractIdentifiers } from '@vue/compiler-core';

const editor = ref(null)
const internship_id = useRoute().params.id
const application_id = useRoute().params.app_id

function sendEmail() {
  api.put('http://localhost:3000/applications/' + application_id, {message: editor.value}).then( (res) => {
    console.log(res)
  })
}

</script>
