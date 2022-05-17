<template>
  <div id="App">
    <header>
      <div id="logo">
        <img src="components/img/nm-logo.webp" alt="logo" />
      </div>
      <div id="titre">
        <h1>Noémie - Développeuse Web</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#logo">Accueil</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <accueil />
      <portfolio />
      <contact />
    </main>

    <footer>
      <div class="navfooter">
        <h2>Menu</h2>
        <nav>
          <ul>
            <li><a href="#logo">Accueil</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="copyright">
        <p>
          © 2022 Noémie - Développeuse web <br />
          N° SIREN : 913 209 110
        </p>
      </div>
      <div class="linktree">
        <h2>Mon Linktree</h2>
        <img src="components/img/noemiedevweb.webp" alt="qr-code linktree" />
      </div>
    </footer>
  </div>
</template>

<script>
import accueil from "./components/accueil.vue";
import portfolio from "./components/portfolio.vue";
import contact from "./components/contact.vue";
export default {
  name: "App",
  components: {
    accueil,
    portfolio,
    contact,
  },
};
</script>
