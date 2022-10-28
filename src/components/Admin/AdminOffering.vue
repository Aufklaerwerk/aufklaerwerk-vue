<template>
  <v-container id="offering-page">
    <v-form ref="form">
      <v-text-field label="Name" v-model="currentOffering.name"></v-text-field>
      <v-textarea
        label="Beschreibung"
        v-model="currentOffering.description"
      ></v-textarea>
      <v-textarea
        label="Kurzbeschreibung"
        v-model="currentOffering.carddescription"
      ></v-textarea>
      <v-row>
        <v-col>
          <v-text-field
            label="E-Mail Adresse"
            v-model="currentOffering.mailAdress"
          ></v-text-field>
        </v-col>
        <v-col
          ><v-autocomplete
            v-model="currentOrganization"
            @change="changeOrganization()"
            :items="organizations"
            ><template slot="selection" slot-scope="data">
              {{ data.item.name }}
            </template>
            <template slot="item" slot-scope="data">
              {{ data.item.name }}
            </template></v-autocomplete
          ></v-col
        >
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Telefonnummer"
            v-model="currentOffering.telephone"
          ></v-text-field> </v-col
        ><v-col>
          <v-text-field
            label="Preis"
            v-model="currentOffering.price"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <h6>Themengebiete</h6>
          <v-chip v-for="(tag, index) in currentOffering.tags" :key="tag.label"
            ><span @click="editTag(index)"> {{ tag.label }}</span
            ><v-icon @click="deleteTag(index)">mdi-delete</v-icon></v-chip
          >
          <v-btn block @click="addTag"><v-icon>mdi-plus</v-icon></v-btn>
        </v-col>
        <v-col>
          <h6>Angebotstypen</h6>
          <v-chip
            v-for="(offeringType, index) in currentOffering.offeringTypes"
            :key="offeringType.label"
            ><span @click="editType(index)"> {{ offeringType.label }}</span
            ><v-icon @click="deleteType(index)">mdi-delete</v-icon></v-chip
          >
          <v-btn block @click="addType"><v-icon>mdi-plus</v-icon></v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Straße"
            v-model="currentOffering.street"
          ></v-text-field> </v-col
        ><v-col>
          <v-text-field
            label="Hausnummer"
            v-model="currentOffering.houseNumber"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Postleitzahl"
            v-model="currentOffering.postcode"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Stadt"
            v-model="currentOffering.city"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <h6>Bilder</h6>
        <v-img
          v-for="(imageUrl, index) in currentOffering.imageUrls"
          :key="imageUrl"
          :src="imageUrl"
          max-width="200px"
          ><div id="delete-image-button" @click="deleteImage(index)">
            <v-icon color="white">mdi-delete</v-icon>
          </div></v-img
        >
        <v-img
          v-for="(imageFile, index) in imageFiles"
          :key="index"
          :src="imageFile"
          max-width="200px"
        >
          <div id="delete-image-button" @click="deleteUploadedImage(index)">
            <v-icon color="white">mdi-delete</v-icon>
          </div>
        </v-img>
        <v-row>
          <v-col>
            <v-file-input
              v-model="currentFile"
              @change="addFile()"
              accept="image/*"
              label="Neues Bild hochladen"
            >
            </v-file-input> </v-col
          ><v-col></v-col
        ></v-row>
      </v-row>
      <v-row>
        <v-col
          ><v-switch
            v-model="currentOffering.published"
            label="Veröffentlichen"
          ></v-switch
        ></v-col>
        <v-col
          ><v-switch v-model="currentOffering.online" label="Online"></v-switch
        ></v-col>
      </v-row>
      <v-btn
        @click="saveChanges()"
        class="mr-4"
        color="green"
        style="color: white; font-weight: bold"
        >Änderungen speichern</v-btn
      >
      <v-btn
        @click="reset()"
        class="mr-4"
        color="red"
        style="color: white; font-weight: bold"
        >Zurücksetzen</v-btn
      >
      <v-btn
        v-if="$route.params.id !== 'new'"
        @click="deleteOffering()"
        class="mr-4"
        color="red"
        style="color: white; font-weight: bold"
        ><v-icon>mdi-delete</v-icon></v-btn
      >
    </v-form>
    <div>{{ currentOffering }}</div>
    <div>{{ originalOffering }}</div>
  </v-container>
</template>
<script>
import OfferingDataService from "../../services/OfferingDataService";
import OrganizationDataService from "../../services/OrganizationDataService";
export default {
  data() {
    return {
      currentOrganization: {},
      currentFile: null,
      imageFiles: [],
      currentOffering: [],
      originalOffering: [],
      organizations: [],
    };
  },
  mounted() {
    this.getOffering(this.$route.params.id);
  },
  methods: {
    changeOrganization() {
      this.currentOffering.organizationId = this.currentOrganization.id;
      this.currentOffering.organame = this.currentOrganization.name;
    },
    retrieveOrganizations() {
      OrganizationDataService.getAll()
        .then((response) => {
          this.organizations = response.data;
          this.currentOrganization = this.organizations.find(
            (el) => el.id === this.currentOffering.organizationId
          );
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteOffering() {
      if (
        prompt(
          "Willst du dieses Angebot wirklich löschen? Tippe 'JA' ein, um zu bestätigen."
        ) === "JA"
      ) {
        OfferingDataService.delete(this.$route.params.id);
        this.$router.push({ name: "Admin" });
      }
    },
    addFile() {
      if (this.currentFile) {
        var reader = new FileReader();
        reader.readAsDataURL(this.currentFile);
        reader.onload = () => {
          this.imageFiles.push(reader.result);
          this.currentFile = null;
        };
        reader.onerror = function (error) {
          console.log("Error: ", error);
        };
      }
    },
    deleteUploadedImage(index) {
      if (confirm("Willst du dieses Bild wirklich löschen?")) {
        this.imageFiles.splice(index, 1);
      }
    },
    deleteImage(index) {
      if (confirm("Willst du dieses Bild wirklich löschen?")) {
        this.currentOffering.deletedImages.push(
          this.currentOffering.imageUrls.splice(index, 1)
        );
      }
    },
    saveChanges() {
      this.currentOffering.images = this.imageFiles;
      console.log(this.currentOffering);
      if (this.$route.params.id === "new") {
        console.log("New");
        OfferingDataService.create(this.currentOffering);
      } else {
        console.log("Update");
        OfferingDataService.update(this.$route.params.id, this.currentOffering);
      }
    },
    reset() {
      if (confirm("Willst du deine Änderungen zurücksetzen?")) {
        this.currentOffering = JSON.parse(
          JSON.stringify(this.originalOffering)
        );
        this.imageFiles = [];
      }
    },
    deleteTag(index) {
      if (confirm("Willst du dieses Themengebiet wirklich löschen?"))
        this.currentOffering.tags.splice(index, 1);
    },
    editTag(index) {
      this.currentOffering.tags[index].label =
        prompt("Themengebiet ändern zu:") ||
        this.currentOffering.tags[index].label;
    },
    addTag() {
      let newTag = prompt("Neues Themengebiet eingeben:");
      if (newTag) {
        this.currentOffering.tags.push({
          label: newTag,
        });
      }
    },
    deleteType(index) {
      if (confirm("Willst du diesen Angebotstyp wirklich löschen?"))
        this.currentOffering.offeringTypes.splice(index, 1);
    },
    editType(index) {
      this.currentOffering.offeringTypes[index].label =
        prompt("Angebotstyp ändern zu:") ||
        this.currentOffering.offeringTypes[index].label;
    },
    addType() {
      let newType = prompt("Neuen Angebotstyp eingeben:");
      console.log(newType);
      if (newType) {
        this.currentOffering.offeringTypes.push({
          label: newType,
        });
      }
    },
    getOffering(id) {
      if (id === "new") {
        this.currentOffering = {
          imageUrls: [],
          images: [],
          name: "",
          tags: [],
          offeringTypes: [],
          houseNumber: "",
          street: "",
          city: "",
          published: false,
          online: false,
        };
        this.originalOffering = JSON.parse(
          JSON.stringify(this.currentOffering)
        );
      } else {
        OfferingDataService.get(id)
          .then((response) => {
            this.currentOffering = JSON.parse(JSON.stringify(response.data));
            this.currentOffering.deletedImages = [];
            this.originalOffering = JSON.parse(JSON.stringify(response.data));
            this.retrieveOrganizations();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
};
</script>
<style scoped>
#offering-page {
  text-align: left;
}
#delete-image-button {
  background-color: red;
  display: inline-block;
  border-radius: 50%;
  padding: 0.25rem;
  cursor: pointer;
  margin-top: 0.5rem;
}
.v-chip {
  margin: 0 0.75rem 0.75rem 0 !important;
}
</style>