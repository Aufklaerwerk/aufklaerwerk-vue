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

    <!-- Celebration of Humanity -->

    <section id="orange-boxes">
      <div id="box-container">
        <div id="hugging-people-div">
          <img id="huggingPeople" src="../assets/startpage/hugging-people.jpg" />
        </div>
        <div class="box">
          <h4>UNSER ZIEL</h4>
          <h3>Celebration of Humanity</h3>
          <p>
            Wir sind ein Projekt, dass sich für mehr Offenheit und mehr
            Austausch in der Gesellschaft einsetzt.
          </p>
          <p>
            Dazu möchten wir aber nicht das Rad neu erfinden, sondern die
            zahlreichen, tollen Projekte, die es bereits gibt, unterstützen.
          </p>
          <p>
            Entdecke mit unserer Hilfe Organisationen in deiner Umgebung und
            finde passende Begegnungsangebote zu finden!
          </p>
          <ul>
            <li><strong>Schnelle und bequeme Suche</strong></li>
            <li>
              <strong>Angebote zu verschiedenen Themen auf einem Platz</strong>
            </li>
            <li>
              <strong>Einfacher Kontakt zu sozialen Organisationen</strong>
            </li>
          </ul>
          <v-btn id="orange-button" to="/offerer">
            jetzt Teil werden
            <img src="../assets/icons/arrow.png" id="arrow-on-orange-box" />
          </v-btn>
        </div>
      </div>
    </section>

    <!-- Wavy Transition Orange-->

    <div id="wavy-transition-blue" />

    <!-- Wusstest du ... ? -->

    <section id="did-you-know">
      <div id="did-you-know-headers">
        <h4>WARUM AUFKLÄRWERK?</h4>
        <h3>Wusstest du ... ?</h3>
      </div>
      <div id="fun-fact-container">
        <img src="../assets/startpage/blm.jpg" />
        <img src="../assets/startpage/equality.jpg" />
        <img src="../assets/startpage/wheelchair.jpg" />
      </div>
    </section>

    <!-- Wavy Transition -->

    <div id="wavy-transition" />

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
            <p>Wir helfen dir dein Angebot für Suchende sichtbar zu machen</p>
          </div>
          <img src="../assets/icons/arrow.png" id="arrow" />
        </div>
        <button to="/offerer">mehr Infos zum Buchungsablauf gibt's hier</button>
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
            abgebaut werden.
          </p>
          <v-btn id="about-us-to-button" to="/aboutus">
            Mehr zu uns & unserer Vision
            <img src="../assets/icons/arrow.png" id="arrow-on-orange-box" />
          </v-btn>
        </div>
        <div>
          <img id="dude-in-subway" src="../assets/startpage/mann-in-subway.jpg" />
        </div>
      </div>
    </section>
    <!-- Kontaktformular -->

    <section id="contact">
      <ContactForm />
    </section>
  </div>
</template>

<script>
import SearchConfiguration from "../components/SearchConfiguration.vue";
import ContactForm from "../components/DefaultContactForm";

export default {
  data: () => ({
    isStartPage: true,
    emptySearchParams: {
      city: "",
      choosenTags: "",
      choosenOfferingTypes: "",
      distance: "",
    },
  }),
  components: {
    ContactForm,
    SearchConfiguration,
  },
  methods: {},
};
</script>

<style>
#landingPage {
  background-color: #fffbf5;
}

#landingPage section {
  min-height: 80vh;
  min-width: 100%;
}

/* Celebration of Humanity */

#box-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4em 6% 10em 6%;
}

.box {
  width: 84%;
  background-color: #f0956a;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 3% 0 3%;
}

.box h4 {
  padding-top: 4%;
  color: #ff5100;
}

.box h3 {
  padding-bottom: 2%;
  color: white;
}

.box p {
  padding-bottom: 0.5em;
}

.box ul {
  padding-bottom: 2em;
}

.box li {
  padding-bottom: 0.4em;
}

#hugging-people-div {
  width: 60%;
}

#huggingPeople {
  height: 32rem;
}

#orange-button {
  min-width: 72%;
  margin: auto;
  margin-bottom: 2em;
  background-color: #ff5100;
  padding: 1em 1em 1em 1em;
  color: white;
  font-family: "DM Serif Text", serif;
  font-size: 1.5em;
}

#arrow-on-orange-box {
  width: 10%;
  margin-left: 1em;
}

/* Wavy Transition Blue */

#wavy-transition-blue {
  position: relative;
  height: 2%;
  width: 100%;
  background: #95aba9;
}

#wavy-transition-blue:before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 60% 50%;
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
  background-color: #fffbf5;
  right: -1.9%;
  top: -50.25%;
}
/* Wusstest du ... ? */

#did-you-know {
  background-color: #95aba9;
}

#did-you-know-headers {
  padding-left: 42%;
  text-align: left;
}

#did-you-know h4 {
  padding-top: 4%;
  color: #004c45;
}

#did-you-know h3 {
  color: white;
}

#fun-fact-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 6% 0 8% 0;
}

#fun-fact-container img {
  padding: 0 4% 0 4%;
  width: 25%;
  height: 30rem;
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
  flex-direction: row;
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
  padding: 6% 0 6% 0;
}

#ueber-akw {
  background-color: #f0956a;
  min-height: 80%;
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
</style>
