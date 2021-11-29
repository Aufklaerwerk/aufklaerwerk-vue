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
      <h4>Offerings List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(Offering, index) in Offerings"
          :key="index"
          @click="setActiveOffering(Offering, index)"
        >
          {{ Offering.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllOfferings">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentOffering">
        <h4>Offering</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentOffering.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentOffering.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentOffering.published ? "Published" : "Pending" }}
        </div>

        <a class="badge badge-warning"
          :href="'/Offerings/' + currentOffering.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Offering...</p>
      </div>
    </div>
  </div>
</template>

<script>
import OfferingDataService from "../services/OfferingDataService";

export default {
  name: "Offerings-list",
  data() {
    return {
      Offerings: [],
      currentOffering: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveOfferings() {
      OfferingDataService.getAll()
        .then(response => {
          this.Offerings = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveOfferings();
      this.currentOffering = null;
      this.currentIndex = -1;
    },

    setActiveOffering(Offering, index) {
      this.currentOffering = Offering;
      this.currentIndex = index;
    },

    removeAllOfferings() {
      OfferingDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      OfferingDataService.findByTitle(this.title)
        .then(response => {
          this.Offerings = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveOfferings();
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