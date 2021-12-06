<template>
  <div id="root-contact-page">
    <div id="contact-page-form">
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactForm from "../components/DefaultContactForm";

export default {
  components: { ContactForm },
  meteor: {
    $subscribe: {
      organizations: [],
      userPreferences: [],
    },
  },
};
</script>

<style>
#root-contact-page {
  width: 100%;
  background: rgba(0, 76, 69, 0.9);
  padding: 6vh 0 6vh 0;
}

#contact-page-form {
  background-color: #fffbf5;
  margin: auto;
  width: 50%;
  border: 3px solid #004c45;
  margin-top: 4vh;
  padding-bottom: 2vh;
}
</style>
