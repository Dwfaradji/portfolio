<template>
  <div class="parent">
    <div class="text-center">
      <h2>Compétences</h2>
      <p>Mes compétences a votre service</p>
    </div>
    <div class="container_one justify-content-center">
      <transition class="fade-in">
        <div class="col-md-5">
          <h2 class="mb-5">Domaines de compétences</h2>
          <h3>
            <i class="fas fa-check-circle text-danger mr-2 check"></i>GESTION DE
            PROJETS WEB
          </h3>
          <p>
            Site vitrine, corporate, évènementiel, e-commerce, intranet,
            application mobile.
          </p>

          <h3>
            <i class="fas fa-check-circle text-danger mr-2 check"></i
            >APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION
          </h3>
          <p>JS - MYSQL - AJAX / ASP.NET - NODE.JS</p>

          <h3>
            <i class="fas fa-check-circle text-danger mr-2 check"></i
            >INTÉGRATION (X)HTML / CSS
          </h3>
          <p>Codage à la main respectueux des standards du Web</p>
          <h3>
            <i class="fas fa-check-circle text-danger mr-2 check"></i>DYNAMISE
            DES PAGES PAR JAVASCRIPT / AJAX
          </h3>
          <p>Angular, Vue, TypeScript , React</p>
          <h3>
            <i class="fas fa-check-circle text-danger mr-2 check"></i>VALIDATION
            W3C, WAI RÉFÉRENCEMENT NATUREL SEO
          </h3>
          <p>Accessibilité ergonomie des pages web</p>
          <h3>
            <i class="fas fa-check-circle text-danger mr-2 check"></i>CONCEPTION
            MULTI-PLATEFORMES
          </h3>
          <p>Compatible tous supports, tablette application mobile</p>
        </div>
      </transition>

      <transition class="fade-in col-md-5">
        <div>
          <h2>Compétences en développement</h2>
          <div class="mt-5 col-md-12">
            <div class="bar mb-4 progress progress2">
              <div
                class="progress-bar bar color1"
                role="progressbar"
                aria-valuetext="90%"
                style="width: 90%"
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="anim-text">
                  <span class="text-left ml-3 font-weight-bold"
                    >(X)HTML - CSS</span
                  >
                </div>
              </div>
            </div>

            <div class="bar mb-4 progress">
              <div
                class="progress-bar bar color2"
                role="progressbar"
                style="width: 50%"
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="anim-text">
                  <span class="text-left ml-3 font-weight-bold">VUE JS</span>
                </div>
              </div>
            </div>
            <div class="bar mb-4 progress">
              <div
                class="progress-bar bar color3"
                role="progressbar"
                style="width: 60%"
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="anim-text">
                  <span class="text-left ml-3 font-weight-bold"
                    >MYSQL - SQL</span
                  >
                </div>
              </div>
            </div>
            <div class="bar mb-4 progress">
              <div
                class="progress-bar bar color4"
                role="progressbar"
                style="width: 70%"
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="anim-text">
                  <span class="text-left ml-3 font-weight-bold"
                    >JAVASCRIPT - AJAX</span
                  >
                </div>
              </div>
            </div>
            <div class="bar mb-4 progress">
              <div
                class="progress-bar bar color5"
                role="progressbar"
                style="width: 60%"
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="anim-text">
                  <span class="text-left ml-3 font-weight-bold"
                    >ASP.NET - C#</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "Compétences",
};
</script>

<style lang="scss" scoped>
.container_one {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
@media (min-width: 576px) {
  .parent {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center !important;
  }
}
/* Progresse bar test  */
.color1 {
  background-color: #df1818;
  border-radius: 15px;
  animation: progres 5s linear;
}
@keyframes progres {
  0% {
    width: 130px;
  }
  100% {
    width: 90%;
  }
}
.color2 {
  background-color: #df1818;
  border-radius: 15px;
  animation: progres2 5s linear;
}
@keyframes progres2 {
  0% {
    width: 130px;
  }
  100% {
    width: 50%;
  }
}
.color3 {
  background-color: #df1818;
  border-radius: 15px;
  animation: progres3 5s linear;
}
@keyframes progres3 {
  0% {
    width: 130px;
  }
  100% {
    width: 60%;
  }
}
.color4 {
  background-color: #df1818;
  border-radius: 15px;
  animation: progres4 5s linear;
}
@keyframes progres4 {
  0% {
    width: 130px;
  }
  100% {
    width: 70%;
  }
}
.color5 {
  background-color: #df1818;
  border-radius: 15px;
  animation: progres5 5s linear;
}
@keyframes progres5 {
  0% {
    width: 130px;
  }
  100% {
    width: 60%;
  }
}
/* ====================================== */
.parent {
  padding-top: 5rem;
  // width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.check {
  font-size: 1rem;
  position: relative;
  bottom: 5px;
}
.bar {
  height: 50px;
}
h3 {
  font-size: 1.3rem;
}
.anim-text {
  background-color: black;
  text-align: right;
  padding-right: 10px;
}
</style>
