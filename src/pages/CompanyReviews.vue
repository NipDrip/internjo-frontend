<template>
  <div class="items-center column" style="width:1200px">
    <div class="q-pa-md items-start q-gutter-md">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h5"> Reviews </div>
          <q-rating size="20px" v-model=res.rating :max="5" color="primary" icon-selected="star" icon-half="star_half"
            readonly />
          <span class="text-caption text-grey q-ml-sm">{{res.rating}} (overall)</span>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-py-sm text-caption" v-for="review in res.reviews">
            <div>
              <q-rating v-model=review.score size="15px" color="orange" readonly />
            </div>
            <div>
              {{ review.body }}
            </div>
          </div>
        </q-card-section>

      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { format } from 'quasar'
const darko = ref("3")
const res = ref(
  {
    rating: 4.3,
    reviews: [
      {
        score: 2,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        score: 5,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ]

  },
)

</script>
