<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-secondary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          {{ company_name }} Employee
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/company/employee/internships" label="Internships" />
        <q-route-tab to="/company/employee/newapplicants" label="New Applicants" />
        <q-route-tab to="/company/employee/seenapplicants" label="Seen Applicants" />
        <q-route-tab to="/company/employee/reviews" label="Reviews" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" :width="200" :breakpoint="400" elevated>

      <q-scroll-area style="height: calc(100% - 150px); border-right: 1px solid #ddd">

        <q-list padding>

          <q-item clickable v-ripple @click="logout" to="/login">

            <q-item-section avatar>
              <q-icon name="eva-log-out-outline" />
            </q-item-section>

            <q-item-section>
              Logout
            </q-item-section>

          </q-item>



        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { api } from 'src/boot/axios';
import { Cookies } from 'quasar';

const company_name = ref("")
api.get('http://localhost:3000/company').then((res) => {
  console.log(res)
  company_name.value = res.data.name
})

function logout() {
  api.delete('http://localhost:3000/auth/sign_out').then((res) => {
    console.log(res)
    Cookies.remove('id')
    Cookies.remove('uid')
    Cookies.remove('client')
    Cookies.remove('access-token')
    api.defaults.headers.common['uid'] = null
    api.defaults.headers.common['client'] = null
    api.defaults.headers.common['access-token'] = null
  })

}
const leftDrawerOpen = ref(true)
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
