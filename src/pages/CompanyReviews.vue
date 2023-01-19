<template>
  <div class="items-center column" style="width:1200px">
    <div class="q-pa-md items-start q-gutter-md" style="width:1200px">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h5"> Reviews </div>
          <q-rating size="20px" v-model=rating :max="5" color="primary" icon-selected="star" icon-half="star_half" readonly />
          <span class="text-caption text-grey q-ml-sm">{{rating}} (overall)</span>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-py-sm text-caption" v-for="review in reviews">
            <div>
              <q-rating v-model=review.rating size="15px" color="orange" readonly />
            </div>
            <div class="text-bold">
                {{review.position}} review
            </div>
            <div>
              <div v-html=review.body></div>
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
import { api } from 'src/boot/axios';


const reviews = ref([])
api.get('http://localhost:3000/reviews').then((res) => {
  console.log(res)
  reviews.value = res.data
})

const rating = ref()
api.get('http://localhost:3000/company_rating/').then((res) => {
  console.log(res)
  rating.value = res.data.rating
})
</script>
