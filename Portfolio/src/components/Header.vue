<template>
  <header>
    <nav
      id="scroll"
      class="navbar navbar-expand-lg justify-content-between size fixed-top bar-fix"
    >
      <a id="logo-scroll" class="navbar-brand">DEVCOPS</a>
      <!-- toggle -->
      <button
        id="toggle-scroll"
        class="navbar-toggler navbar-dark bg-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span id="toggle-icon" class="navbar-toggler-icon"></span>
      </button>
      <!-- Navigation -->
      <div class="collapse navbar-collapse nav" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a
            id="nav-text0"
            href="#home"
            v-smooth-scroll
            class="nav-item nav-link margin"
          >
            <i class="fas fa-home"></i>
            <span class="sr-only">(current)</span>
          </a>

          <a
            id="nav-text1"
            href="#propos"
            v-smooth-scroll
            class="nav-item nav-link margin"
          >
            À propos
          </a>

          <a
            id="nav-text2"
            href="#portfolio"
            v-smooth-scroll
            class="nav-item nav-link margin"
          >
            Portfolio
          </a>

          <a
            id="nav-text3"
            href="#competences"
            v-smooth-scroll
            class="nav-item nav-link margin link"
          >
            Compétences
          </a>
          <a
            id="nav-text4"
            class="nav-item nav-link margin link"
            href="#contact"
            v-smooth-scroll
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 50) {
        document.getElementById("scroll").style.background = "white";
        document.getElementById("logo-scroll").style.color = "black";
        document.getElementById("nav-text0").style.color = "black";
        document.getElementById("nav-text1").style.color = "black";
        document.getElementById("nav-text2").style.color = "black";
        document.getElementById("nav-text3").style.color = "black";
        document.getElementById("nav-text4").style.color = "black";
      } else {
        document.getElementById("scroll").style.background = "black";
        document.getElementById("logo-scroll").style.color = "white";
        document.getElementById("nav-text0").style.color = "white";
        document.getElementById("nav-text1").style.color = "white";
        document.getElementById("nav-text2").style.color = "white";
        document.getElementById("nav-text3").style.color = "white";
        document.getElementById("nav-text4").style.color = "white";
        // document.getElementById("nav-text").style.color = "white";
      }
    };
  },

  mounted() {},
};
</script>
<style scoped>
a:hover {
  border-bottom: 5px solid red;
  padding-bottom:2px ;
}
a {
  color: black
}
#scroll {
  transition: 0.4s;
  height: 5rem;
}
.size {
  font-size: 1.5rem;
}
.nav {
  flex-grow: 0;
}
.margin {
  margin-right: 2rem;
}
</style>
