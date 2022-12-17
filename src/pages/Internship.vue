<template>
  <div class="items-center column" style="width:1200px">
    <div class="q-pa-md items-start q-gutter-md">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h2"> {{internship.job_title}} </div>
          <div class="text-subtitle2 text-primary">
            {{internship.company_name}} <span class="text-black">|</span>
            {{internship.location}}
          </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Description: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class ="q-pb-md"> Internship Duration: <span class="text-primary text-bold" >{{internship.duration}} months </span> </div>
          <div> {{internship.description}} </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Required Documents: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div v-for="document in internship.required_documents" >
            • {{document}}
          </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Required Documents: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div v-for="document in internship.required_documents">
            • {{document}}
          </div>
        </q-card-section>

        <q-separator inset/>

        <q-card-section>
          <div class="text-h5"> Qualifications: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div v-for="qual in internship.qualifications">
            • {{qual}}
          </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section class="text-black" align="right">
          <span class="q-pa-md text-bold text-red"> {{internship.days_left}} days left </span>
          <q-btn class="bg-primary text-white" to="/student/internship/apply">Apply Now</q-btn>
        </q-card-section>

      </q-card>
    </div>

    <!-- <div class="q-pa-md row items-start q-gutter-md">
      <q-card flat bordered class="my-card" style="width:500px">
        <q-card-section>
          <div class="text-h6">Contact Information</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section class="row" style>
          <q-input outlined class="q-pa-sm" v-model="fname" label="First Name" dense />
          <q-input outlined class="q-pa-sm" v-model="lname" label="Last Name" dense />
          <q-input outlined class="q-pa-sm" v-model="email" type="email" label="Email" dense />
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h6"> Change Password </div>
          <q-input outlined class="q-pa-sm" v-model="oldpass" type="password" label="Old Password" dense />
          <q-input outlined class="q-pa-sm" v-model="newpass1" type="password" label="New Password" dense />
          <q-input outlined class="q-pa-sm" v-model="newpass2" type="password" label="Confirm New Password" dense />
        </q-card-section>

        <q-card-actions vertical align="right">
          <q-btn class="bg-orange">Save Changes</q-btn>
        </q-card-actions>
      </q-card>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { format } from 'quasar'
const darko = ref("3")
const internship = ref(
  {
    job_title: "Software Developement Engineer",
    company_name: "shariket a7mad jaber lal ta3leem",
    duration: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "abdoun",
    required_documents: ["Resume", "Cover Letter"],
    qualifications: ["1", "2", "3", "4"],
    days_left: 7,
  },
)

</script>
