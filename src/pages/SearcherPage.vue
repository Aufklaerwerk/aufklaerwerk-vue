<template>
  <div id="searcherPage">
    <!-- OfferList -->
    <section id="offer-list">
      <OfferingList />
    </section>
    <!-- Process -->
    <section id="searcher-flowchart">
      <div id="searcher-process-container">
        <img
          id="searcher-process-image"
          src="../assets/flowcharts/searcher-flowchart-white.png"
        />
        <div id="searcher-pros">
          <h2>Gründe über Aufklärwerk zu buchen</h2>
          <ul div="pro">
            <li>Lokale Angebote in Ihrer Nähe</li>
            <li>Transparenz im Buchungsprozess</li>
            <li>
              Angebote in Kategorien, die sie vorheher nicht bedacht haben
            </li>
          </ul>
        </div>
      </div>
    </section>

    <hr />

    <!-- Kontaktformular -->
    <section id="contact">
      <ContactForm />
    </section>
  </div>
</template>

<script>
import ContactForm from "../components/DefaultContactForm";
import OfferingList from "../components/OfferingList.vue";

export default {
  data: () => ({
    isStartPage: false,
    emptySearchParams: {
      city: "",
      choosenTags: "",
      choosenOfferingTypes: "",
      distance: "",
    },
  }),
  components: {
    ContactForm,
    OfferingList,
  },
};
</script>

<style>
html,
body,
#searcherPage {
  height: 100%;
  width: 100%;
  background-color: #fffbf5;
}

/* Searcher Process */

#searcher-process-container {
  display: flex;
  flex-direction: row;
  padding: 8em;
}

#searcher-flowchart h2 {
  margin-bottom: 5em;
  margin-right: auto;
  margin-left: auto;
  font-size: 4vh;
}

#searcher-process-image {
  margin-left: 8vw;
  width: 32vw;
}

#searcher-pros {
  padding: auto;
  margin: auto;
}

#searcher-flowchart ul {
  list-style: none;
  font-size: 2em;
  background-position: left;
  background-size: 3em;
  text-align: left;
}

#searcher-flowchart li {
  margin-bottom: 2em;
  list-style: none;
  background-position: left;
  background-size: 3em;
}
</style>
