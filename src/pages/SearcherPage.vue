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
      </div>
      <div id="searcher-reasons-container">
        <h2>Gründe über Aufklärwerk zu buchen</h2>
        <ul div="pro">
          <li>
            <v-icon left color="#FF5100">mdi-check</v-icon>Lokale Angebote in
            Ihrer Nähe
          </li>
          <li>
            <v-icon left color="#FF5100">mdi-check</v-icon>Transparenz im
            Buchungsprozess
          </li>
          <li style="display: flex; align-items: start">
            <v-icon left color="#FF5100">mdi-check</v-icon
            ><span
              >Angebote in Kategorien, die sie vorher nicht bedacht haben</span
            >
          </li>
        </ul>
      </div>
    </section>

    <hr />
  </div>
</template>

<script>
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
    OfferingList,
  },
};
</script>

<style scoped>
html,
body,
h2 {
  margin-bottom: 1rem;
  text-align: left;
  font-weight: bold;
  font-size: 24px;
}

li {
  margin-bottom: 0.5rem;
  text-align: left;
  font-size: 16px;
}

ul {
  list-style: none;
  padding-left: 0 !important;
}
#searcherPage {
  height: 100%;
  width: 100%;
  background-color: #fffbf5;
}

#searcher-flowchart {
  margin: 2rem 1rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#searcher-process-image {
  width: 100%;
  box-shadow: 0 0.4em 0.8em lightgrey;
  border-radius: 10px;
}

#searcher-reasons-container {
  margin-top: 2rem;
}


#searcher-pros {
  padding: auto;
  margin: auto;
}

hr {
  display: none;
}

@media only screen and (min-width: 900px) {
  #searcher-flowchart {
    flex-direction: row;
    align-items: center;
  }
  #searcher-process-container {
    width: 50%;
  }
  #searcher-reasons-container {
    margin: 2rem
  }
}
</style>
