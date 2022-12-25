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
        <q-btn color="primary" to="review/thanks">submit</q-btn>
      </q-card-actions>

    </q-card>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const rating = ref(null);
  const editor = ref(null)
</script>
