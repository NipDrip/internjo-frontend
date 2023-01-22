<template>
  <div class="row justify-evenly">
    <div class="row" style="width:1200px">
      <q-infinite-scroll :offset="250">
        <div v-for="(account, i) in inactive_accounts" class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card shadow-6" style="width:1200px">


            <q-card-section class="bg-black text-white">
              <div class="text-h6"><span class="text-bold"> Company: </span> {{ account.name }} </div>
            </q-card-section>

            <q-card-section class="text-black">
              <div> <span class="text-bold"> Email: </span> {{ account.email }}</div>
              <div> <span class="text-bold"> Phone Number: </span> {{ account.phone_number }}</div>
            </q-card-section>

            <q-card-actions>
              <q-btn fab class="bg-green text-white" @click="activate(i)"> Activate </q-btn>
            </q-card-actions>
          </q-card>
        </div>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="black" size="40px" />
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

const inactive_accounts = ref([
  {
    email: "ok@ok.com",
    phone_number: "123123123",
    company_name: "amazon lel ta3leem"
  },

])
api.get('http://localhost:3000/inactive_companies').then((res) => {
  console.log(res)
  inactive_accounts.value = res.data
})

async function activate(i) {
  await api.put('http://localhost:3000/activate_company/' + inactive_accounts.value[i].id)
  inactive_accounts.value.splice(i, 1)

}



</script>
