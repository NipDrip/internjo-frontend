<template>
  <div>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card flat bordered class="my-card" style="width:700px">
        <q-card-section>
          <div class="text-h4">Documents Needed For The Application</div>
        </q-card-section>

        <q-separator />

        <div v-for="(app_doc, i) in internship_needed_documents">
          <q-card-section  class="q-pt-none">
            <div class="q-pa-md text-body1">
              Add {{ app_doc }} Here:
            </div>
            <q-file filled v-model=documents[i] label="Appload Here">
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
          <q-btn class="bg-primary text-white" @click="apply" to="apply/thanks">Apply</q-btn>
        </q-card-actions>
      </q-card>

    </div>
  </div>
</template>


<script setup>
  import { ref } from 'vue'
  import { api } from 'src/boot/axios';
  import { useRoute } from "vue-router";

  const internship_id = useRoute().params.id;


  // const account_documents = ref(["Resume", "Cover Letter", "Recommendation Letter"])
  const account_documents = ref([])
  const account_documents_names = ref([])
  api.get('http://localhost:3000/documents/').then((res) => {
    // console.log(res.data)
    for(let i = 0; i < res.data.length; ++i){
      account_documents.value.push({label: res.data[i].name, value: res.data[i].id})
    }
  })

  const internship_needed_documents = ref(["Resume", "Cover Letter"])

  const documents = ref([])
  api.get('http://localhost:3000/internships/' + internship_id).then( (res) => {
    internship_needed_documents.value = res.data.documents_needed
    documents.value = new Array(res.data.documents_needed.length)
  })


  async function apply() {
    // console.log(documents.value)
    let application_id = "";
    await api.post('http://localhost:3000/applications/', {internship_id: internship_id, status: "Under Consideration"}).then( (res) => {
      application_id = res.data.id.toString(10)
    })

    for (let i = 0; i < documents.value.length; ++i){
      if(documents.value[i] == null) continue
      const formData = new FormData()
      formData.append('application_id', application_id)

      if (documents.value[i].value == null){
        formData.append('documents', documents.value[i])
        api.post('http://localhost:3000/application_documents/', formData).then((res) => {
          console.log(res)
        })
      } else{
        api.post('http://localhost:3000/application_documents/' + documents.value[i].value, formData).then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>
