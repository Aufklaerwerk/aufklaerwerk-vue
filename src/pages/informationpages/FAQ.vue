<template>
  <div id="faq-page">
    <div id="header"><h1>Willkommen in unserem FAQ</h1></div>
    <div id="FAQ section">
      <VueFaqAccordion
        :items="myItems"
        activeColor="#ff5100"
        fontColor="#004c45"
        borderColor="white"
      />
    </div>
  </div>
</template>

<script>
import VueFaqAccordion from "vue-faq-accordion";

export default {
  components: {
    VueFaqAccordion,
  },
  data() {
    return {
      myItems: [
        {
          title: "Was macht Aufklärwerk?",
          value: "Aufklärwerk macht die Welt besser",
        },
        {
          title: "Warum sollte ich Aufklärwerk nutzen?",
          value:
            "Aufklärwerk vereinfacht das Anbiteten und das Suchen von Begegnungsangeboten jeglicher Art. Anbietenden Organisationen wird die Problematik eines Web-Auftritts abgenommen. Diesen ermöglichen wir eine kostenlose Darstellung im Internet auf unserer Plattform. Suchende Organisationen hingegen haben die Möglichkeit Angebote in ihrer Nähe zu finden ohne sich durch den Dschungel aus Google Ergebnissen kämpfen zu müssen.",
        },
        {
          title: "Was muss ich als Anbietende Organisation machen?",
          value:
            "Eigentlich nicht viel, kontaktieren Sie uns einfach, wir senden Ihenn ein Formular zu und Sie haben in Null komma nichts einen Webauftritt!",
        },
        {
          title: "Und was muss ich als Suchende Person/Organisation machen?",
          value:
            "Gehen Sie auf die Startseite und schauen Sie sich über die Suchmaske einfach mal in Ihrer Stadt um!",
        },
      ],
    };
  },
};
</script>
<style>
#faq-page {
  margin: auto;
  width: 50%;
  min-height: 90vh;
}

#faq-page h1 {
  margin: 10vh;
  color: #004c45;
}
</style>
