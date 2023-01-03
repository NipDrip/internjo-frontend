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
        <q-route-tab to="/admin/validations" label="Validations" />
        <q-route-tab to="/admin/reports" label="Reports" />
        <q-route-tab to="/admin/accounts/company" label="Company Accounts" />
        <q-route-tab to="/admin/accounts/student" label="Student Accounts" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
</script>
