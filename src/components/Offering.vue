<template>
  <div v-if="currentOffering" class="edit-form">
    <h4>Offering</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentOffering.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentOffering.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentOffering.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentOffering.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteOffering"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateOffering"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Offering...</p>
  </div>
</template>

<script>
import OfferingDataService from "../services/OfferingDataService";

export default {
  name: "Offering",
  data() {
    return {
      currentOffering: null,
      message: ''
    };
  },
  methods: {
    getOffering(id) {
      OfferingDataService.get(id)
        .then(response => {
          this.currentOffering = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentOffering.id,
        title: this.currentOffering.title,
        description: this.currentOffering.description,
        published: status
      };

      OfferingDataService.update(this.currentOffering.id, data)
        .then(response => {
          this.currentOffering.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateOffering() {
      OfferingDataService.update(this.currentOffering.id, this.currentOffering)
        .then(response => {
          console.log(response.data);
          this.message = 'The Offering was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteOffering() {
      OfferingDataService.delete(this.currentOffering.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "Offerings" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getOffering(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>