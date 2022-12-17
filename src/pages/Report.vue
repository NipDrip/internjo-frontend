<template>
  <div class="q-pa-md items-center column">
    <q-card flat bordered class="my-card" style="width:850px">

      <div class="q-pa-md q-gutter-sm">
        <h4> Write Report Here </h4>
        <q-editor v-model="editor">
        </q-editor>
      </div>
      <q-card-actions class="q-pa-md" vertical align="right">
        <q-btn color="primary">Send Report</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      editor: ref('')
    }
  }
}
</script>
