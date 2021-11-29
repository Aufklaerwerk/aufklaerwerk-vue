<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Organizations List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(Organization, index) in Organizations"
          :key="index"
          @click="setActiveOrganization(Organization, index)"
        >
          {{ Organization.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllOrganizations">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentOrganization">
        <h4>Organization</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentOrganization.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentOrganization.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentOrganization.published ? "Published" : "Pending" }}
        </div>

        <a class="badge badge-warning"
          :href="'/Organizations/' + currentOrganization.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Organization...</p>
      </div>
    </div>
  </div>
</template>

<script>
import OrganizationDataService from "../services/OrganizationDataService";

export default {
  name: "Organizations-list",
  data() {
    return {
      Organizations: [],
      currentOrganization: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveOrganizations() {
      OrganizationDataService.getAll()
        .then(response => {
          this.Organizations = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveOrganizations();
      this.currentOrganization = null;
      this.currentIndex = -1;
    },

    setActiveOrganization(Organization, index) {
      this.currentOrganization = Organization;
      this.currentIndex = index;
    },

    removeAllOrganizations() {
      OrganizationDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      OrganizationDataService.findByTitle(this.title)
        .then(response => {
          this.Organizations = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveOrganizations();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>