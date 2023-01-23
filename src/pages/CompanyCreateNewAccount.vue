
<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class="column" style="width: 400px">
      <q-card square bordered class="q-pa-sm shadow-4">

        <q-card-section>
          <h5 class="text-h5 q-my-xs">Fill in the following form to sign up</h5>
        </q-card-section>

        <q-card-section>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input filled v-model="name" label="Company Name *" />
            <q-input filled v-model="phone_number" label="Company Phone Number *" />
            <q-input filled v-model="email" label="Company Email *" />
            <q-input filled type="password" v-model="password" label="Admin Password *" />
            <q-btn @click="signup" label="Sign Up" color="green" style="width: 350px" />
          </q-form>
        </q-card-section>

        <q-separator />

      </q-card>
    </div>
  </q-page>


  <q-dialog v-model="alert">
    <q-card>
      <q-card-section>
        <div class="text-h6">Alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ error_messages }}
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { Cookies } from 'quasar'

const router = useRouter()

const name = ref()
const email = ref()
const phone_number = ref()
const password = ref()
const alert = ref(false)
const error_messages = ref("")

async function signup() {
  let status = null
  let user_id = null
  await api.post('http://localhost:3000/auth', { email: email.value, phone_number: phone_number.value, password: password.value }).then((res) => {
    console.log(res)
    status = res.data.status
    user_id = res.data.data.id
    console.log(res.data.data.id)
  }).catch((e) => {
    error_messages.value = e.response.data.errors.full_messages[0]
    alert.value = true
  })


  if (status == 'success') {
    await api.post('http://localhost:3000/companies', { user_id: user_id, name: name.value }).then((res) => {
      console.log(res)
    })
    router.push({ path: '/login' })
  }


}


</script>
