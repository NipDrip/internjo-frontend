<template>
  <div> <router-view /> </div>

</template>

<script setup>
  import { api } from './boot/axios';
  // function signin (){
    // api.post('http://localhost:3000/auth/sign_in', {email: "jaber@hammoudeh.com", password: 123123}).then((res) => {
    //     console.log(res)
    //     api.defaults.headers.common['uid'] = res.headers['uid']
    //     api.defaults.headers.common['client'] = res.headers['client']
    //     api.defaults.headers.common['access-token'] = res.headers['access-token']
    //   })
  // }
  // api.get('http://localhost:3000/saved_internships').then((res) => { console.log(res) })
function getSaved() {
}
</script>
