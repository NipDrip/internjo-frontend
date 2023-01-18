<template>
<div class="items-center column">

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card flat bordered class="my-card" style="width:500px">
      <q-card-section>
        <div class="text-h6">Contact Information</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-input outlined class="q-pa-sm" v-model="name" label="Name" dense readonly />
        <q-input outlined class="q-pa-sm" v-model="email" type="email" label="Email" dense readonly />
        <q-input outlined class="q-pa-sm" v-model="phone_number" label="Phone Number" dense readonly />
      </q-card-section>

      <q-separator inset />

    </q-card>
  </div>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card flat bordered class="my-card" style="width:500px">
      <q-card-section>
        <div class="text-h6">Add Documents to Your Profile</div>
      </q-card-section>

      <q-card-section v-for="(doc , i) in documents" class="q-pt-none">
        <div class="q-py-xs row">
          <div>
            <q-file filled v-model=documents[i] :label=doc style="width:350px">
              <template v-slot:prepend>
                <q-icon name="cloud_upload" />
              </template>
            </q-file>
          </div>
          <div class="q-px-md">
            <q-btn round color="red" @click="removeDocument(i)" icon="eva-close-outline" />
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="q-py-xs">
          <q-btn class="bg-secondary text-white" @click="addDocument" icon="add" fab />
        </div>
      </q-card-section>

      <q-separator inset />

      <q-card-actions vertical align="right">
        <q-btn class="bg-green text-white" @click="saveDocuments">Save Documents</q-btn>
      </q-card-actions>

    </q-card>
  </div>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card flat bordered class="my-card" style="width:500px" >

      <q-card-section>
        <div class="text-h6"> Change Password </div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-input outlined class="q-pa-sm" v-model="old_password" type="password" label="Old Password" dense />
        <q-input outlined class="q-pa-sm" v-model="new_password1" type="password" label="New Password" dense />
        <q-input outlined class="q-pa-sm" v-model="new_password2" type="password" label="Confirm New Password" dense />
      </q-card-section>

      <q-separator inset />

      <q-card-actions vertical align="right">
        <q-btn class="bg-green text-white">Save Changes</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</div>
</template>


<script setup>
  import { ref } from 'vue'
  import { Cookies } from 'quasar';
  import { api } from 'src/boot/axios';

  const documents = ref([{}])
  let need_to_remove = []

  api.get('http://localhost:3000/documents').then((res) => {
    documents.value = res.data
    console.log(res.data)
  })

  function addDocument() {
    documents.value.push(null)
  }

  function removeDocument(i) {
    if (documents.value[i].id != null) need_to_remove.push(documents.value[i].id)
    documents.value.splice(i, 1)
  }

  async function saveDocuments() {

    console.log("need to remove")
    console.log(need_to_remove)
    for (let i = 0; i < need_to_remove.length; ++i) {
      await api.delete('http://localhost:3000/documents/'+need_to_remove[i]).then((res) => {
        console.log(res)
      })
    }

    console.log("documents:")
    console.log(documents.value)
    for (let i = 0; i < documents.value.length; ++i) {
      if(documents.value[i] == null) continue
      if(documents.value[i].id != null) continue
      const formData = new FormData()
      formData.append('documents', documents.value[i])
      await api.post('http://localhost:3000/documents/', formData).then((res) => {
        console.log(res)
      })
    }

    location.reload();
  }

  const name = ref("")
  const email = ref("")
  const phone_number = ref("")

  const old_password = ref("")
  const new_password1 = ref("")
  const new_password2 = ref("")

  api.get('http://localhost:3000/students/' + Cookies.get('id')).then((res) => {
    console.log(res)
    name.value = res.data.name
    email.value = res.data.email
    phone_number.value = res.data.phone_number
  })



</script>
