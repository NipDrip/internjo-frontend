<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          InternJo
        </q-toolbar-title>

      </q-toolbar>

      <q-tabs align="left">
        <q-btn-dropdown stretch flat icon="eva-bell">
          <q-list>
            <q-item v-for="notification in notifications" class="ellipsis-3-lines" clickable style="width:350px">
              <div class="text-caption">{{ notification.title }}</div>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-route-tab to="/student/home" label="Home" />
        <q-route-tab to="/student/internships" label="Internships" />
        <q-route-tab to="/student/discovercompanies" label="Discover Companies" />
        <q-route-tab to="/student/applications" label="Applications" />

      </q-tabs>

    </q-header>

    <q-drawer v-model="leftDrawerOpen" :width="200" :breakpoint="400" elevated>

      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Mohammad Al-Kilani</div>
          <div>@shanks</div>
        </div>
      </q-img>

      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">

        <q-list padding>

          <q-item clickable v-ripple to="/student/profile">

            <q-item-section avatar>
              <q-icon name="eva-person" />
            </q-item-section>

            <q-item-section>
              Profile
            </q-item-section>

          </q-item>

          <q-item clickable v-ripple to="/student/savedinternships">

            <q-item-section avatar>
              <q-icon name="eva-bookmark" />
            </q-item-section>

            <q-item-section>
              Saved Internships
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
const notifications = ref([
  {
    title: "Orange has a new Software Engineering Intern position",
  },
  {
    title: "Orange has a new Software Engineering Intern position",
  },
  {
    title: "Orange has a new Software Engineering Intern position",
  },

])

const leftDrawerOpen = ref(true)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
