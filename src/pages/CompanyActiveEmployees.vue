<template>
  <div class="row justify-evenly">
    <div class="row" style="width:1200px">
      <q-infinite-scroll :offset="250">
        <div v-for="(employee, i) in active_employees" class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card shadow-6" style="width:1200px">


            <q-card-section class="bg-primary text-white">
              <div class="text-h6"><span class="text-bold"> Name: </span> {{ employee.name }} </div>
            </q-card-section>

            <q-card-section class="text-black">
              <div> <span class="text-bold"> Email: </span> {{ employee.email }}</div>
              <div> <span class="text-bold"> Phone Number: </span> {{ employee.phone_number }}</div>
            </q-card-section>

            <q-card-actions>
              <q-btn fab class="bg-red text-white" @click="deactivate(i)"> Deactivate </q-btn>
            </q-card-actions>
          </q-card>
        </div>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { format } from 'quasar'
import { api } from 'src/boot/axios';

const active_employees = ref([])
api.get('http://localhost:3000/active_employees').then((res) => {
  console.log(res)
  active_employees.value = res.data
})

async function deactivate(i) {
  console.log(active_employees.value[i].id)
  await api.delete('http://localhost:3000/deactivate_employee/' + active_employees.value[i].id)
  active_employees.value.splice(i, 1)

}

</script>
