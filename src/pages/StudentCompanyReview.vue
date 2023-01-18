<template>
  <div class="q-pa-md items-center column">
    <q-card flat bordered class="my-card" style="width:850px">

      <div class="q-pa-md q-gutter-sm">
        <h4> Write Review here </h4>
        <q-editor v-model="editor">
        </q-editor>
      </div>
      <div class="q-pa-md q-gutter-sm">
        <span class="text-h6"> Rate your experience out of 5: </span> <br>
        <q-rating v-model="rating" size="2em" :max="5" color="primary"/>
      </div>
      <q-card-actions class="q-pa-md" vertical align="right">
        <q-btn color="primary" @click="submitReview" to="review/thanks">submit</q-btn>
      </q-card-actions>

    </q-card>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { api } from 'src/boot/axios';
  import { useRoute } from "vue-router";
  const application_id = useRoute().params.id;
  const rating = ref(null)
  const editor = ref(null)

  const application = ref({})
  api.get('http://localhost:3000/applications/'+application_id).then((res) => {
    application.value = res.data
  })

  function submitReview() {
    // console.log(editor.value);
    api.post('http://localhost:3000/reviews/', {company_id: application.value.company_id, body: editor.value, rating: rating.value, application_id: application_id}).then((res) => {
      console.log(res)
      console.log("review sent")
    })
  }
</script>
