<template>

<div class="items-center column">
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card flat bordered class="my-card" style="width:500px">
      <q-card-section>
        <div class="text-h6">Upload Your Documents Here</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-file filled v-model="resume" label="Resume">
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-file filled v-model="coverletter" label="Cover Letter">
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
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
        <q-input outlined class="q-pa-sm" v-model="email" type="email" label="Email" dense />
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
  const resume = ref()
  const coverletter = ref()
  const fname = ref('xd')
</script>
