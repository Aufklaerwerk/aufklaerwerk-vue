<template>
  <div id="in-construction">
    <h1 class="dark-orange">Hallöchen!</h1>
    <h2 class="akw-green">Leider sind wir gerade dabei die Suche zu reparieren...</h2>
    <h2 class="akw-green">Falls es euch trotzdem interessiert wie ein Angebot auf Aufklärwerk aussehen könnte, drückt hier:</h2>
    <v-btn to="/offering/6141ffa72f4c216c7a862ea2" id="to-angebotsseite">Beispiels-Angebotsseite</v-btn>
    <h2 class="akw-green">Seid ihr eine soziale Organisation oder habt ihr Fragen?</h2>
    <h3 class="dark-orange">Dann drück <a href="/contact" id="schreibt-uns">mich</a> und schreib uns!!</h3>
</div>
</template>

<script>

export default {
  components: {
  },
};
</script>

<style>
#in-construction {
    padding: 6em 8em 0em 8em;
    background: #fffbf5;
}

#in-construction h1 {
    font-size: 8vw;
}

#in-construction h2 {
    font-size: 2rem;
    padding-top: 1em;
}

#in-construction h3 {
    size: 2rem;
    margin: 2em 0;
}

#schreibt-uns {
    color: #004c45 !important;
}

#contact-bottom {
    margin-top: 60em;
}

#to-angebotsseite{
    margin: 4em;
    width: 20vw;
    height: 20vh;
    border-radius: 30%;
    background-color: #004c45;
    color: white;
    font-size: 1.2em;
    font-style: oblique;
}

</style>
