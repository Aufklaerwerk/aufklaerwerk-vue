<template>
  <div id="container">
    <h3 id="search-title" v-if="isStartPage">mit Vorurteilen aufräumen.</h3>
    <div class="search-card">
      <v-form>
        <v-autocomplete
          v-model="model.choosenTags"
          :items="tagList"
          label="Themengebiet wählen"
          multiple
          clearable
          outlined
          dense
        >
          >
          <template v-slot:selection="{ item, index }">
            <v-chip small v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>
            <span v-if="index === 1" style="margin-left: 0.25rem">
              (+{{ model.choosenTags.length - 1 }})
            </span>
          </template>
        </v-autocomplete>
        <v-autocomplete
          v-model="model.choosenOfferingTypes"
          :items="offeringTypeList"
          label="Angebotsart wählen"
          multiple
          clearable
          outlined
          dense
        >
          >
          <template v-slot:selection="{ item, index }">
            <v-chip small v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>
            <span v-if="index === 1" style="margin-left: 0.25rem">
              (+{{ model.choosenOfferingTypes.length - 1 }})
            </span>
          </template>
        </v-autocomplete>
        <v-autocomplete
          v-model="model.city"
          :items="cityNames"
          label="Ort"
          menu-props="closeOnContentClick"
          clearable
          outlined
          dense
        >
          >
          <template v-slot:selection="{ item, index }">
            <v-chip small v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>
            <span v-if="index === 1" style="margin-left: 0.25rem">
              (+{{ model.city.length - 1 }})
            </span>
          </template>
        </v-autocomplete>
        <v-slider
          v-model="model.distance"
          :thumb-size="24"
          :disabled="!model.city"
          thumb-label
        ></v-slider>
        <div style="margin-bottom: 1rem; text-align: left">
          {{ model.distance }} km
        </div>
        <v-btn
          @click="submit"
          class="submit-button white--text pa-4"
          color="secondary base"
          block
        >
          <!-- <v-btn to="/inconstruction" id="form-submit-button" class="dark-orange"> -->
          <v-icon small class="search-icon">mdi-magnify</v-icon
          ><strong>Suchen</strong>
        </v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
import OfferingDataService from "../services/OfferingDataService";
export default {
  name: "searchConfiguration-component",
  props: ["isStartPage", "model"],
  components: {},
  data() {
    return {
      cityNames: [],
      tagList: [],
      offeringTypeList: [],
    };
  },

  methods: {
    fillSearchBarSelectOptions() {
      OfferingDataService.getAllCities()
        .then((response) => {
          this.cityNames = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
      OfferingDataService.getAllTags()
        .then((response) => {
          this.tagList = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
      OfferingDataService.getAllTypes()
        .then((response) => {
          this.offeringTypeList = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    submit() {
      let paramsAsJSON = {
        tags: this.model.choosenTags,
        offeringTypes: this.model.choosenOfferingTypes,
        city: this.model.city,
        distance: this.model.distance,
      };

      if (this.isStartPage) {
        //befindet sich auf der LandingPage
        this.$router.push({
          name: "Searcher",
          hash: "#offer-list",
          params: { landingPageParams: paramsAsJSON },
        });
      } else {
        //befindet sich auf der SearcherPage
        this.$emit("update:searchparams", this.model);
        this.$emit("search-offering");
      }
    },
  },
  mounted() {
    this.fillSearchBarSelectOptions();
  },
};
</script>

<style scoped>
#container {
  background-image: url(../assets/banners/diversityHands.jpg);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-size: cover;
}
#search-title {
  margin: 2rem 0 2rem 0;
  color: white;
}
.search-card {
  background-color: white;
  margin: 1rem;
  padding: 1.5rem 1rem 1.5rem 1rem;
  border-radius: 10px;
}

.search-icon {
  margin-top: 0.125rem;
}
</style>