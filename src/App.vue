<template>
  <v-app>
    <div>
      <PageLoader />
      <Nav />
    </div>
    <div class="content">
      <v-main>
        <router-view />
      </v-main>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";
import PageLoader from "./components/PageLoader.vue";
import Footer from "./components/Footer.vue";

export default {
  data: () => ({
    showDrawer: false,
  }),
  components: {
    Nav,
    PageLoader,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Lato:ital,wght@0,400;1,100&display=swap");

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
}

#app {
  font-family: Lato, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

h4 {
  font-family: "Lato", sans-serif;
  font-size: 16px;
}

h3 {
  font-family: "DM Serif Text", serif;
  font-size: 47px;
}

h5 {
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: normal;

}

h6 {
  font-family: "Lato",sans-serif;
  font-size: 20px;
  line-height: normal;
  font-weight: bold;

}

p,
li {
  font-family: "Lato", sans-serif;
  font-size: 16px;
}

h4 {
  font-family: "Lato", sans-serif;
  font-size: 16px;
}

h3 {
  font-family: "DM Serif Text", serif;
  font-size: 47px;
}

.footer {
  width: 100%;
}

hr {
  border: 2px dashed #004c45;
}

.v-btn {
  text-transform: none;
}

a {
  text-decoration: none !important;
}

.akw-green {
  color: var(--v-primary-base);
}

.dark-orange {
  color: var(--v-secondary-base);
}
</style>