<template>
  <div style = "position: absolute">
    <v-app-bar color="#004c45" app id="nav-bar">
      <v-app-bar-nav-icon
        color="#ff5100"
        @click="drawer = true"
        class="nav-icon"
      ></v-app-bar-nav-icon>
      <v-toolbar-title id="page-title"
        ><a href="/"><strong id="akw">Aufklärwerk</strong></a></v-toolbar-title
      >
      <v-toolbar-items id="toolbar-items">
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
    <v-navigation-drawer
      class="nav-drawer"
      absolute
      temporary
      v-model="drawer"
      ><v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title @click="colorizeButton('clickedAboutUs')"
              >Über Uns</v-list-item-title
            ></v-list-item
          >
          <v-list-item>
            <v-list-item-title
              @click="colorizeButton('clickedSearcher')"
              text
              to="/howitworks"
              >Wie Funktioniert's?</v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              @click="colorizeButton('clickedOfferer')"
              text
              to="/offerer"
              >Anbieter Werden
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              @click="colorizeButton('clickedContact')"
              text
              to="/contact"
              >Kontakt</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Nav",
  components: {},
  data: function () {
    return {
      group: null,
      drawer: false,
      clickedSearcher: false,
      clickedOfferer: false,
      clickedAboutUs: false,
      clickedContact: false,
    };
  },
  mounted() {
    console.log(window.innerWidth);
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
          this.$router.push("/searcher");
          break;
        case "clickedOfferer":
          this.clickedOfferer = true;
          this.$router.push("/offerer");
          break;
        case "clickedAboutUs":
          this.clickedAboutUs = true;
          this.$router.push("/aboutus");
          break;
        case "clickedContact":
          this.clickedContact = true;
          this.$router.push("/contact");
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
  position: relative;
  display: flex;
}

.v-toolbar__content {
  width: 100% !important;
  justify-content: space-between;
  align-items: center;
}

#page-title {
  font-family: "Lato", sans-serif;
  font-size: 40px;
  padding: 2vh;
}

#akw {
  color: #ff5100;
}

#toolbar-button {
  padding: 2vh;
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

#toolbar-items {
  display: none;
}

.nav-drawer {
  position: sticky !important;
  top: 0;
  left: 0;
  height: 100% !important;
  width: 100vw !important;
}

.nav-icon {
  padding: 2vh !important;
}

@media only screen and (min-width: 1250px) {
  .nav-icon {
    display: none !important;
  }
  #toolbar-items {
    display: block;
  }
}
</style>
