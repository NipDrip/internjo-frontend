<template>
  <div>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card flat bordered class="my-card" style="width:700px">
        <q-card-section>
          <div class="text-h4">Documents Needed For The Application</div>
        </q-card-section>

        <q-separator />

        <div v-for="(app_doc, i) in application_documents">
          <q-card-section  class="q-pt-none">
            <div class="q-pa-md text-body1">
              Add {{ app_doc }} Here:
            </div>
            <q-file filled v-model=documents.resume label="Appload Here">
              <template v-slot:prepend>
                <q-icon name="cloud_upload" />
              </template>
            </q-file>

            <div class="q-pt-md text-body1">
              <q-select filled v-model="documents[i]" label="Or Add Document From Your Profile" :options=account_documents behavior="dialog"/>
            </div>

          </q-card-section>

          <q-separator inset/>
        </div>


        <q-card-actions vertical align="right">
          <q-btn class="bg-primary text-white" to="apply/thanks">Apply</q-btn>
        </q-card-actions>
      </q-card>

    </div>
  </div>
</template>


<script setup>
  import { ref } from 'vue'
  import { api } from 'src/boot/axios';

  //api call
  const account_documents = ref(["Resume", "Cover Letter", "Recommendation Letter"])
  //api call
  const application_documents = ref(["Resume", "Cover Letter"])
  const documents = ref([null, null])

</script>
