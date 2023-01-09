<template>
  <div class="items-center column" style="width:1200px">
    <div class="q-pa-md items-start q-gutter-md">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h3"> {{company.name}} </div>
          <q-rating size="20px" v-model=company.rating :max="5" color="primary" icon-selected="star" icon-half="star_half" readonly/>
          <span class="text-caption text-grey q-ml-sm">{{company.rating}}</span>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> About Us: </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div > Located in {{company.location}}.</div>
          <div> {{company.description}} </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-h5"> Job titles we offer  </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div v-for="job_title in company.job_titles">
            • {{job_title}}
          </div>
          <div class="q-py-md">
            <q-btn class="bg-secondary text-white" to="/student/company/internships">Discover Our Internships</q-btn>
          </div>
        </q-card-section>

        <q-separator inset/>

        <q-card-section>
          <div class="text-h5"> Reviews  </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-py-sm text-caption" v-for="review in company.reviews">
            <div>
              <q-rating v-model=review.score size="15px" color="orange" readonly/>
            </div>
            <div class="text-bold">
              {{review.student_position}} review
            </div>
            <div>
              {{review.body}}
            </div>
          </div>
        </q-card-section>

        <q-separator inset/>

        <q-card-actions align="right">
          <q-btn fab class="bg-green text-white"> follow company account</q-btn>
        </q-card-actions>

      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { format } from 'quasar'
const darko = ref("3")
const company = ref(
  {
    name: "Amazon",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "abdoun",
    job_titles: ["Software Developement Engineer", "Technical Project Manager"],
    rating: 4.3,
    reviews:  [
      {
        student_position: "Software Engineer",
        score: 2,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        student_position: "Software Engineer",
        score: 5,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ]

  },
)

</script>
