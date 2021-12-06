<template>
  <div id="footer" class="p-4">
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
        <a href="https://www.facebook.com/hinterteilprojekt/">
          <img src="../assets/icons/facebook.png" id="icon" />
        </a>
        <a href="https://www.instagram.com/hinterteil_projekt/">
          <img src="../assets/icons/instagram.png" id="icon1" />
        </a>
        <a href="https://www.linkedin.com/company/71180590">
          <img src="../assets/icons/linkedin.png" id="icon1" />
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
}

#footer-container {
  display: flex;
  direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 2vw 2vh 2vw;
}

#footer-container a {
  color: #004c45;
}

#trademark {
  margin-right: 10vw;
}

#footer-col {
  display: flex;
  direction: row;
}

#icon {
  height: 32px;
  width: 32px;
  margin-left: 10vw;
}

#icon1 {
  height: 32px;
  width: 32px;
  margin-left: 1vw;
}
</style>
