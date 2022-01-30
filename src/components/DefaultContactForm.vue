<template>
  <div id="root-contactForm">
    <div id="contact-text">
      <h2><em>Möchten Sie...</em></h2>
      <h2><em>...helfen?</em></h2>
      <h2><em>...fragen?</em></h2>
      <h2><em>...oder einfach nur...</em></h2>

      <h2><em>...etwas Nettes sagen?</em></h2>
      <h1><b>Kontaktieren Sie Uns!!</b></h1>
    </div>
    <!-- kommt noch rein wenn der Google Account da ist
    <vue-recaptcha sitekey="Your key here">
      <button>Click me</button>
    </vue-recaptcha>
    -->
    <div contactForm>
      <v-form method="post" id="nativeForm" v-model="valid">
        <v-text-field
          class="form-control"
          label="Name"
          v-model="name"
          :rules="nameRules"
          :counter="40"
          required
          name="message"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          required
          name="mail"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="Organisation"
          v-model="organization"
          :rules="organizationRules"
          required
          name="Organization"
          color="#004c45"
        >
        </v-text-field>
        <v-textarea
          class="form-control"
          v-model="message"
          :rules="messageRules"
          required
          name="Message"
          color="#004c45"
          placeholder="Bitte geben Sie hier Ihre Nachricht ein"
          height="16em"
        >
        </v-textarea>
        <v-btn @click="submit" :disabled="!valid">Abschicken</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
//import VueRecaptcha from "vue-recaptcha";

export default {
  //  components: {VueRecaptcha},
  name: "contact",

  data() {
    return {
      valid: false,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 20 || "Name must be less than 20 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      organization: "",
      organizationRules: [
        (v) => !!v || "Organization is required",
        (v) => v.length <= 30 || "Organization must be less than 30 characters",
      ],
      message: "",
      messageRules: [(v) => !!v || "Message is required"],
    };
  },
  methods: {
    submit() {
      /*Meteor.call(
        "sendEmail",
        "hinterteil.projekt@gmail.com",
        this.email,
        this.organization + this.email,
        this.message
      );

      nativeForm.submit();
      */ alert("Mail wurde versendet.");
    },
  },
};
</script>

<style>
#contact {
  background: #fffbf5;
  padding-bottom: 10em;
}

#contact-text h1 {
  color: #004c45;
  font-size: 60px;
  font-family: "Montserrat";
}
#contact-text h2 {
  color: #004c45;
  font-size: 36px;
  font-family: "Montserrat";
  padding-bottom: 1.4em;
}
#contact-text {
  padding-top: 4em;
  padding-bottom: 6em;
}

#contactForm {
  color: #004c45;
  font-family: "Montserrat";
}
.form-control {
  width: 36vw;
  background: transparent;
  border: none;
  outline: none;
  color: #004c45;
  font-size: 18px;
  margin: auto;
  margin-bottom: 0.5em;
}
</style>
