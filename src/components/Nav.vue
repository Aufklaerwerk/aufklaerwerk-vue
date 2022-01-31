<template>
  <v-app-bar color="#004c45" fixed app id="nav-bar" height="80%">
    <v-toolbar-title id="page-title"
      ><a href="/"><strong id="akw">Aufklärwerk</strong></a></v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-toolbar-items id="toolbar-itemss">
  <v-btn
        v-bind:color="clickedAboutUs ? '#ff5100' : '#f0956a'"
        @click="colorizeButton('clickedAboutUs')"
        text
        to="/aboutus"
        id="toolbar-button"
        >Über Uns</v-btn
      >
      <v-btn
        v-bind:color="clickedSearcher ? '#ff5100' : '#f0956a'"
        @click="colorizeButton('clickedSearcher')"
        text
        to="/howitworks"
        id="toolbar-button"
        >Wie Funktioniert's?</v-btn
      >
      <v-btn
        v-bind:color="clickedOfferer ? '#ff5100' : '#f0956a'"
        @click="colorizeButton('clickedOfferer')"
        text
        to="/offerer"
        id="toolbar-button"
        >Anbieter Werden</v-btn
      >
      <v-btn
        v-bind:color="clickedContact ? '#ff5100' : '#f0956a'"
        @click="colorizeButton('clickedContact')"
        text
        to="/contact"
        id="toolbar-button"
        >Kontakt</v-btn
      >
    <!--  <a href="/searcher">
        <img src="../assets/icons/search.png" id="search-icon" />
      </a>-->
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "Nav",
  components: {},
  data: function () {
    return {
      clickedSearcher: false,
      clickedOfferer: false,
      clickedAboutUs: false,
      clickedContact: false,
    };
  },
  mounted() {
    switch (this.$router.history.current.path) {
      case "/searcher":
        this.clickedSearcher = true;
        break;
      case "/offerer":
        this.clickedOfferer = true;
        break;
      case "/aboutus":
        this.clickedAboutUs = true;
        break;
      case "/contact":
        this.clickedContact = true;
        break;
    }
  },
  methods: {
    colorizeButton: function (buttonName) {
      this.clickedSearcher = false;
      this.clickedOfferer = false;
      this.clickedAboutUs = false;
      this.clickedContact = false;
      switch (buttonName) {
        case "clickedSearcher":
          this.clickedSearcher = true;
          break;
        case "clickedOfferer":
          this.clickedOfferer = true;
          break;
        case "clickedAboutUs":
          this.clickedAboutUs = true;
          break;
        case "clickedContact":
          this.clickedContact = true;
          break;
      }
    },
  },
};
</script>

<style>
.menu { 
  display: flex;
}

#nav-bar {
  height: 12vh;
}

#page-title {
  font-family: "Lato", sans-serif;
  font-size: 40px;
  padding: 2vh 0 2vh 4vw;
}

#akw {
  color: #ff5100;
}

#toolbar-button {
  margin-block-end: 30px;
  font-family: "DM Serif Text", serif;
  font-size: 24px;
}

#nav-logo {
  height: 5vw;
  margin-right: 1vw;
}

#search-icon {
  height: 4vh;
  width: 4vh;
  margin: 2.5vh 2vh 0 3vh;
}
</style>
