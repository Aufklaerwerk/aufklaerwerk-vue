<template>
  <v-container v-if="!authenticated">
    <v-text-field v-model="password" label="Enter password"></v-text-field>
    <v-btn @click="checkPassword">Check Password</v-btn>
  </v-container>
  <admin-offering-list v-else></admin-offering-list>
</template>

<script>
import AdminOfferingList from "../components/Admin/AdminOfferingList.vue";
import AuthenticationService from "../services/AuthenticationService.js";
export default {
  components: { AdminOfferingList },
  data() {
    return {
      authenticated: false,
      password: "",
    };
  },
  methods: {
    checkPassword() {
      AuthenticationService.checkPassword(this.password)
        .then((response) => {
          if (response.status === 200) {
            this.authenticated = true;
          }
        })
        .catch(() => alert("Wrong password! Please try again."));
    },
  },
  provide() {
    return {
      password: this.password,
    };
  },
};
</script>