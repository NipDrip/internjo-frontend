<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-black text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Admin Panel
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-btn-dropdown auto-close stretch flat label="Company...">
          <q-list>
            <q-item clickable to="/admin/accounts/company/inactive">
              <q-item-section> Inactive Accounts </q-item-section>
            </q-item>

            <q-item clickable to="/admin/accounts/company/active">
              <q-item-section> Active Accounts </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown auto-close stretch flat label="Student...">
          <q-list>
            <q-item clickable to="/admin/accounts/student/inactive">
              <q-item-section> Inactive Accounts </q-item-section>
            </q-item>

            <q-item clickable to="/admin/accounts/student/active">
              <q-item-section> Active Accounts </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-route-tab to="/admin/reports" label="Reports" />
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
