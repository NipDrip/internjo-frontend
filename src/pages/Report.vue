<template>
  <div class="q-pa-md items-center column">
    <q-card flat bordered class="my-card" style="width:850px">

      <div class="q-pa-md q-gutter-sm">
        <h4> Write Report Here </h4>
        <q-editor v-model="editor">
        </q-editor>
      </div>
      <q-card-actions class="q-pa-md" vertical align="right">
        <q-btn color="primary" @click="sendReport" to="report/thanks">Send Report</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { api } from 'src/boot/axios';
  import { useRoute } from "vue-router";

  const internship_id = useRoute().params.id;
  const editor = ref(null)

  function sendReport() {
    api.post('http://localhost:3000/reports/', { body: editor.value, internship_id: internship_id }).then((res) => {
      console.log(res)
    })
  }
</script>
