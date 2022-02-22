<template>
  <div class="container-fluid  parent">
    <div class="row justify-content-between">
      <div class="decoration col-sm mb-5">
        <h2>À propos</h2>
        <p>
          Un développeur web passionné ! Ma passion pour le développement web
          commence en 2003 et m’a demandé un changement radical de cursus afin
          de pouvoir pleinement l’exploiter. Dès lors, je mis tout en oeuvre
          pour percer dans cette voie, tout en prenant du plaisir sur les divers
          projets développés. En Mai 2009, je décide de devenir développeur web
          indépendant après plusieurs postes en tant que développeur web «
          full-stack » réussis, qui me conforteront dans cette idée afin de
          toucher un plus large panel de domaines d’activités, voir du pays et
          conquérir le monde !
        </p>
        <div class="text-center">
          <button class="btn btn-outline-secondary mx-auto">
            Contactez-moi !
          </button>
        </div>
      </div>
      <div class="picture col-sm">
        <img
          class="img-fluid img-thumbnail"
          src="../assets/a_propos.jpg"
          alt="vue_sur_un_ordinateur"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "A_propos",
};
</script>
<style scoped>
@media (min-width: 576px) {
  .parent {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }
}
.parent{
  padding-top: 5rem;
}
.container-box {

  width: 80%;
  margin-right: auto;
  margin-left: auto;
}
p {
  overflow: hidden;
  height: 25vh;
}
img {
  object-fit: cover;
  height: 43vh;
  width: 100%;
}
#propos {
  padding-top: 0px;
}
</style>
