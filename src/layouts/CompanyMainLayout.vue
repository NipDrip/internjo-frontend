<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-secondary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          {{company.name}}
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="reviews" label="Reviews" />
        <q-route-tab to="internships" label="Posted Internships" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
  import { ref } from 'vue'
  const company = ref(
    {
      name: "Orange",
    }
)
</script>
