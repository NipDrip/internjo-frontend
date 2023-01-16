<template>

<div class="items-center column">
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card flat bordered class="my-card" style="width:500px">
      <q-card-section>
        <div class="text-h6">Add Documents to Your Profile</div>
      </q-card-section>

      <q-card-section v-for="(doc , i) in profile.documents" class="q-pt-none">
        <div class="q-py-xs row">
          <div>
            <q-file filled v-model=profile.documents[i] :label=doc style="width:350px">
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
    </q-card>
  </div>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card flat bordered class="my-card" style="width:500px" >
      <q-card-section>
        <div class="text-h6">Contact Information</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section class="row" style >
        <q-input outlined class="q-pa-sm" v-model="fname" label="First Name" dense/>
        <q-input outlined class="q-pa-sm" v-model="lname" label="Last Name" dense />
        <q-input outlined class="q-pa-sm" v-model="email" type="email" label="Email" dense readonly/>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div class="text-h6"> Change Password </div>
        <q-input outlined class="q-pa-sm" v-model="oldpass" type="password" label="Old Password" dense />
        <q-input outlined class="q-pa-sm" v-model="newpass1" type="password" label="New Password" dense />
        <q-input outlined class="q-pa-sm" v-model="newpass2" type="password" label="Confirm New Password" dense />
      </q-card-section>

      <q-card-actions vertical align="right">
        <q-btn class="bg-orange">Save Changes</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</div>
</template>


<script setup>
  import { ref } from 'vue'

  function addDocument() {
    profile.value.documents.push("")
  }

  function removeDocument(i) {
    profile.value.documents.splice(i, 1)
  }

  const profile = ref(
    {
      documents: ["resume", "cover_letter"],
    }
  )
  const fname = ref('xd')
</script>
