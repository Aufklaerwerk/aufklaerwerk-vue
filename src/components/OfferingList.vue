<template>
  <div class="list-wrapper">
    <!-- Suchmaske -->
    <section id="searchConfiguration">
      <SearchConfiguration
        @search-offering="startNewOfferingSearch"
        :model.sync="searchParams"
        ref="searchConfiguration"
      />
    </section>

    <h4>Offerings List</h4>
    <div class="content">
      <offeringEntry
        :class="{ active: index == currentIndex }"
        v-for="(Offering, index) in Offerings"
        :key="index"
        :offering="Offering"
      ></offeringEntry>
    </div>
  </div>
</template>

<script>
import OfferingDataService from "../services/OfferingDataService";
import OfferingEntry from "./OfferingEntry.vue";
import SearchConfiguration from "./SearchConfiguration.vue";

export default {
  name: "Offerings-list",
  data() {
    return {
      Offerings: [],
      currentOffering: null,
      currentIndex: -1,
      title: "Testangebot mongoDB2",
      searchParams: {
        city: "",
        choosenTags: "",
        choosenOfferingTypes: "",
        distance: "",
      },
    };
  },
  components: {
    OfferingEntry,
    SearchConfiguration,
  },
  methods: {
    startNewOfferingSearch() {
      this.retrieveOfferings();
    },
    retrieveOfferings() {
      OfferingDataService.getAll()
        .then((response) => {
          this.Offerings = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      OfferingDataService.getAll()
        .then((response) => {
          this.Offerings = response.data;
          console.log("Der Fund" + this.searchParams.city + response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.searchTitle();
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>