<template>
  <div v-if="currentOffering">
    <v-bottom-sheet fullscreen scrollable v-model="descriptionExpanded"
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
    <div id="offeringPage">
      <div id="back-to-results">
        <v-icon color="white" large @click="$router.go(-1)"
          >mdi-chevron-left</v-icon
        >
      </div>
      <v-carousel
        :height="carouselHeight"
        v-model="model"
        hide-delimiter-background
        :show-arrows-on-hover="true"
      >
        <v-carousel-item
          v-for="(url, i) in currentOffering.imageUrls"
          :key="i"
          :src="url"
        ></v-carousel-item>
      </v-carousel>
      <div id="offering-content">
        <h5 id="offering-title">{{ currentOffering.name }}</h5>
        <div id="offering-organization">
          <v-icon class="colored-icon" left>mdi-charity</v-icon
          >{{ currentOffering.organame }}
        </div>
        <div id="offering-address">
          <v-icon class="colored-icon" left>mdi-map-marker</v-icon>
          <div id="address-text-container">
            <div>
              {{ currentOffering.street }} {{ currentOffering.houseNumber }}
            </div>
            <div>{{ currentOffering.postcode }} {{ currentOffering.city }}</div>
          </div>
        </div>
        <div id="offering-mail">
          <v-icon class="colored-icon" left>mdi-email</v-icon
          >{{ currentOffering.mailAdress }}
        </div>
        <div id="offering-phone">
          <v-icon class="colored-icon" left>mdi-phone</v-icon
          >{{ currentOffering.telephone }}
        </div>
        <div id="offering-price">
          <v-icon class="colored-icon" left>mdi-tag</v-icon
          >{{ currentOffering.price }}
        </div>
        <v-divider class="divider divider-desktop-1" />
        <div id="offering-description">
          <h6>Über das Angebot</h6>
          <p style="grid-column-end: span 2">
            <span id="offering-description-text"
              >{{ currentOffering.description }}
            </span>
            <span @click="descriptionExpanded = true" id="show-more-button"
              >Mehr anzeigen</span
            >
          </p>
        </div>
        <v-divider class="divider divider-desktop-2" />
        <iframe
          v-if="currentOffering.city || currentOffering.postcode"
          width="100%"
          height="300"
          loading="lazy"
          allowfullscreen
          :src="setGoogleMapString()"
          id="map"
        ></iframe>
        <v-divider class="divider divider-desktop-3" />
        <div id="organization-description">
          <h6>Über die Organisation</h6>
          <p style="grid-column-end: span 2">
            <span id="organization-description-text"
              >{{ orgaDescription }}
            </span>
            <span id="show-more-organization" @click="openOrganisation"
              >Mehr zur Organisation</span
            >
          </p>
        </div>
        <v-divider class="divider" />
        <div id="offering-tags-container">
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
        </div>
        <v-divider class="divider" />
        <div id="offering-types-container">
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
        </div>
        <v-divider class="divider" />
        <v-btn
          to="/contact"
          id="book-button"
          class="white--text pa-4"
          color="#FF5100"
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
import OrganizationDataService from "../services/OrganizationDataService";

export default {
  name: "Offering",
  data() {
    return {
      descriptionExpanded: false,
      carouselHeight: 300,
      currentOffering: null,
      orgaDescription: "",
      model: 0,
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
      if (this.currentOffering.organizationId) {
        this.$router.push({
          name: "Organization",
          params: { id: this.currentOffering.organizationId },
        });
      } else {
        alert("Hier ist leider noch keine Organisation hinterlegt.");
      }
    },
    getOffering(id) {
      OfferingDataService.get(id)
        .then((response) => {
          this.currentOffering = response.data;
          this.getOrgaDescription(this.currentOffering.organizationId);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getOrgaDescription(id) {
      OrganizationDataService.get(id).then((response) => {
        this.orgaDescription = response.data.description;
      });
    },
    onResize() {
      this.carouselHeight =
        window.innerWidth > 1200 ? 600 : window.innerWidth / 2;
    },
    setGoogleMapString() {
      let googleMapString =
        "https://www.google.com/maps/embed/v1/place?key=AIzaSyC1eu-m_SHUlD5IZ5JkkvMazRHMAgC02jc&q=";
      if (this.currentOffering.city)
        googleMapString += this.currentOffering.city.replace(" ", "+") + ",";

      if (this.currentOffering.postcode) {
        googleMapString +=
          this.currentOffering.postcode.replace(" ", "+") + ",";
      }
      if (this.currentOffering.street) {
        googleMapString += this.currentOffering.street.replace(" ", "+") + ",";
      }
      if (this.currentOffering.houseNumber) {
        googleMapString += this.currentOffering.houseNumber.replace(" ", "+");
      }
      return googleMapString;
    },
  },
  mounted() {
    this.getOffering(this.$route.params.id);
  },
  updated() {
    if (this.showMoreButton("offering-description-text")) {
      document.getElementById("show-more-button").style.display = "block";
    }
  },
  created() {
    this.carouselHeight =
      window.innerWidth > 1200 ? 600 : window.innerWidth / 2;
    window.addEventListener("resize", this.onResize);
  },
};
</script>
<style lang="scss" scoped>
p {
  margin-bottom: 0 !important;
}
.colored-icon {
  color: var(--v-secondary-base) !important;
}
.divider {
  grid-column-end: span 2;
  border-color: black !important;
}
#back-to-results {
  position: absolute;
  z-index: 1;
  margin: 1rem;
  border-radius: 50%;
  display: inline-block;
  background-color: var(--v-secondary-base);
}
#offeringPage {
  display: flex;
  flex-direction: column;
}
#offering-content {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
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
}
#offering-description-text,
#organization-description-text {
  line-height: normal;
  overflow: clip;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
}
#show-more-button {
  cursor: pointer;
  display: none;
  text-decoration: underline;
  font-weight: bold;
  margin-top: 0.5rem;
}
#show-more-organization {
  cursor: pointer;
  text-decoration: underline;
  display: block;
  font-weight: bold;
  margin-top: 0.5rem;
}
#map {
  grid-column-end: span 2;
  border-radius: 10px;
}
#offering-tags-container,
#offering-types-container {
  grid-column-end: span 2;
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
}
#expanded-description-text {
  margin-top: 1rem;
  white-space: pre-line;
}
@media only screen and (max-width: 380px) {
  #offering-organization,
  #offering-address,
  #offering-mail,
  #offering-phone,
  #offering-price {
    grid-column-start: 1;
    grid-column-end: span 2;
  }
}
@media only screen and (min-width: 900px) {
  #offeringPage {
    margin: 2rem;
  }
  #offering-content {
    margin: 2rem 0 0 0;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
  #offering-title {
    grid-column-end: span 2;
  }
  #offering-description {
    grid-column-start: 1;
    grid-column-end: span 2;
  }

  #offering-description-text,
  #organization-description-text {
    -webkit-line-clamp: 8;
    line-clamp: 8;
  }

  #organization-description {
    grid-column-start: 3;
  }
  #map {
    grid-row-start: 1;
    grid-row-end: span 6;
    grid-column-start: 3;
  }
  #offering-tags-container {
    grid-column-start: 1;
    grid-column-end: span 1;
    grid-row-start: 6;
  }
  #offering-types-container {
    grid-column-start: 2;
    grid-column-end: span 1;
    grid-row-start: 6;
  }
  #book-button {
    grid-column-start: 3;
  }

  .divider {
    display: none;
  }
  .divider-desktop-1 {
    display: block;
    grid-row-start: 5;
  }
  .divider-desktop-2 {
    display: block;
    grid-row-start: 7;
    grid-column-end: span 4;
  }
  .divider-desktop-3 {
    display: block;
    grid-row-start: 9;
    grid-column-end: span 4;
  }
  .v-carousel {
    border-radius: 10px;
  }
}
</style>