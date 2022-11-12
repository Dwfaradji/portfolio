<template>
  <div class="container-fluid parent">
    <div class="row justify-content-between">
      <transition class="fade-in">
        <div class="decoration col-sm mb-5">
          <h2>À propos</h2>
          <p>
            Un développeur web passionné ! Ma passion pour le développement web
            commence en 2003 et m’a demandé un changement radical de cursus afin
            de pouvoir pleinement l’exploiter. Dès lors, je mis tout en oeuvre
            pour percer dans cette voie, tout en prenant du plaisir sur les
            divers projets développés. En Mai 2009, je décide de devenir
            développeur web indépendant après plusieurs postes en tant que
            développeur web « full-stack » réussis, qui me conforteront dans
            cette idée afin de toucher un plus large panel de domaines
            d’activités, voir du pays et conquérir le monde !
          </p>
          <div class="text-center">
            <button class="btn mx-auto">
              <a
                class="btn btn-outline-secondary"
                href="mailto:dw.faradji66@yahoo.com"
              >
                Contactez-moi !</a
              >
            </button>
          </div>
        </div>
      </transition>
      <transition class="fade-in">
        <div class="picture col-sm">
          <img
            class="img-fluid img-thumbnail"
            src="../assets/a_propos.jpg"
            alt="vue_sur_un_ordinateur"
          />
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "A_propos",
};
</script>
<style scoped>
/* a{
  text-decoration: none;
  color: black;
} */
@media (min-width: 576px) {
  .parent {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
}
.fade-in {
  /* height: 500px; */
  margin-bottom: 50px;
  opacity: 0;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  transform: scale(0.5);
  box-sizing: border-box;
  padding: 20px;
}

.parent {
  padding-top: 5rem;
}
p {
  overflow: scroll;
  height: 25vh;
}
img {
  object-fit: cover;
  height: 43vh;
  width: 100%;
}

</style>
