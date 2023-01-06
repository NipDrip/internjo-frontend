<template>
  <div>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card flat bordered class="my-card" style="width:700px">
        <q-card-section>
          <div class="text-h4">Documents Needed For The Application</div>
        </q-card-section>

        <q-separator />

        <q-card-section class="q-pt-none">
          <div class="q-pa-md text-body1">
            Add Resume Here:
          </div>
          <q-file filled v-model=documents.resume label="Resume">
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
          </q-file>

          <div class="q-pt-md text-body1">
            <q-btn class="bg-green text-white"> or add resume uploaded on your profile </q-btn>
          </div>

        </q-card-section>

        <q-separator inset/>

        <q-card-section class="q-pt-none">
          <div class="q-pa-md text-body1">
            Add Cover Letter Here:
          </div>
          <q-file filled v-model=documents.coverletter label="Cover Letter">
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
          </q-file>

          <div class="q-pt-md text-body1">
            <q-btn class="bg-green text-white"> or add cover letter uploaded on your profile </q-btn>
          </div>
        </q-card-section>

        <q-separator inset/>

        <q-card-actions vertical align="right">
          <q-btn class="bg-primary text-white" to="apply/thanks">Apply</q-btn>
        </q-card-actions>
      </q-card>

    </div>
  </div>
</template>


<script setup>
  import { ref } from 'vue'
  const documents = ref(
    {
      resume: null,
      coverletter: null,
    }
  )
</script>
