<template>
  <v-container>
    <p>{{ password }}</p>
      <v-text-field label="Enter password" v-model="password"></v-text-field>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            password: ""
        };
    }
}
</script>

<style>

</style>