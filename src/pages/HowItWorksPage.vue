<template>
  <div id="howItWorksPage">
    <!-- Welcome -->

    <div id="welcome-howitworks">
      <h1>Du suchst nach Begegnungsangeboten?</h1>
      <p>
        Du willst Dich weiterbilden und dafür sorgen, dass Vorurteile abgebaut
        werden?
      </p>
    </div>

    <!-- Process-->
    <div id="howitworks">
      <div id="howitworks-image-container">
        <img
          id="howitworks-image"
          src="../assets/flowcharts/howitworks-flowchart.png"
        />
      </div>
      <div id="howitworks-text-container">
        <h2>So einfach geht es!</h2>
        <ol>
          <li class="left-column-item">
            Geben Sie den gewünschten Suchort inkl. Radius an.
          </li>
          <li class="left-column-item">
            Wählen Sie den gewünschten Themenbereich aus.
          </li>
          <li class="left-column-item">
            Klicken Sie auf das bevorzugte Format und starten Sie die Suche.
          </li>
          <li>Wählen Sie das passende Angebot aus.</li>
          <li>
            Registrieren Sie sich auf unserer Plattform oder melden Sie sich an.
          </li>
          <li>
            Buchen Sie Ihr erstes Angebot und freuen Sie sich auf das Erlebnis.
          </li>
        </ol>
      </div>
    </div>

    <!-- Contacts / Questions -->
    <div id="questions-contact-top"></div>
    <div id="questions-contact">
      <p>
        Noch Fragen?<br />
        Schreib uns eine <a href="/contact">Nachricht.</a>
      </p>
    </div>
  </div>
</template>

<script></script>

<style>
html,
body,
#howItWorksPage {
  height: 100%;
  width: 100%;
  background-color: #fffbf5;
  margin: auto;
}

/* Welcome */

#welcome-howitworks {
  text-align: left;
  padding: 8em 0 0 5em;
  margin: auto;
}

#welcome-howitworks h1 {
  color: #ff5100;
}
#welcome-howitworks p {
  color: #292929;
}

/* Process */
#howitworks {
  padding: 0 5% 0 5%;
  margin: auto;
}

#howitworks-image-container {
  float: both;
  margin: auto;
  padding-bottom: 5%;
}
#howitworks-image {
  height: auto;
  width: auto;
  max-width: 90%;
  display: flex;
  margin: auto;
}

#howitworks-text-container {
  margin: auto;
  max-width: 70%;
  float: both;
  border-radius: 25px 25px 25px 25px;
  background-color: #f0956a;
  padding: 2em 2em 2em 2em;
}

#howitworks-text-container h2 {
  text-align: left;
  color: #fffbf5;
  margin-left: 1.5em;
  margin-bottom: 1em;
  margin-top: 0.5em;
}

#howitworks-text-container ol {
  color: #292929;
  text-align: left;
  columns: 2;
  column-gap: 1.5em;
  margin-left: 2em;
  margin-right: 2em;
  margin-bottom: 0.5em;
  text-indent: 0.5em;
}

#howitworks-text-container li {
  margin-bottom: 1em;
}

.left-column-item {
  margin-right: 1.5em;
}

#questions-contact-top {
  float: left;
  width: 100%;
  height: 3%;
  margin-top: 6%;
  background-color: #ff5100;
  margin-bottom: None;
  border-radius: 5% 95% 100% 0% / 50% 100% 0% 50%;
}

#questions-contact {
  float: left;
  width: 100%;
  background-color: #ff5100;
  margin-bottom: None;
}

#questions-contact p {
  text-align: left;
  margin-left: 3em;
  margin-top: 0em;
  color: #fffbf5;
  margin-bottom: 2.5em;
}

#questions-contact a {
  color: #004c45;
}
</style>
