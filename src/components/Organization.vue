<template>
  <div v-if="currentOrganization" class="edit-form">
    <h4>Organization</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentOrganization.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentOrganization.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentOrganization.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentOrganization.published"
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
      @click="deleteOrganization"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateOrganization"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Organization...</p>
  </div>
</template>

<script>
import OrganizationDataService from "../services/OrganizationDataService";

export default {
  name: "Organization",
  data() {
    return {
      currentOrganization: null,
      message: ''
    };
  },
  methods: {
    getOrganization(id) {
      OrganizationDataService.get(id)
        .then(response => {
          this.currentOrganization = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentOrganization.id,
        title: this.currentOrganization.title,
        description: this.currentOrganization.description,
        published: status
      };

      OrganizationDataService.update(this.currentOrganization.id, data)
        .then(response => {
          this.currentOrganization.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateOrganization() {
      OrganizationDataService.update(this.currentOrganization.id, this.currentOrganization)
        .then(response => {
          console.log(response.data);
          this.message = 'The Organization was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteOrganization() {
      OrganizationDataService.delete(this.currentOrganization.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "Organizations" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getOrganization(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>