<template>
  <div id="footer">
    <div id="footer-container">
      <div id="trademark">
        <strong>&copy; 2021, Aufklärwerk</strong>
      </div>
      <div class="footer-column">
        <a href="/datasec"> <strong>Datenschutz</strong> </a>
      </div>
      <div class="footer-column">
        <a href="/impressum"><strong>Impressum</strong></a>
      </div>
      <div class="footer-column">
        <a href="/faq"><strong>FAQ</strong></a>
      </div>
      <div class="footer-column">
        <a href="/contact"><strong>Kontakt</strong></a>
      </div>
      <div class="footer-col">
        <a href="https://www.facebook.com/aufklaerwerk/">
          <img src="../assets/icons/facebook.png" id="icon" />
        </a>
        <a href="https://www.instagram.com/aufklaerwerk/">
          <img src="../assets/icons/instagram.png" id="icon1" />
        </a>
        <a href="https://www.linkedin.com/company/71180590">
          <img src="../assets/icons/linkedin.png" id="icon2" />
        </a>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
#footer {
  background: #ece9e4;
  padding: 0%;
  width: 100vw;
  color: #004c45;
  padding: 0.6em !important;
  display: flex;
  justify-content: center;
}

#footer-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
  padding: 1rem

}

#footer-container a {
  color: #004c45;
}

.footer-col {
  display: flex;
  direction: row;
  margin-top: 0.5rem !important;
}

#icon {
  height: 32px;
  width: 32px;
  margin-right: 0.5rem;
}

#icon1 {
  height: 32px;
  width: 32px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

}
#icon2 {
  height: 32px;
  width: 32px;
  margin-left: 0.5rem;
}

@media only screen and (min-width: 1250px) {
  #footer-container {
    flex-direction: row;
  }
}
</style>
