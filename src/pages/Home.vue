<template>

  <div class="row">
    <div v-for="offer in offers" class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" style="width:500px;">

        <q-card-section class="bg-primary text-white" style="height:80px" >
          <div class="text-h6">{{offer.job_title}} </div>
          <div class="text-subtitle2">{{offer.company_name}} | {{offer.location}} </div>
        </q-card-section>

        <q-separator />

        <q-card-section class="q-py-md" style="height:130px" >
          <div class="text-h6"> Description </div>
          <div class="ellipsis-3-lines"> {{offer.description}}</div>
        </q-card-section>

        <q-separator />

        <q-card-actions class="text-black" align="right" style="height:55px">
          <q-btn flat to="/student/internship">Read More</q-btn>
          <q-btn @click="offer.saved = !offer.saved" flat round color="yellow-8" :icon="offer.saved ? 'eva-bookmark' : 'eva-bookmark-outline'">
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
  import { api } from 'boot/axios'
  let car = null
  api.get('https://catfact.ninja/fact').then((res) => { car = res.date})
  const offers = ref([
    {
      job_title: "Software Engineer",
      company_name: "Amazon",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      location: "5th Circle",
      saved: false,
    },
    {
      job_title: "Software Engineer",
      company_name: "Amazon",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      location: "5th Circle",
      saved: false,
    },
    {
      job_title: "Software Engineer",
      company_name: "Amazon",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      location: "5th Circle",
      saved: false,
    },
    {
      job_title: "Software Engineer",
      company_name: "Amazon",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      location: "5th Circle",
      saved: false,
    },
    {
      job_title: "Software Engineer",
      company_name: "Amazon",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      location: "5th Circle",
      saved: false,
    },
    {
      job_title: "Software Engineer",
      company_name: "Amazon",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      location: "5th Circle",
      saved: false,
    },
  ])
</script>
