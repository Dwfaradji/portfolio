<template>
  <div class="container-fluid align-content-center parent">
    <div class="text-center">
      <h2>Mes projets</h2>
      <p>Tout les projets réaliser</p>
    </div>

    <div class="row d-flex justify-content-center col-sm-12 marginPortfolio">
      <transition class="fade-in">
        <div class="card m-3 style-width card-projet">
          <a
            class="hover-style"
            href="https://dwfaradji.github.io/FaradjiBoucif_2_27052021/"
            target="_blank"
          >
            <img
              class="card-img-top"
              src="../assets/reservia.jpg"
              alt="projet_reservia"
            />
            <div class="card-body border border-radius">
              <p class="card-text text-center">RÉSERVIA</p>
            </div>
          </a>
        </div>
      </transition>
      <transition class="fade-in">
        <div class="card m-3 style-width card-projet">
          <a
            class="hover-style"
            href="https://dwfaradji.github.io/FaradjiBoucif_3_27052021/"
            target="_blank"
          >
            <img
              class="card-img-top"
              src="../assets/Ohmyfood.jpg"
              alt="projet_ohmyfood"
            />
            <div class="card-body border border-radius">
              <p class="card-text text-center">OHMYFOOD</p>
            </div>
          </a>
        </div>
      </transition>
      <transition class="fade-in">
        <div class="card m-3 style-width card-projet">
          <a
            class="hover-style"
            href="https://dwfaradji.github.io/FaradjiBoucif_4_27052021/"
            target="_blank"
          >
            <img
              class="card-img-top"
              src="../assets/chouette_agence.jpg"
              alt="projet_chouette_agence"
            />
            <div class="card-body border border-radius">
              <p class="card-text text-center">CHOUETTE AGENCE</p>
            </div>
          </a>
        </div>
      </transition>
      <transition class="fade-in">
        <div class="card m-3 style-width card-projet">
          <a class="hover-style" href="https://dwfaradji.github.io/kanape-online/" target="_blank">
            <img
              class="card-img-top"
              src="../assets/kanap.jpg"
              alt="projet_kanap"
            />
            <div class="card-body border border-radius">
              <p class="card-text text-center">KANAP</p>
            </div>
          </a>
        </div>
      </transition>
      <transition class="fade-in">
        <div class="card m-3 style-width card-projet">
          <a class="hover-style" href="" target="_blank">
            <img
              class="card-img-top"
              src="../assets/piquante.webp"
              alt="projet_sauce-piquante"
            />
            <div class="card-body border border-radius">
              <p class="card-text text-center">SAUCE PIQUANTE</p>
            </div>
          </a>
        </div>
      </transition>
      <transition class="fade-in">
        <div class="card m-3 style-width card-projet">
          <a class="hover-style" href="" target="_blank">
            <img
              class="card-img-top"
              src="../assets/groupomania.jpg"
              alt="projet_groupomania"
            />
            <div class="card-body border border-radius">
              <p class="card-text text-center">GROUPOMANIA</p>
            </div>
            <section id="sec-3"></section>
          </a>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "Portfolio",
};
</script>

<style scoped>
@media (min-width: 576px) {
  .parent {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center !important;
  }
}
.card-projet:hover {
  border: 3px solid red;
  box-shadow: 2px 1px 2px red;
  border-radius: 10px;
}
.marginPortfolio {
  margin-left: 0;
  margin-right: 0;
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
.hover-style::before {
  transform: scale(0);
  transform-origin: bottom left;
}
.hover-style:hover::before {
  transform: scale(1);
}
.hover-style::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  inset: 0 0 0 0;
  opacity: 0.3;
  background-image: url("../assets/plus-solid.svg");
  background-size: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: red;
  z-index: 10000;
  transition: transform 1s ease-in;
}
.border-radius {
  border-radius: 15px;
  background-color: aliceblue;
}
a {
  text-decoration: none;
  color: black;
}

.parent {
  padding-top: 5rem;
}
.style-width {
  width: 25rem;
}
.container-fluid {
  width: 100%;
}
.card{
  border:none !important;
}
</style>
