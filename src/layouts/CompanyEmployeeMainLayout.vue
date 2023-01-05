<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-secondary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          {{ company.name }} Employee
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/company/employee/internships" label="Internships" />
        <q-route-tab to="/company/employee/applicants" label="Applicants" />
        <q-route-tab to="/company/employee/reviews" label="Reviews" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" :width="200" :breakpoint="400" elevated>

      <q-scroll-area style="height: calc(100% - 150px); border-right: 1px solid #ddd">

        <q-list padding>

          <q-item clickable v-ripple>

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
const company = ref(
  {
    name: "Amazon",
  }
)
const leftDrawerOpen = ref(true)
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
