<template>
  <div class="q-pa-md items-center column">
    <q-card flat bordered class="my-card" style="width:850px">

      <div class="q-pa-md q-gutter-sm">
        <h4> Write Rejection Email to the Applicant Here: </h4>
        <q-editor v-model="editor">
        </q-editor>
      </div>
      <q-card-actions class="q-pa-md" vertical align="right">
        <q-btn color="primary" to="reject/sent">Send Email</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const editor = ref(null)
</script>
