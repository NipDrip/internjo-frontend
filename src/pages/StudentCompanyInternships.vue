<template>
  <div class="q-pa-md text-h3">
    Internships at {{ internships[0].company_name}}
  </div>
  <div class="row">
    <div v-for="(internship, i) in internships" class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" style="width:500px;">

        <q-card-section class="bg-primary text-white" style="height:80px" >
          <div class="text-h6">{{internship.job_title}} </div>
          <div class="text-subtitle2">{{internship.company_name}} | {{internship.location}} </div>
        </q-card-section>

        <q-separator />

        <q-card-section class="q-py-md" style="height:130px" >
          <div class="text-h6"> Description </div>
          <div class="ellipsis-3-lines"> {{internship.description}}</div>
        </q-card-section>

        <q-separator />

        <q-card-actions class="text-black" align="right" style="height:55px">
          <q-btn flat @click="$router.push('/student/internship/'+internship.id)">Read More</q-btn>
          <q-btn @click="unsave(i)" flat round color="yellow-8" :icon="internship.saved ? 'eva-bookmark' : 'eva-bookmark-outline'">
            <q-tooltip>
              Save Internship
            </q-tooltip>
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>

</template>


<script setup>
  import { ref } from 'vue'
  import { format } from 'quasar'
  import { api } from 'src/boot/axios';
  import { useRoute } from "vue-router";

  const company_id = useRoute().params.id;
  function unsave(i) {
    internships.value[i].saved = !internships.value[i].saved
    api.put('http://localhost:3000/saved_internships/' + internships.value[i].id).then((res) => {
    console.log(res)
  })
}
  const internships = ref()
  api.get('http://localhost:3000/internships_companies/'+company_id).then((res) => {
    console.log(res)
    internships.value = res.data
  })

</script>
