<template>
  <div id="landingPage">
    <!-- Start Screen -->

    
    <!-- Suchmaske -->

    <section id="welcome">
      <SearchConfiguration
        v-bind:isStartPage="isStartPage"
        v-bind:model="emptySearchParams"
        ref="searchConfiguration"
      />
    </section>

     <!-- So funktioniert -->

     <section id="so-funktioniert">
      <div id="so-funktioniert-headers">
        <h4>DU MÖCHSTEST HELFEN VORURTEILE ABZUBAUEN?</h4>
        <h3>So funktioniert's</h3>
      </div>
      <div id="so-funktioniert-container">
        <div class="so-funktioniert-vectors">
          <img src="../assets/startpage/suchparameter.svg" />
          <h4>
            Gewünschtes Thema, den Ort und Datum für Begegnungsangebot angeben
          </h4>
        </div>
        <div class="so-funktioniert-vectors">
          <img src="../assets/startpage/angebot-suchen.svg" />
          <h4>
            Aus der Liste von Ergebnisse das Angebot auswählen, das am besten zu
            deinem Vorhaben passt
          </h4>
        </div>
        <div class="so-funktioniert-vectors">
          <img src="../assets/startpage/jetzt-buchen.svg" />
          <h4>Angebot buchen und den Rest machen wir!</h4>
        </div>
      </div>
      <div id="teil-werden">
        <div id="teil-werden-blauer-kasten">
          <div id="teil-werden-text">
            <h2>Du bist Teil einer sozialen Organisation in Deutschland?</h2>
            <p>Wir helfen dir Dein Angebot für Suchende sichtbar zu machen</p>
          </div>
          <router-link to="/offerer">
            <img src="../assets/icons/arrow.png" id="arrow" />
          </router-link>
        </div>
        <button @click="$router.push('howitworks')">mehr Infos zum Buchungsablauf gibt's hier</button>
      </div>
    </section>

    <!-- Wavy Transition Orange-->



    <div id="wavy-transition-orange" />

    <!-- Über Aufklärwerk -->

    <section id="ueber-akw">
      <div id="ueber-akw-box-container">
        <div class="ueber-akw-box">
          <h4>WAS STECKT HINTER AUFKLÄRWERK</h4>
          <h3>Über Aufklärwerk</h3>
          <p>
            Aufklärwerk ist eine Initiative von Studierenden für die gesamte
            Gesellschaft. Wir sind davon überzeugt, dass durch
            Begegnungsangebote Hass und Vorurteile in der Gesellschaft abgebaut
            werden können.
          </p>
          <p>
            Mit unserer Plattform wollen wir die Suche und Buchung von
            Begegnungsangeboten deutlich einfacher und transparenter gestalten.
          </p>
          <p>
            Somit sollen Vorurteile und Diskriminierung in der Gesellschaft
            abgebaut und die Vorraussetzungen für ein Miteinander geschaffen werden.
          </p>
          <v-btn id="about-us-to-button" to="/aboutus">
            Mehr zu uns & unserer Vision
          </v-btn>
        </div>
        <div>
          <img id="dude-in-subway" src="../assets/startpage/mann-in-subway.jpg" />
        </div>
      </div>
    </section>

    <div id="wavy-transition-blue" />

    <!-- Wusstest du ... ? -->

    <section id="did-you-know">
      <div id="did-you-know-headers">
        <h4>WARUM AUFKLÄRWERK?</h4>
        <h3>Wusstest du ... ?</h3>
      </div>
      <div id="fun-fact-container">
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src="../assets/startpage/blm.jpg" alt="BLM">
            </div>
            <div class="flip-box-back">
              <img src="../assets/startpage/blm.jpg" alt="BLM">
              <p>Dass die Zahl der Anfragen im Zusammenhang mit rassistischer Diskriminierung 2020 ein Drittel (33 Prozent) aller Anfragen ausmachte?</p>
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src="../assets/startpage/equality.jpg" alt="Equality">
            </div>
            <div class="flip-box-back">
              <img src="../assets/startpage/equality.jpg" alt="Equality">
              <p>Dass über 80 Prozent der Bevölkerung wissen, dass Homo- und Bisexuelle in Deutschland diskriminiert werden?</p>
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src="../assets/startpage/wheelchair.jpg" alt="Wheelchair">
            </div>
            <div class="flip-box-back">
              <img src="../assets/startpage/wheelchair.jpg" alt="Wheelchair">
              <p>Dass in Deutschland ein Fehlbedarf von 386.000 barrierefreier Wohnungen für Rollstuhlfahrer herrscht?</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Wavy Transition -->

  </div>
</template>

<script>
import SearchConfiguration from "../components/SearchConfiguration.vue";

export default {
  data: () => ({
    isStartPage: true,
    emptySearchParams: {
      city: "",
      choosenTags: "",
      choosenOfferingTypes: "",
      distance: "",
    }
  }),
  components: {
    SearchConfiguration
  },
  methods: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

#landingPage {
  background-color: #fffbf5;
}

#landingPage section {
  min-width: 100%;
}

/* Are you Interested? */

#areyouinterested {
  padding: 8vh 4% 0 4%;
  min-height: 90vh;
}

#areyouinterested h2{
  color:#ff5100;
  font-size: 3em;
  padding: 0 8vw;
  font-family: 'Rubik', sans-serif;
}

#interested-weiterleitung {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 6vh 0 0 0;
}

#interested-weiterleitung h3 {
  max-width: 30vw;
  text-align: left;
  padding-bottom: 2vh; 
  font-family: 'Rubik', sans-serif;
  color: #004c45
}

#interested-text > p {
  color: #004c45;
  max-width: 30vw;
  text-align: left; 
}

#interested-text {
  min-height: 50vh;
}

#interested-weiterleitung .v-btn {
  background-color: #004c45;
  color:#fffbf5;
  padding: 2em;
  min-width: 16em;
  font-size: 1.2em;
  margin-bottom: 2em;
}

/* Wavy Transition Blue */

#wavy-transition-blue {
  position: relative;
  height: 10vh;
  width: 100%;
  background: #95aba9;
}

#wavy-transition-blue:before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 100%;
  width: 51%;
  height: 100%;
  background-color: #95aba9;
  top: -40%;
  left: -10%;
}

#wavy-transition-blue:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 200%;
  width: 62.4%;
  height: 100%;
  background-color: #f0956a;
  right: -1.9%;
  top: -50.25%;
}

/* Wusstest du ... ? */

#did-you-know {
  background-color: #95aba9;
  height: 10%;
  text-align: center;
}

#did-you-know-headers {
  padding-left: 42%;
  text-align: left;
}

#did-you-know h4 {
  color: #004c45;
}

#did-you-know h3 {
  color: white;
}

#fun-fact-container {
  display: flex;
  position: relative;
  height: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 6% 0 8% 0;
}

/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-box {
  background-color: transparent;
  margin: 0 4% 0 4%;
  padding: 0 4% 0 4%;
  width: 100%;
  height: 100%;
  perspective: 1000px;
}

/* This container is needed to position the front and back side */
.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-box-front, .flip-box-back {
  border-radius: 5px;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-box-front img, .flip-box-back img{
  border-radius: 5px;
  max-width: 100%;
  max-height: 100%;
  size: cover;
}

.flip-box-back img{
  filter: blur(4px);
  -webkit-filter: blur(4px);
  opacity: 0.6;
}

/* Style the front side (fallback if image is missing) */
.flip-box-front {
  color: white;
}

/* Style the back side */
.flip-box-back {
  position: relative;
  text-align: center;
  background-color: #95aba9;
  transform: rotateY(180deg);
}

.flip-box-back p{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.3rem;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bolder;
}

/* Wavy Transition */

#wavy-transition {
  position: relative;
  height: 10vh;
  width: 100%;
  background: #95aba9;
}

#wavy-transition:before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 50%;
  width: 60%;
  height: 16vh;
  background-color: #95aba9;
  right: -1vh;
  top: 2vh;
}

#wavy-transition:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 50%;
  width: 50%;
  height: 12vh;
  background-color: #fffbf5;
  left: -4.4vw;
  top: 3vh;
}

/* So funktioniert */

#so-funktioniert-headers {
  padding-left: 10%;
  text-align: left;
}

#so-funktioniert-headers h4 {
  padding-top: 6%;
  color: #004c45;
}

#so-funktioniert-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 10% 0 10%;
}

.so-funktioniert-vectors {
  margin: 8% 4% 0 4%;
}

.so-funktioniert-vectors img {
  height: 50%;
  margin-bottom: 4em;
}

.so-funktioniert-vectors h4 {
  font-size: 1.4em;
}

#teil-werden {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 4em 0 6em 0;
}

#teil-werden button {
  min-width: 50%;
  color: #95aba9;
  font-size: 1.5em;
  font-family: "DM Serif Text", serif;
}

#teil-werden-blauer-kasten {
  background-color: #95aba9;
  min-width: 50%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem 2rem 1rem 2rem;
}

#teil-werden-text {
  text-align: left;
  padding: 0 4rem 0 4rem;
}

#teil-werden-text h2 {
  font-size: 1.5em;
}

#teil-werden-text p {
  margin-bottom: 0px;
  font-size: 1.2em;
}

#arrow {
  height: 4em;
  width: 4em;
}

/* Wavy Transition Orange */

#wavy-transition-orange {
  position: relative;
  height: 10vh;
  width: 100%;
}

#wavy-transition-orange:before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 50%;
  width: 110%;
  height: 160%;
  background-color: #f0956a;
  right: -2%;
  top: 20%;
}

/* Über Aufklärwerk */

#ueber-akw-box-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10% 0 6% 0;
}

#ueber-akw {
  background-color: #f0956a;
  padding-bottom: 10rem;
}

.ueber-akw-box {
  width: 40%;
  background-color: #fffbf5;
  color: #004c45;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 2rem 4rem 4rem 4rem;
}

.ueber-akw-box h4 {
  padding-top: 2em;
  color: #ff5100;
}

.ueber-akw-box h3 {
  padding-bottom: 0.5em;
}

.ueber-akw-box p {
  padding-bottom: 0.6em;
}

#about-us-to-button {
  background-color: #004c45;
  color: white;
  margin: auto;
  min-width: 50%;
  height: 2.4em;
  border-radius: 12px;
  font-family: "DM Serif Text", serif;
  font-size: 1.5em;
  padding: 1em;
}

#dude-in-subway {
  height: 50em;
}


#contact-landing {
  padding: 0 20em 10em 20em;
}
</style>