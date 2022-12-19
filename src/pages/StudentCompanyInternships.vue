<template>
  <div class="q-pa-md text-h3">
    Internships at {{ internships[0].company_name}}
  </div>
  <div class="row">
    <div v-for="internship in internships" class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" style="width:500px;">

        <q-card-section class="bg-primary text-white" style="height:80px" >
          <div class="text-h6">{{internship.job_title}} </div>
          <div class="text-subtitle2">{{internship.company_name}} | {{internship.location}} | </div>
        </q-card-section>

        <q-separator />

        <q-card-section class="q-py-md" style="height:130px" >
          <div class="text-h6"> Description </div>
          <div class="ellipsis-3-lines"> {{internship.description}}</div>
        </q-card-section>

        <q-separator />

        <q-card-actions class="text-black" align="right" style="height:55px">
          <q-btn flat to="/student/internship">Read More</q-btn>
          <q-btn @click="internship.saved = !internship.saved" flat round color="yellow-8" :icon="internship.saved ? 'eva-bookmark' : 'eva-bookmark-outline'">
            <q-tooltip>
              Save Internship
            </q-tooltip>
          </q-btn>
          <q-btn flat round color="red-8" icon="eva-alert-circle-outline" to="internship/report"/>
        </q-card-actions>
      </q-card>
    </div>
  </div>

</template>


<script setup>
  import { ref } from 'vue'
  import { format } from 'quasar'
  const internships = ref([
    {
      job_title: "sde jjj",
      company_name: "shariket a7mad jaber lal ta3leem",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      location: "abdoun",
      saved: false,
    },
    {
      job_title: "sde jjj",
      company_name: "shariket a7mad jaber lal ta3leem",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      location: "abdoun",
      saved: false,
    },
    {
      job_title: "sde jjj",
      company_name: "shariket a7mad jaber lal ta3leem",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      location: "abdoun",
      saved: false,
    },
    {
      job_title: "sde jjj",
      company_name: "shariket a7mad jaber lal ta3leem",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      location: "abdoun",
      saved: false,
    },
  ])
</script>
