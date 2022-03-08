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
      <div class="collapse navbar-collapse nav" id="navbarNavAltMarkup">
        <div class="navbar-nav nav-scroll">
          <a
            href="#home"
            v-smooth-scroll
            class="nav-item nav-link active margin nav-scroll"
          >
            <i class="fas fa-home"></i>
            <span class="sr-only">(current)</span>
          </a>
          <a
            href="#propos"
            v-smooth-scroll
            class="nav-item nav-link margin nav-scroll"
          >
            À propos
          </a>

          <a
            href="#portfolio"
            v-smooth-scroll
            class="nav-item nav-link margin nav-scroll"
          >
            Portfolio
          </a>
          <a
            href="#competences"
            v-smooth-scroll
            class="nav-item nav-link margin nav-scroll"
          >
            Compétences
          </a>
          <a
            href="#contact"
            v-smooth-scroll
            class="nav-item nav-link margin nav-scroll"
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
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 80) {
        document.getElementById("scroll").style.background = "white";
        document.getElementById("logo-scroll").style.color = "black";
        document.querySelector(".nav-scroll").style.color = "black";
      } else {
        document.getElementById("scroll").style.background = "black";
        document.getElementById("logo-scroll").style.color = "white";
        document.querySelector(".nav-scroll").style.color = "white";
      }
    };
  },
  mounted() {
    document.getElementById("propos");
  },
};
</script>
<style scoped>
a {
  color: inherit;
}
.anim {
  transition: 0.4s;
}
#scroll {
  transition: 0.4s;
  /* background-color: white; */
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
