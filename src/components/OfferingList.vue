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
    <section id="searchConfigurationDesktop">
      <SearchConfiguration
        @search-offering="startNewOfferingSearch"
        :model.sync="searchParams"
        ref="searchConfiguration"
      />
    </section>

    <div class="offering-list">
      <OfferingEntry
        :class="{ active: index == currentIndex }"
        v-for="(Offering, index) in Offerings"
        :key="index"
        :offering="Offering"
      ></OfferingEntry>
      <!-- TODO: Fix this 
      <div v-if="Offerings.length = 0">
        <h4>Keine Angebote mit den ausgewählten Suchparametern</h4>
      </div>
      -->
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
      filteringFinished: false,
      searchParams: {
        city: "",
        choosenTags: "",
        choosenOfferingTypes: "",
        distance: "",
      },
    };
  },
  components: {
    SearchConfiguration,
    OfferingEntry,
  },
  methods: {
    startNewOfferingSearch() {
      this.retrieveOfferings();
    },

    retrieveOfferings() {
      OfferingDataService.getAllPublished(
        this.searchParams.city,
        this.searchParams.distance,
        this.searchParams.choosenTags,
        this.searchParams.choosenOfferingTypes
      ).then((response) => {
        this.Offerings = response.data;
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
    }, 50);
  },
};
</script>

<style>
.offering-list {
  display: grid;
  margin: 1rem;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  column-gap: 2rem;
}

#searchConfiguration {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 1rem 0;
}

#searchConfigurationDesktop {
  display: none;
}

@media only screen and (min-width: 600px) {
  .offering-list {
    grid-template-columns: 1fr 1fr;
    margin: 1.5rem;
  }
  #searchConfiguration {
    margin: 1.5rem;
  }
}
@media only screen and (min-width: 900px) {
  .offering-list {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 1.5rem;
  }
  #searchConfiguration {
    margin: 1.5rem;
  }
}
@media only screen and (min-width: 1200px) {
  .offering-list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 2rem;
  }
  #searchConfiguration {
    margin: 2rem;
    display: none;
  }
  #searchConfigurationDesktop {
    display: block;
  }
}
</style>