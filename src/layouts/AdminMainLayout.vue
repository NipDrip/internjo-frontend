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
        <div>
          <q-route-tab to="/admin/accounts/company/inactive" label="Company Inactive Accounts" />
          <q-route-tab to="/admin/accounts/company/active" label="Company Active Accounts" />
        </div>
        <div>
          <q-route-tab to="/admin/accounts/student/inactive" label="Student Inactive Accounts" />
          <q-route-tab to="/admin/accounts/student/active" label="Student active Accounts" />
        </div>
        <q-route-tab to="/admin/reports" label="Reports" />
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
