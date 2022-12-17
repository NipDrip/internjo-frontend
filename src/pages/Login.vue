
<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class="column" style="width: 400px">
      <q-card square bordered class="q-pa-sm shadow-4">

        <q-card-section>
          <h5 class="text-h5 q-my-xs">Login to your InternJo account</h5>
        </q-card-section>

        <q-card-section>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input filled v-model="name" label="Your name *" hint="Name and surname" />
            <q-input filled type="number" v-model="age" label="Your age *" />
            <q-btn label="Login" color="primary" style="width: 350px" />
          </q-form>

          <div class="q-pt-md">
            <p class="text-grey-6"> Forgot Password? </p>
          </div>

          <q-separator />

          <div class="q-pt-lg">
            <q-btn color="green" label="Create new account" style="width: 350px" />
          </div>

        </q-card-section>

      </q-card>
    </div>
  </q-page>
</template>

<script>

</script>
