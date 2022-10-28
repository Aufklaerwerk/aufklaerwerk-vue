<template>
  <v-container>
    <h5>Alle Angebote</h5>
    <v-data-table
      searchable
      :headers="headers"
      :items="offerings"
      :items-per-page="5"
      class="elevation-1"
      @click:row="offeringClicked"
    >
    </v-data-table>
    <v-btn
      color="green"
      class="mt-4"
      style="color: white; font-weight: bold"
      @click="newOffering"
      >Neues Angebot erstellen</v-btn
    >
  </v-container>
</template>

<script>
import OfferingDataService from "../../services/OfferingDataService";
export default {
  data() {
    return {
      headers: [
        { text: "Name", value: "name", align: "start" },
        { text: "Published", value: "published" },
      ],
      offerings: [],
    };
  },
  methods: {
    newOffering() {
      this.$router.push({
        name: "AdminOffering",
        params: { id: "new" },
      });
    },
    offeringClicked(item) {
      this.$router.push({
        name: "AdminOffering",
        params: { id: item.id },
      });
    },
    getOfferings() {
      OfferingDataService.getAll()
        .then((response) => {
          this.offerings = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getOfferings();
  },
};
</script>
