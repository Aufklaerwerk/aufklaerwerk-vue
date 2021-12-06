<template>
  <div id="in-construction">
    <h1 class="orange-font">Hallöchen!</h1>
    <h2>Leider sind wir gerade dabei die Suche zu reparieren...</h2>
    <h2>Falls es euch trotzdem interessiert, wie ein Angebot auf Aufklärwerk aussehen könnte, drückt hier!</h2>
    <v-btn to="/inconstruction" id="to-angebotsseite">Beispiels-Angebotsseite</v-btn>
    <h3>Seid ihr eine soziale Organisation?</h3>
    <a href="/contact" id="schreibt-uns">Schreibt uns!!</a>
    <section id="contact-bottom">
      <ContactForm />
    </section>
</div>
</template>

<script>
import ContactForm from "../components/DefaultContactForm";

export default {
  components: {
    ContactForm,
  },
  data () {
      return {id: "das-ist-die-id"}
  }
};
</script>

<style>
#in-construction {
    margin-top: 10em;
    padding: 0em 8em;
}

#in-construction h1 {
    font-size: 8vw;
}

#in-construction h2 {
    font-size: 3rem;
    padding-top: 1em;
}

#in-construction h3 {
    size: 2rem;
}

#contact-bottom {
    margin-top: 60em;
}

#to-angebotsseite{
    margin: 4em;
    width: 30vw;
    height: 30vh;
    border-radius: 30%;
}

.orange-font {
    color: #ff5100
}
</style>
