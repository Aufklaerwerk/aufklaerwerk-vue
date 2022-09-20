<template>
  <div>
    <v-bottom-sheet v-model="descriptionExpanded"
      ><v-sheet id="expanded-description"
        ><div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <h5>Über das Angebot</h5>
          <v-icon color="black" large @click="descriptionExpanded = false"
            >mdi-close</v-icon
          >
        </div>
        <p id="expanded-description-text">
          {{ currentOffering.description }}
        </p></v-sheet
      ></v-bottom-sheet
    >
    <div v-if="currentOffering" id="offeringPage">
      <v-icon
        id="back-to-results"
        color="primary base"
        large
        @click="$router.go(-1)"
        >mdi-chevron-left-circle</v-icon
      >
      <v-carousel
        v-model="model"
        height="300"
        hide-delimiter-background
        :show-arrows-on-hover="true"
      >
        <v-icon style="position: fixed; top: 2rem"
          >mdi-chevron-left-circle</v-icon
        >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
      <div id="offering-content">
        <h5 id="offering-title">{{ currentOffering.name }}</h5>
        <div id="offering-organization">
          <v-icon left>mdi-charity</v-icon>{{ currentOffering.organame }}
        </div>
        <div id="offering-address">
          <v-icon left>mdi-map-marker</v-icon>
          <div id="address-text-container">
            <div>
              {{ currentOffering.street }} {{ currentOffering.houseNumber }}
            </div>
            <div>{{ currentOffering.postcode }} {{ currentOffering.city }}</div>
          </div>
        </div>
        <div id="offering-mail">
          <v-icon left>mdi-email</v-icon>{{ currentOffering.mailAdress }}
        </div>
        <div id="offering-phone">
          <v-icon left>mdi-phone</v-icon>{{ currentOffering.telephone }}
        </div>
        <div id="offering-price">
          <v-icon left>mdi-tag</v-icon>{{ currentOffering.price }}
        </div>
        <v-divider class="divider" />
        <h6>Über das Angebot</h6>
        <p style="grid-column-end: span 2">
          <span id="offering-description"
            >{{ currentOffering.description }}
          </span>
          <span @click="descriptionExpanded = true" id="show-more-button"
            >Mehr anzeigen</span
          >
        </p>
        <v-divider class="divider" />
        <iframe
          v-if="currentOffering.city"
          width="100%"
          height="300"
          style="grid-column-end: span 2"
          loading="lazy"
          allowfullscreen
          :src="
            'https://www.google.com/maps/embed/v1/place?key=AIzaSyC1eu-m_SHUlD5IZ5JkkvMazRHMAgC02jc&q=' +
            currentOffering.city.replace(' ', '+') +
            ',' +
            currentOffering.postcode.replace(' ', '+') +
            ',' +
            currentOffering.street.replace(' ', '+') +
            ',' +
            currentOffering.houseNumber.replace(' ', '+')
          "
          id="map"
        ></iframe>
        <v-divider class="divider" />
        <h6>Über die Organisation</h6>
        <p style="grid-column-end: span 2">
          <span id="organization-description"
            >{{ currentOffering.description }}
          </span>
          <span id="show-more-organization">Mehr zur Organisation</span>
        </p>
        <v-divider class="divider" />
        <h6 class="section-title">Themenbereiche</h6>
        <div id="offering-tags">
          <v-chip
            class="chip"
            small
            color="primary lighten-1"
            text-color="white"
            v-for="tag in currentOffering.tags"
            :key="tag.label"
            ><span class="textwrap">{{ tag.label }}</span></v-chip
          >
        </div>
        <v-divider class="divider" />
        <h6 class="section-title">Angebotstypen</h6>
        <div id="offering-tags">
          <v-chip
            class="chip"
            small
            text-color="white"
            color="primary lighten-1"
            v-for="offeringType in currentOffering.offeringTypes"
            :key="offeringType.label"
            ><span class="textwrap">{{ offeringType.label }}</span></v-chip
          >
        </div>
        <v-divider class="divider" />
        <v-btn
          to="/contact"
          id="book-button"
          class="white--text pa-4"
          color="#FF5100"
          block
        >
          <v-icon color="white" left small>mdi-calendar</v-icon
          ><strong>Angebot Buchen</strong>
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import OfferingDataService from "../services/OfferingDataService";

export default {
  name: "Offering",
  data() {
    return {
      descriptionExpanded: false,
      currentOffering: null,
      model: 0,
      items: [
        {
          src: require("../assets/offeringPictures/statttourPicture1.jpg"),
        },
        {
          src: require("../assets/offeringPictures/statttourPicture2.jpg"),
        },
        {
          src: require("../assets/offeringPictures/statttourPicture3.jpg"),
        },
        {
          src: require("../assets/offeringPictures/statttourPicture4.jpg"),
        },
        {
          src: require("../assets/offeringPictures/statttourRoute.png"),
        },
      ],
    };
  },
  methods: {
    // Returns true if the text in the element with the given id has been cut off
    showMoreButton(id) {
      const element = document.getElementById(id);
      if (
        element &&
        (element.offsetHeight < element.scrollHeight ||
          element.offsetWidth < element.scrollWidth)
      ) {
        return true;
      }
      return false;
    },
    openOrganisation() {
      this.$router.push({
        name: "Organization",
        params: { id: this.currentOffering.organizationId },
      });
    },
    getOffering(id) {
      OfferingDataService.get(id)
        .then((response) => {
          this.currentOffering = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mounted() {
    this.getOffering(this.$route.params.id);
  },
  updated() {
    if (this.showMoreButton("offering-description")) {
      document.getElementById("show-more-button").style.display = "block";
    }
  },
};
</script>
<style lang="scss" scoped>
p {
  margin-bottom: 0 !important;
}
.v-icon {
  color: var(--v-secondary-base) !important;
}
.divider {
  grid-column-end: span 2;
  border-color: black !important;
}
#back-to-results {
  position: absolute;
  z-index: 5;
  margin: 1rem;
}
#offeringPage {
  display: flex;
  flex-direction: column;
}
#offering-content {
  display: grid;
  margin: 1rem;
  text-align: left;
}
#offering-title {
  margin-bottom: 1rem;
}
#offering-title,
.section-title {
  grid-column-start: 1;
  grid-column-end: span 2;
}
#offering-organization {
  grid-column-start: 1;
}
#offering-address {
  grid-column-start: 2;
  grid-row-end: span 2;
  display: flex;
  align-items: flex-start;
}
#address-text-container {
  display: flex;
  flex-direction: column;
}
#offering-mail {
  grid-column-start: 1;
}
#offering-phone {
  grid-column-start: 1;
}
#offering-price {
  grid-column-start: 2;
}

#offering-description,
#organization-description {
  grid-column-end: span 2;
  line-height: normal;
  overflow: clip;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
}
#show-more-button {
  display: none;
  text-decoration: underline;
  font-weight: bold;
  margin-top: 0.5rem;
}
#show-more-organization {
  text-decoration: underline;
  display: block;
  font-weight: bold;
  margin-top: 0.5rem;
}
#offering-tags,
#offering-types {
  grid-column-start: 1;
  grid-column-end: span 2;
  display: flex;
  flex-wrap: wrap;
}
.chip {
  max-width: 90vw;
  margin: 0 0.5rem 0.5rem 0;
}
.textwrap {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#book-button {
  grid-column-start: 1;
  grid-column-end: span 2;
}
#expanded-description {
  text-align: left;
  padding: 1rem;
  overflow-y: scroll;
  height: 90vh;
}
#expanded-description-text {
  margin-top: 1rem;
  white-space: pre-line;
}
@media only screen and (max-width: 380px) {
  #offering-organization,
  #offering-address,
  #address-text-container,
  #offering-mail,
  #offering-phone,
  #offering-price {
    grid-column-start: 1;
    grid-column-end: span 2;
  }
}
</style>