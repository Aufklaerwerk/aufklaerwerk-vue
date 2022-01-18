<template>
  <div class="offering-entry-card" elevation="5" hover>
    <div class="img-with-description">
      <img
        class="image"
        v-if="offering"
        src="../assets/orgaLogos/statttour.png"
      />
      <div class="content">
        <p id="offering-name">           
          <strong> {{ offering.name }}</strong>
        </p>
        <div class="card-organisation">
          <img src="../assets/icons/school.png" />
          <p id="orga-name">
            <strong> {{ offering.organame }}</strong>
          </p>
        </div>
        <div class="card-location">
          <img src="../assets/icons/location.png" />
          <p id="city-name">
            <strong> {{ offering.city }}</strong>
          </p>
        </div>
        <div class="card-topics">
          <img src="../assets/icons/three-bars.png" />
          <div class="taglist">
            <p v-for="tag in offering.tags" :key="tag._id">
              {{ tag.label }}
            </p>
          </div>
        </div>
        <div class="card-types">
          <img src="../assets/icons/knowledge.png" />
          <div class="taglist">
            <p
              v-for="offeringType in offering.offeringTypes"
              :key="offeringType._id"
            >
              {{ offeringType.label }}
            </p>
          </div>
        </div>

        <p class="card-descr">{{ offering.carddescription }}</p>

        <button @click="openOfferingPage">zum Angebot</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "offering-component",
  components: {},
  data() {
    return {
      offeringId: this.offering.id,
    };
  },
  props: ["offering"],
  methods: {
    openOfferingPage() {
      console.log("Das ist die offeringID: " + this.offeringId);
      //TODO Der Router klappt noch nicht.

      /*
      //Original aus Hinterteil
      this.$router.push({
        name: "Offering",
        query: { offeringId: this.offering._id },
      });
      */

      this.$router.push({
        name: "Offering",
        params: { id: this.offeringId },
      });
    },
  },
};
</script>

<style lang="scss">
.offering-entry-card {
  display: flex;
  flex-direction: column;
  width: 44%;
  box-shadow: 0 0.4em 0.8em lightgrey;
  border-radius: 10px;
  margin: 2vw;
  h2 {
    padding: 0.6vh;
  }
  .img-with-description {
    display: flex;
    flex-direction: row;
    .image {
      width: 350px;
      height: auto;
      margin: 1em;
    }
    .content {
      display: flex;
      justify-content: left;
      flex-direction: column;
      width: 100%;
      h2,
      p {
        text-align: left;
        font-size: 1em;
        margin-bottom: 0;
      }
      .card-topics,
      .card-types {
        display: flex;
        flex-direction: row;
        align-items: center;
        .taglist {
          display: flex;
          flex-direction: row;
          margin: 0.5em 1em 0 1em;
          p {
            font-size: 0.6em;
            margin-left: 0.6em;
            padding: 0.4em;
            border-radius: 16px;
            background-color: #f0956a;
            color: white;
          }
        }
        img {
          width: 1.2vw;
        }
      }
      .card-organisation,
      .card-location {
        display: flex;
        flex-direction: row;
        align-items: center;
        p {
          font-size: 0.8em;
          margin: 0.5em 1em 0 1.6em;
          padding: 0.4em;
        }
        img {
          width: 1.2vw;
        }
      }
      .card-descr {
        margin-top: 2vh;
      }
      button {
        background-color: #004c45;
        color: white;
        border-radius: 8px;
        padding: 0.3em;
        width: 40%;
        align-self: center;
        margin: 4vh 0 2vh 0;
      }
    }
  }
}

#offering-name {
  font-size: 1.2em;
  margin-bottom: 0em !important;
  margin-top: 1em;
}
</style>
