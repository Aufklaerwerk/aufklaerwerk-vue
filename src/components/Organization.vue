<template>
  <div v-if="currentOrganization" id="orgaPage">
    <div id="back-to-results">
        <v-icon color="white" large @click="$router.go(-1)"
          >mdi-chevron-left</v-icon
        >
      </div>
    <img
      src="../assets/orgaLogos/statttour-logo.png"
      id="top-image"
    />
    <div id="orga-content">
      <h5 id="orga-title">{{ currentOrganization.name }}</h5>
      <div id="orga-address">
        <v-icon class="colored-icon" left>mdi-map-marker</v-icon>
        <div id="address-text-container">
          <div>
            {{ currentOrganization.street }}
            {{ currentOrganization.houseNumber }}
          </div>
          <div>
            {{ currentOrganization.postcode }} {{ currentOrganization.city }}
          </div>
        </div>
      </div>
      <div id="orga-mail">
        <v-icon class="colored-icon" left>mdi-email</v-icon>{{ currentOrganization.mailAdress }}
      </div>
      <div id="orga-phone">
        <v-icon class="colored-icon" left>mdi-phone</v-icon>{{ currentOrganization.telefon }}
      </div>
      <div id="orga-website">
        <v-icon class="colored-icon" left>mdi-web</v-icon
        ><a :href="currentOrganization.websiteURL">{{
          currentOrganization.websiteURL
        }}</a>
      </div>
      <v-divider class="divider divider-desktop-1"></v-divider>
      <div id="orga-description">
        <h6>Über die Organisation</h6>
        <p>
          {{ currentOrganization.description }}
        </p>
      </div>
      <v-divider class="divider divider-desktop-2"></v-divider>
      <iframe
        v-if="currentOrganization.city"
        width="100%"
        height="300"
        loading="lazy"
        allowfullscreen
        :src="
          'https://www.google.com/maps/embed/v1/place?key=AIzaSyC1eu-m_SHUlD5IZ5JkkvMazRHMAgC02jc&q=' +
          currentOrganization.city.replace(' ', '+') +
          ',' +
          currentOrganization.postcode.replace(' ', '+') +
          ',' +
          currentOrganization.street.replace(' ', '+') +
          ',' +
          currentOrganization.houseNumber.replace(' ', '+')
        "
        id="map"
      ></iframe>
      <v-divider class="divider divider-desktop-3"></v-divider>
      <div id="orga-tags-container">
        <h6 class="section-title">Themenbereiche</h6>
        <div id="orga-tags">
          <v-chip
            class="chip"
            small
            color="primary lighten-1"
            text-color="white"
            v-for="tag in currentOrganization.tags"
            :key="tag.label"
            ><span class="textwrap">{{ tag.label }}</span></v-chip
          >
        </div>
      </div>
      <v-divider class="divider"></v-divider>
      <v-btn
        id="offerings-button"
        class="white--text pa-4"
        color="secondary base"
        ><strong>Zu den Angeboten</strong>
      </v-btn>
    </div>
  </div>
</template>

<script>
import OrganizationDataService from "../services/OrganizationDataService";

export default {
  name: "Organization",
  data() {
    return {
      currentOrganization: null,
      message: "",
    };
  },
  methods: {
    getOrganization(id) {
      OrganizationDataService.get(id)
        .then((response) => {
          this.currentOrganization = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updatePublished(status) {
      var data = {
        id: this.currentOrganization.id,
        title: this.currentOrganization.title,
        description: this.currentOrganization.description,
        published: status,
      };

      OrganizationDataService.update(this.currentOrganization.id, data)
        .then((response) => {
          this.currentOrganization.published = status;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateOrganization() {
      OrganizationDataService.update(
        this.currentOrganization.id,
        this.currentOrganization
      )
        .then((response) => {
          console.log(response.data);
          this.message = "The Organization was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteOrganization() {
      OrganizationDataService.delete(this.currentOrganization.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "Organizations" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    console.log("übergebener Parameter: " + this.$route.params.id);
    this.getOrganization(this.$route.params.id);
  },
};
</script>

  <style>
#orgaPage {
  display: flex;
  flex-direction: column;
}
#back-to-results {
  position: absolute;
  z-index: 1;
  margin: 1rem;
  border-radius: 50%;
  display: inline-block;
  background-color: var(--v-secondary-base);
}
#top-image{
  max-height: 500px; 
  object-fit: scale-down;
} 
#orga-content {
  display: grid;
  margin: 1rem;
  text-align: left;
}
#orga-title {
  margin-bottom: 1rem;
}
#orga-title,
.section-title {
  grid-column-start: 1;
  grid-column-end: span 2;
}
#orga-organization {
  grid-column-start: 1;
}
#orga-address {
  grid-column-start: 2;
  display: flex;
  align-items: flex-start;
  grid-row-end: span 2;
}
#address-text-container {
  display: flex;
  flex-direction: column;
}
#orga-mail {
  grid-row-start: 2;
  grid-column-start: 1;
}
#orga-phone {
  grid-row-start: 3;
  grid-column-start: 1;
}
#orga-website {
  grid-row-start: 4;
  grid-column-start: 1;
}
#orga-description {
  grid-column-end: span 2;
}
#map {
  grid-column-end: span 2;
  border-radius: 10px;
}
#orga-tags {
  grid-column-start: 1;
  grid-column-end: span 2;
  display: flex;
  flex-wrap: wrap;
}
.colored-icon {
  color: var(--v-secondary-base) !important;
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
#offerings-button {
  grid-column-start: 1;
  grid-column-end: span 2;
}
.divider {
  grid-column-end: span 2;
  border-color: black !important;
}

@media only screen and (max-width: 380px) {
  #orga-address,
  #orga-mail,
  #orga-phone,
  #orga-website {
    grid-column-start: 1;
    grid-column-end: span 2;
  }
}
@media only screen and (min-width: 900px) {
  #orgaPage {
    margin: 2rem;
  }
  #orga-content {
    margin: 2rem 0 0 0;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
  #orga-title {
    grid-column-end: span 2;
  }
  #orga-description {
    grid-column-start: 1;
    grid-column-end: span 4;
  }
  #map {
    grid-row-start: 1;
    grid-row-end: span 6;
    grid-column-start: 3;
  }
  #orga-tags-container {
    grid-column-start: 1;
    grid-column-end: span 1;
    grid-row-start: 6;
  }
  #offerings-button {
    grid-column-start: 3;
  }
  .divider {
    display: none !important;
  }
  .divider-desktop-1 {
    display: block !important;
    grid-row-start: 5;
  }
  .divider-desktop-2 {
    display: block !important;
    grid-row-start: 7;
    grid-column-end: span 4;
  }
  .divider-desktop-3 {
    display: block !important;
    grid-row-start: 9;
    grid-column-end: span 4;
  }
  img {
    border-radius: 10px;
  }
}
</style>