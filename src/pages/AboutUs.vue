<template>
  <div id="main">
    <div id="about-us-cover">
      <div id="inside-cover">
        <img src="../assets/members/team.jpg" />
        <div class="inside-cover-text">
          <h2>Celebration of Humanity</h2>
          <h3 style="font-weight: normal">
            Wir sind ein Projekt, welches sich für mehr
            <span class="dark-orange">Offenheit</span> und mehr Austausch in der
            Gesellschaft einsetzt. Als digitale Plattform wollen wir existierenden Initiativen und Organisationen dabei helfen, die richtigen Teilnehmer für ihre Angebote zu finden. Dadurch können wir Austausch ermöglichen und Spaltung überwinden.
          </h3>
          <h3 style="font-weight: normal">
            Langfristig wollen wir DIE Plattform gegen Diskriminierung und Vorurteile in Deutschland werden. Werden Sie ein Teil davon! 
          </h3>
        </div>
      </div>
    </div>
    <div class="about-us-subtext">
      <p style="font-weight: normal">
        Aufklärwerk ist eine Initiative von Studierenden für die gesamte Gesellschaft. Wir sind davon überzeugt, dass durch Begegnungsangebote Hass und Vorurteile in der Gesellschaft abgebaut werden können. Mit unserer Plattform wollen wir die Suche und Buchung von
        Begegnungsangeboten deutlich einfacher und transparenter gestalten. Wir wollen sozialen Organisationen die Möglichkeit bieten, im Internet stattzufinden. Auf der anderen Seite möchten wir Suchenden das Auffinden von diesen Organisationen so barrierefrei wie möglich gestalten.</p>
        <p>
        Durch den Abbau von Buchungsbarrieren und dadurch vermehrte Buchungen von Begegnungsangeboten wollen wir 
        Somit sollen Vorurteile und Diskriminierung in der Gesellschaft abgebaut
        werden.
      </p>
    </div>
    <section id="orange-boxes">
      <div id="box-container">
        <div id="hugging-people-div">
          <img id="huggingPeople" src="../assets/startpage/hugging-people.jpg" />
        </div>
        <div class="box">
          <h4>UNSER ZIEL</h4>
          <h3>Celebration of Humanity</h3>
          <p>
            Wir sind eine studentische Initiative, welche sich für mehr Offenheit und
            Austausch in der Gesellschaft einsetzt.
          </p>
          <p>
            Dazu möchten wir aber nicht das Rad neu erfinden, sondern die zahlreichen, tollen Projekte, die es bereits gibt, unterstützen.
          </p>
          <p>
            Entdecke mit unserer Hilfe Organisationen in Deiner Umgebung und finde die passenden Begegnungsangebote für deine Bedürfnisse!
          </p>
          <ul>
            <li><strong>Schnelle und bequeme Suche</strong></li>
            <li>
              <strong>Angebote zu verschiedensten Themen - gesammelt an einem Ort</strong>
            </li>
            <li>
              <strong>Einfacher, transparenter Kontakt zu sozialen Organisationen</strong>
            </li>
          </ul>
          <v-btn id="orange-button" to="/offerer">
            jetzt Teil werden
          </v-btn>
        </div>
      </div>
    </section>
    <div class="about-us-container">
      <div class="about-us-sub-container">
        <div id="about-us-header">
          <h3>Wer steckt hinter Aufklärwerk?</h3>
          <p>8 MITGLIEDER + 100 TASSEN KAFFEE + 1 MISSION</p>
        </div>
        <div class="buttons-container">
          <button
            v-on:click="choice = 1"
            v-bind:class="choice == 1 ? 'isActive' : 'def'"
          >
            ALLE
          </button>
          <button
            v-on:click="choice = 2"
            v-bind:class="choice == 2 ? 'isActive' : 'def'"
          >
            GRÜNDER
          </button>
          <button
            v-on:click="choice = 3"
            v-bind:class="choice == 3 ? 'isActive' : 'def'"
          >
            MARKETING
          </button>
          <button
            v-on:click="choice = 4"
            v-bind:class="choice == 4 ? 'isActive' : 'def'"
          >
            IT
          </button>
          <button
            v-on:click="choice = 5"
            v-bind:class="choice == 5 ? 'isActive' : 'def'"
          >
            PR
          </button>
        </div>
        <div class="images-container">
          <div
            class="img-with-text"
            v-for="member in filteredList()"
            :key="member.id"
          >
            <img :src="convertToPath(member)" />
            <v-card class="description">
              <v-card-subtitle>{{ member.name }}</v-card-subtitle>
              <v-card-text>{{ member.age }}</v-card-text>
              <v-card-text>{{ member.subject }}</v-card-text>
              <v-card-text>{{ member.roles }}</v-card-text>
            </v-card>
          </div>
        </div>
      </div>
    </div>
    <a href="https://www.enactus.de/karlsruhe"
      ><img
        id="enactus-weltkarte"
        class="center"
        src="../assets/enactus-world-map.png"
    /></a>
    <p></p>

    <!--
    <div class="sponsors">
      <h3>Unsere Partners</h3>
      <div class="flex-spons">
        <img src="assets/orgaLogos/bosch.png" alt="" />
        <img src="assets/orgaLogos/volksbank.png" stlye="" alt="" />
        <img src="assets/orgaLogos/sparkasse.svg" alt="" />
        <img src="assets/orgaLogos/hoe.svg" alt="" />
        <img src="assets/orgaLogos/trumpf.jpg" alt="" />
        <img src="assets/orgaLogos/graf.png" alt="" />
        <img src="assets/orgaLogos/sparda.png" alt="" />
        <h3>Vielen Dank für eure Unterstützung</h3>
      </div>
    </div>
    -->

    <section id="contact">
      <ContactForm />
    </section>
    <section id="additional-info">
      <h3>Gemeinsam Großartiges erreichen!</h3>
      <br />
      <p>Unterstützen Sie uns dabei die Welt ein Stück weit besser zu machen</p>
      <br />
      <h4>Aufklärwerk</h4>
      <br />
      <p>Moltkestraße 33</p>
      <p>76331 Karlsruhe</p>
      <p>aufklaerwerk@kit.enactus.de</p>
    </section>
  </div>
</template>

<script>
import ContactForm from "../components/DefaultContactForm";

export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      choice: 1,
      allMembers: [
        {
          name: "Felix",
          id: 0,
          portrait: "felix.png",
          responsibility: {
            founder: true,
            marketing: false,
            it: true,
            pr: false,
          },
          age: "23",
          subject: "Wirtschaftsinformatik",
          roles: "Mitgründer | IT",
        },
        {
          name: "Johannes",
          id: 1,
          portrait: "johannes.jpeg",
          responsibility: {
            founder: true,
            marketing: false,
            it: false,
            pr: true,
          },
          age: "23",
          subject: "Technology Entrepreneurship",
          roles: "Mitgründer | Finanzen | UX",
        },
        {
          name: "Jingyi",
          id: 2,
          portrait: "jingyi.jpeg",
          responsibility: {
            founder: false,
            marketing: false,
            it: true,
            pr: true,
          },
          age: "21",
          subject: "Wirtschaftsingenieurwesen",
          roles: "UX | PR & Marketing",
        },
        {
          name: "Julia",
          id: 3,
          portrait: "julia.jpeg",
          responsibility: {
            founder: false,
            marketing: true,
            it: false,
            pr: true,
          },
          age: "20",
          subject: "Wirtschaftsinformatik",
          roles: "UX | PR & Marketing",
        },
        {
          name: "Tim",
          id: 4,
          portrait: "tim.jpeg",
          responsibility: {
            founder: false,
            marketing: false,
            it: true,
            pr: false,
          },
          age: "25",
          subject: "Wirtschaftsinformatik",
          roles: "IT",
        },
        {
          name: "Giuseppe",
          id: 5,
          portrait: "giuseppe.png",
          responsibility: {
            founder: false,
            marketing: false,
            it: false,
            pr: true,
          },
          age: "25",
          subject: "Wirtschaftspsychologie",
          roles: "PR | Strategie",
        },
        {
          name: "Emilie",
          id: 6,
          portrait: "emelie.png",
          responsibility: {
            founder: false,
            marketing: true,
            it: false,
            pr: true,
          },
          age: "23",
          subject: "Bioingenieurswesen",
          roles: "PR & Marketing",
        },
        {
          name: "Viola",
          id: 7,
          portrait: "viola.jpeg",
          responsibility: {
            founder: false,
            marketing: false,
            it: true,
            pr: false,
          },
          age: "25",
          subject: "Wirtschaftsinformatik",
          roles: "UX",
        },
        {
          name: "Manuel",
          id: 8,
          portrait: "manuel.jpg",
          responsibility: {
            founder: false,
            marketing: false,
            it: true,
            pr: false,
          },
          age: "23",
          subject: "Wirtschaftsinformatik",
          roles: "IT",
        },
        {
          name: "Helena",
          id: 9,
          portrait: "helena.jpeg",
          responsibility: {
            founder: false,
            marketing: true,
            it: false,
            pr: false,
          },
          age: "22",
          subject: "Wirtschaftsingenieurwesen",
          roles: "Marketing",
        },
        {
          name: "Leonie",
          id: 10,
          portrait: "leonie.jpeg",
          responsibility: {
            founder: false,
            marketing: true,
            it: false,
            pr: false,
          },
          age: "22",
          subject: "Wirtschaftsingenieurwesen",
          roles: "Marketing",
        },
        {
          name: "Marike",
          id: 11,
          portrait: "marike.jpeg",
          responsibility: {
            founder: false,
            marketing: true,
            it: false,
            pr: false,
          },
          age: "19",
          subject: "Wirtschaftsingenieurwesen",
          roles: "Marketing",
        },
        {
          name: "Felix",
          id: 12,
          portrait: "felix_hasse.jpg",
          responsibility: {
            founder: false,
            marketing: false,
            it: true,
            pr: false,
          },
          age: "23",
          subject: "Wirtschaftsinformatik",
          roles: "IT",
        },
      ],
    };
  },
  computed: {},
  methods: {
    convertToPath(member) {
      return require("../assets/members/" + member.portrait);
    },
    filteredList() {
      var choiceResp = "";
      switch (this.choice) {
        case 2:
          choiceResp = "founder";
          break;
        case 3:
          choiceResp = "marketing";
          break;
        case 4:
          choiceResp = "it";
          break;
        case 5:
          choiceResp = "pr";
          break;
        default:
      }
      if (choiceResp === "") return this.allMembers;
      else
        return this.allMembers.filter((member) => {
          if (member.responsibility[choiceResp]) return member;
        });
    },
  },
};
</script>

<style>
.isActive {
  background: rgb(230, 118, 44) !important;
  color: white !important;
}
.buttons-container {
  display: flex;
  flex-direction: row;
  gap: 1em;
  margin: auto;
  margin-top: 2em;
  margin-bottom: 2em;
}
.buttons-container button {
  background: white;
  color: green;
  border-radius: 10px;
  font-size: 1.3em;
  padding: 0.3em 2.5em 0.3em 2.5em;
  margin: 0 0.4em 0 0.4em;
}
/*TODO: media query */
#inside-cover img {
  display: block;
  width: 100%;
  object-fit: cover;
  grid-column: 1;
  grid-row: 1;
  filter: blur(5px);
  height: 70vh;
}
#inside-cover {
  display: grid;
  margin-bottom: 2em;
  height: 70vh;
  background-size: 100%;
}
.inside-cover-text {
  grid-column: 1;
  grid-row: 1;
  color: white;
  text-align: center;
  width: 60%;
  margin-left: 20%;
  margin-top: 16rem;
}
#inside-cover h3 {
  font-size: 0.7em;
  padding-bottom: 1vh;
  margin: auto;
}
#about-us-cover {
  width: 100%;
  text-align: center;
  font-size: 2em;
  margin-bottom: 2em;
}
.about-us-subtext {
  font-size: 0.5em;
  text-align: center;
  color: rgb(23, 104, 23);
  width: 80%;
  padding-bottom: 8em;
  margin: auto;
}

.about-us-sub-container {
  display: flex;
  flex-direction: column;
  /* background-color: #004c45; */
  padding-bottom: 1vh;
}
.about-us-container {
  padding-top: 2em;
  background-color: #004c45;
  border-radius: 10% 30% 50% 70%;
  margin-bottom: 5em;
  padding-bottom: 12em;
  /* border-radius: 86% 14% 77% 23% / 76% 23% 77% 24%; */
  /* border-radius: 70% 30% 77% 23% / 76% 18% 82% 24%; */
  /* border-radius: 63% 37% 66% 34% / 76% 71% 29% 24%; */
  border-radius: 71% 50% 75% 50% / 5% 5% 5% 5%;
}

.images-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-spacing: 1em;
}
.img-with-text {
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 0 3.5em 2vh 3.5em;
}

.img-with-text > img {
  margin: 1em auto;
  margin-bottom: 0px;
  display: block;
  height: 400px;
  width: 21rem;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
}

.description {
  font-size: 1.3vw;
  margin: auto;
  background-color: #fffbf5;
  color: #f0956a;
  width: 21rem;
  padding: 0.4em;
  border-bottom-left-radius: 0.3em;
  border-bottom-right-radius: 0.3em;
}

.description > p {
  margin-bottom: 0vh !important;
}
.description > .v-card__subtitle, .v-card__text, .v-card__title {
  padding: 0.4em !important;
  color: #f0956a !important;

}

.description > .v-card__subtitle {
  font-size: 1.4em;
 }

 .description > .v-card__text {
   font-size: 0.6em;
 }

#about-us-header h3 {
  padding-top: 1em;
  color: #f0956a;
}
#about-us-header p {
  color: white;
  font-size: 1.5em;
  margin: auto;
  width: 40%;
  text-align: center;
}

.img-with-text h3 {
  color: #fffbf5;
}
.about-us-sub-header {
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: 3em;
}

#self-description {
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;
  display: flex;
  align-items: center;
}

#self-description p {
  font-size: 1.5em;
}

#enactus-weltkarte {
  width: 1000px;
  height: 500px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.dark-green {
  background-color: #004c45;
  color: #fffbf5;
}

.sponsors h3,
.flex-spons h3 {
  text-align: center;
  font-size: 2em;
  color: rgba(204, 82, 25, 0.835);
}
.flex-spons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.flex-spons img {
  width: 420px;
  height: 300px;
  display: block;
  padding: 3rem;
}
img[src="assets/orgaLogos/graf.png"] {
  padding: 3em;
  padding-left: 6em;
  padding-right: 6em;
}
img[src="assets/orgaLogos/bosch.png"] {
  padding-top: 5em;
  padding-bottom: 5em;
}
.flex-spons h3 {
  padding: 4em;
  width: 883px;
}
#contact {
  float: right;
  width: 65%;
  padding-bottom: 3em;
}
#additional-info {
  width: 35%;
  text-align: center;
  padding: 3em;
}
#additional-info h4 {
  font-size: 1.5em;
  margin-top: 1em;
}
#additional-info p {
  display: block;
  width: 50%;
  margin: auto;
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
  width: 100%;
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
  width: 60rem;
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

</style>
