
<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class="column" style="width: 450px">
      <q-card square bordered class="q-pa-sm shadow-4">

        <q-card-section>
          <h5 class="text-h5 q-my-xs">Login to your InternJo account</h5>
        </q-card-section>

        <q-card-section>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input filled v-model="email" label="Your Email *" />
            <q-input filled type="password" v-model="password" label="Password *" />
            <q-btn @click="login" label="Login" color="primary" style="width: 400px" />
          </q-form>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <div class="q-py-xs">
            <q-btn  color="green" to="/signupstudent" label="Create new account (Students)" style="width: 400px"/>
          </div>
          <div class="q-py-xs">
            <q-btn color="green" to="/signupcompany" label="Create new account (Company)" style="width: 400px" />
          </div>
          <div class="q-py-xs">
            <q-btn color="green" to="/signupemployee" label="Create new account (Employee at a Company)" style="width: 400px" />
          </div>

        </q-card-section>

      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { Cookies } from 'quasar'

Cookies.remove('id')
Cookies.remove('uid')
Cookies.remove('client')
Cookies.remove('access-token')
api.defaults.headers.common['uid'] = null
api.defaults.headers.common['client'] = null
api.defaults.headers.common['access-token'] = null

const router = useRouter()
const email = ref()
const password = ref()

function login (){
    api.post('http://localhost:3000/auth/sign_in', { email: email.value, password: password.value }).then(async (res) => {
      console.log(res)
      Cookies.set('id', res.data.data.id)
      Cookies.set('uid', res.headers['uid'])
      Cookies.set('client', res.headers['client'])
      Cookies.set('access-token', res.headers['access-token'])
      api.defaults.headers.common['uid'] = Cookies.get('uid')
      api.defaults.headers.common['client'] = Cookies.get('client')
      api.defaults.headers.common['access-token'] = Cookies.get('access-token')

      let user_status = ""

      await api.get('http://localhost:3000/active').then((res2) => {
        user_status = res2.data.status
      })

      if (user_status == "user inactive") {
        Cookies.remove('id')
        Cookies.remove('uid')
        Cookies.remove('client')
        Cookies.remove('access-token')
        api.defaults.headers.common['uid'] = null
        api.defaults.headers.common['client'] = null
        api.defaults.headers.common['access-token'] = null

        router.push({ path: '/inactive' })
        return
      }

      if(res.data.data.entity_name == 'student')
        router.push({ path: '/student' })

      if (res.data.data.entity_name == 'company')
        router.push({ path: '/company/admin' })

      if (res.data.data.entity_name == 'employee'){
        router.push({ path: '/company/employee' })
      }

      if (res.data.data.entity_name == 'admin') {
        router.push({ path: '/admin' })
      }
})
}
</script>
