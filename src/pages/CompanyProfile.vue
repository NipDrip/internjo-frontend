<template>
  <div class="items-center column" style="width:1200px">
    <div class="q-pa-md items-start q-gutter-md" style="width:1200px">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h2"> Company info </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> About  {{ company.name }}:</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-pa-md">
            <q-input v-model=company.about filled type="textarea" />
          </div>
          <div class="q-pa-md">
            <q-input v-model=company.location filled label="Location" style="max-width: 200px" />
          </div>
        </q-card-section>
        <q-separator inset/>

        <q-card-actions align="right">
          <q-btn class="bg-secondary text-white" style="width:100px"> Save </q-btn>
        </q-card-actions>

      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { format } from 'quasar'

const company = ref(
  {
    name: "shariket a7mad jaber lal ta3leem",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "abdoun",
  },
  )
  const is_readonly = ref(true)

</script>
