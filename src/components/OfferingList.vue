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

    <div class="content">
      <offeringEntry
        :class="{ active: index == currentIndex }"
        v-for="(Offering, index) in Offerings"
        :key="index"
        :offering="Offering"
        
      ></offeringEntry>
      <div v-if="Offerings.length = 0">
        <h4>Keine Angebote mit den ausgewählten Suchparametern</h4>
      </div>
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
      currentIndex: -1,
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
      OfferingDataService.findByCity(this.searchParams.city)
        .then((response) => {
          this.Offerings = response.data;

          //filter by Tags
          this.Offerings = this.Offerings.filter((offeringEntry) =>
            offeringEntry.tags.some((tag) => {
              return this.searchParams.choosenTags.includes(tag.label);
            })
          );

          //filter by Offering Types
          this.Offerings = this.Offerings.filter((offeringEntry) =>
            offeringEntry.offeringTypes.some((offeringType) => {
              return this.searchParams.choosenOfferingTypes.includes(
                offeringType.label
              );
            })
          );

          //TODO für später: geolib muss noch nachgezogen werden.
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    if (this.$route.params.landingPageParams) {
      this.searchParams = {
        city: this.$route.params.landingPageParams.city,
        choosenTags: this.$route.params.landingPageParams.tags,
        choosenOfferingTypes:
          this.$route.params.landingPageParams.offeringTypes,
        distance: this.$route.params.landingPageParams.distance,
      };
    }
    setTimeout(() => {
      this.retrieveOfferings();
    }, 50); //50ms muss sein, ansonsten ist die meteor Methode leer
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