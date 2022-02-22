<template>
  <div id="nav">
    <Header />
    <Acceuil id="home" />
    <transition class="fade-in">
      <div id="propos">
        <Apropos />
      </div>
    </transition>
    <div class="img-bar">
      <div class="img-fond picture1"></div>
    </div>
    <transition class="fade-in">
      <Portfolio id="portfolio" />
    </transition>
    <div class="img-bar">
      <div class="img-fond picture2"></div>
    </div>
    <transition class="fade-in">
      <Competences id="competences" />
    </transition>
    <div class="img-bar">
      <div class="img-fond picture3"></div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Acceuil from "./components/Acceuil";
import Apropos from "./components/Apropos";
import Portfolio from "./components/Portfolio";
import Competences from "./components/Competences";
export default {
  name: "App",
  components: {
    Header,
    Acceuil,
    Apropos,
    Portfolio,
    Competences,
  },
  fadeInElements: [],
  methods: {
    handleScroll() {
      for (let i = 0; i < this.fadeInElements.length; i++) {
        const elem = this.fadeInElements[i];
        if (this.isElemVisible(elem)) {
          elem.style.opacity = "1";
          elem.style.transform = "translate3d(0, -10px, 0)";
          this.fadeInElements.splice(i, 1); // Pour jouer l'animation seulement une fois
        }
      }
    },

    isElemVisible(el) {
      const rect = el.getBoundingClientRect();
      const elemTop = rect.top + 300; // buffer
      const elemBottom = rect.bottom;
      return elemTop < window.innerHeight && elemBottom >= 0;
    },
  },
  mounted() {
    this.fadeInElements = Array.from(
      document.getElementsByClassName("fade-in"),
    );
    document.addEventListener("scroll", this.handleScroll);
  
  },
  unmounted() {
    document.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
/* test animation */
.fade-in {
  /* height: 500px; */
  margin-bottom: 50px;
  opacity: 0;
  transition: 1.5s all 1s cubic-bezier(0.39, 0.575, 0.565, 1);
  transform: scale(0.5);
  box-sizing: border-box;
  padding: 20px;
}

// +++++++============================
.img-bar {
  margin-top: 3rem;
  height: 300px;
  position: relative;
  overflow: hidden;
}
.img-fond {
  background-attachment: fixed;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
}
.picture1 {
  background-image: url("./assets/bg-2.jpg");
}
.picture2 {
  background-image: url("./assets/bg-1.jpg");
}
.picture3 {
  background-image: url("./assets/bg-4.jpg");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
