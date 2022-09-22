<template>
  <div class="offering-entry-card" elevation="5" hover @click="openOfferingPage">
    <div class="offering-content">
      <img
        class="image"
        v-if="offering"
        src="../assets/orgaLogos/statttour.png"
      />
      <h5 class="offering-title">{{ offering.name }}</h5>
      <p class="offering-description">{{ offering.carddescription }}</p>
      <div class="offering-organization">
        <v-icon>mdi-charity</v-icon>{{ offering.organame }}
      </div>
      <div class="offering-location">
        <v-icon>mdi-map-marker</v-icon>{{ offering.city }}
      </div>
      <div class="offering-tags">
        <v-chip
          small
          text-color="white"
          color="#ff5100"
          v-for="tag in offering.tags.slice(0, 3)"
          :key="tag.label"
          ><span class="textwrap">{{ tag.label }}</span></v-chip
        >
        <v-chip
          small
          text-color="white"
          color="#ff5100"
          v-if="offering.offeringTypes.length > 3"
          style="margin-left: 0.25rem"
        >
          +{{ offering.offeringTypes.length - 3 }}
        </v-chip>
      </div>
      <div class="offering-types">
        <v-chip
          small
          text-color="white"
          color="#ff5100"
          v-for="offeringType in offering.offeringTypes.slice(0, 3)"
          :key="offeringType.label"
          ><span class="textwrap">{{ offeringType.label }}</span>
        </v-chip>
        <v-chip
          small
          text-color="white"
          color="secondary-base"
          v-if="offering.offeringTypes.length > 3"
          style="margin-left: 0.25rem"
        >
          +{{ offering.offeringTypes.length - 3 }}
        </v-chip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "offering-component",
  data() {
    return {
      offeringId: this.offering.id,
    };
  },
  props: ["offering"],
  methods: {
    openOfferingPage() {
      this.$router.push({
        name: "Offering",
        params: { id: this.offeringId },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.offering-entry-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 0.4em 0.8em lightgrey;
  border-radius: 10px;
  padding: 1rem;
  text-align: left;
}

.offering-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5rem;
}

.offering-title {
  grid-column-start: 1;
  grid-column-end: span 2;
  overflow: clip;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.offering-description {
  grid-column-start: 1;
  grid-column-end: span 2;
  line-height: normal;
  overflow: clip;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

.offering-organization {
  grid-column: 1;
}

.offering-location {
  grid-column: 1;
}

.offering-tags {
  grid-column-start: span 2;
  grid-row: 6;
  display: flex;
  max-width: 100%;
}
.offering-types {
  grid-column-start: span 2;
  grid-row: 7;
  display: flex;
  max-width: 100%;
}

.image {
  grid-column-start: 1;
  grid-column-end: span 2;
  width: 100%;
  height: auto;
  border-radius: 0.625rem;
}

.v-chip {
  margin-right: 0.25rem !important;
}

.v-icon {
  margin-right: 0.25rem !important;
  margin-top: -0.25rem !important;
}

.textwrap {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>