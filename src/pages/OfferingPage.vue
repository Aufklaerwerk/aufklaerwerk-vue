<template>
  <div id="offeringPage">
    <!--  <div v-if="organization"> -->
    <!-- Start Screen -->
    <div id="offeringBox">
      <div id="offering-image-and-details">
        <!-- Hier sind Foto und Anschrift -->
        <img id="offering-image" v-if="offering" :src="offering.imageUrl" />
        <div id="offering-details">
          <h3 id="offering-name">{{ offering.name }}</h3>
          <div id="icon-with-data" class="entry-with-gap">
            <img src="assets/icons/three-bars.png" />
            <p>Organisationsname</p>
          </div>
          <div class="entry-without-gap">
            <img src="assets/icons/location.png" />
            <p>
              {{ offering.postcode }}
              {{ offering.city }}
            </p>
          </div>
          <div class="entry-with-gap">
            <img src="assets/icons/blank-space.png" />
            <p>
              {{ offering.street }}
              {{ offering.houseNumber }}
            </p>
          </div>
          <div class="entry-with-gap">
            <img src="assets/icons/phone.png" />
            <p>
              {{ offering.telefon }}
            </p>
          </div>
          <div class="entry-with-gap">
            <img src="assets/icons/mail-box.png" />
            <p>
              {{ offering.mailAdress }}
            </p>
          </div>
          <div class="entry-with-gap">
            <img src="assets/icons/price-tag.png" />
            <p>
              {{ offering.price }}
            </p>
          </div>
          <p id="offering-descr">
            {{ offering.description }} aber die Beschreibung ist nicht lang
            genug, deshalb knall ich hier noch bisschen mehr content rein
            blablablbal hdjkef alkfvjklof Geegjerg
          </p>
          <ul id="pro-list">
            <li>Punkt 1</li>
            <li>Punkt 2</li>
            <li>Punkt 3</li>
          </ul>
          <p id="offering-descr">
            Geeignet ist der Workshop vor allem für Schulen, etc.
          </p>
        </div>
      </div>

      <div id="organisation-and-map">
        <div id="organisation-descr">
          <h3 class="left">Organisation</h3>
          <p class="left">
            Die Organisation ost bekannt für ihre Arbeit im Feld. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam
          </p>
          <v-btn id="to-orga" @click="openOrganisation"
            >Mehr zur Organisation</v-btn
          >
        </div>
        <iframe
          width="100%"
          height="450"
          style="border: 0"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ8WMga20Hl0cRuU8NdDkV99U&key=AIzaSyC1eu-m_SHUlD5IZ5JkkvMazRHMAgC02jc"
          id="map"
        ></iframe>
      </div>

      <!-- Ab hier kommt Beschreibung und so -->
      <div id="not-in-ux">
        <h2>Themenbereiche</h2>
        <div id="themen-tags-offering">
          <v-chip
            class="chip"
            v-for="tag in offering.tags"
            :key="tag._id"
            color="blue"
            text-color="white"
          >
            {{ tag.label }}
          </v-chip>
        </div>

        <h2>Angebotstypen</h2>
        <div id="themen-tags-offering">
          <v-chip
            class="chip"
            v-for="offeringType in offering.offeringTypes"
            :key="offeringType._id"
            color="blue"
            text-color="white"
          >
            {{ offeringType.label }}
          </v-chip>
        </div>

        <div id="offering-photos">
          <h2>Ein paar Impressionen:</h2>
          <v-carousel v-model="model">
            <v-carousel-item v-for="(color, i) in colors" :key="color">
              <v-sheet :color="color" height="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">Bilder {{ i + 1 }}</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
  methods: {
    openOrganisation() {
      alert("Wechsel zur Organisation veranlasst.");
      this.$router.push({
        name: "Organization",
        query: { organizationId: this.offering.organizationId },
      });
    },
  },
  computed: {
    offering: function () {
      return this.findOfferingById[0];
    },
  },
};
</script>

<style>
#offeringPage {
  height: 100%;
  color: #004c45;
  padding-top: 6%;
  background: #fffbf5;
}

#offeringBox {
  margin: 4% 7% 4% 7%;
  box-shadow: 1px 1px 15px grey;
  border-radius: 16px;
  padding: 2% 6% 2% 6%;
}

#offering-image-and-details {
  margin-top: 3em;
  display: flex;
  flex-direction: row;
  color: #004c45;
  background: #fffbf5;
  margin-left: 4%;
}

#offering-image {
  object-fit: cover;
  width: 60%;
  height: 20em;
}

#offering-name {
  color: #ff5100;
  margin-bottom: 4%;
  text-align: left;
}

#offering-details {
  display: flex;
  flex-direction: column;
  margin-left: 14%;
}

.entry-with-gap,
.entry-without-gap {
  text-align: left;
  display: flex;
  flex-direction: row;
}

.entry-with-gap {
  padding-bottom: 1%;
}

.entry-with-gap img {
  width: 4%;
}

.entry-with-gap p,
.entry-without-gap p {
  padding-left: 2%;
}

#offering-details p {
  text-align: left;
  margin-bottom: 0px;
}

#offering-descr {
  margin-top: 3%;
}

#pro-list {
  text-align: left;
  padding-left: 10%;
  margin-top: 2%;
}
/* Organisation and Map */

#organisation-and-map {
  display: flex;
  flex-direction: row;
  padding: 2% 0 6% 0;
}

#organisation-descr h3 {
  margin-bottom: 4%;
  color: #ff5100;
}

#to-orga {
  background: transparent;
  color: #004c45;
  font-size: 1.2em;
  font-family: "DM Serif Text", serif;
  margin: 1em;
  padding: 1.4em;
}

.left {
  text-align: left;
}

#map {
  flex-shrink: 0.6;
  max-height: 26em;
  padding: 2% 0 0 4%;
}
/* Not in UX Design */

#not-in-ux {
  margin: auto;
  display: flex;
  flex-direction: column;
}

#themen-tags-offering {
  flex-direction: row;
  margin: 1%;
}

#offering-types-offering {
  flex-direction: row;
}

#offering-photos {
  width: 60%;
  margin: 1% auto 0 auto;
}

#contact-offering {
  border-top: dashed;
}
</style>
