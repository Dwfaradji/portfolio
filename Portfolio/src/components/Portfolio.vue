<template>
  <div class="container-fluid align-content-center parent">
    <div class="text-center">
      <h2>Mes projets</h2>
      <p>Tout les projets réaliser</p>
    </div>

    <div class="row d-flex justify-content-between col-sm-12">
      <transition class="fade-in">
        <div class="card mb-5 style-width">
          <a class="hover-style" href="https://dwfaradji.github.io/FaradjiBoucif_2_27052021/" target="_blank">
            <img
              class="card-img-top"
              src="../assets/reservia.jpg"
              alt="Card image cap"
            />
            <div class="card-body border">
              <p class="card-text text-center">RÉSERVIA</p>
            </div>
          </a>
        </div>
      </transition>
      <transition class="fade-in">
        <div class="card mb-5 style-width">
          <a class="hover-style" href="https://dwfaradji.github.io/FaradjiBoucif_3_27052021/" target="_blank">
            <img
              class="card-img-top"
              src="../assets/Ohmyfood.jpg"
              alt="Card image cap"
            />
            <div class="card-body border">
              <p class="card-text text-center">OHMYFOOD</p>
            </div>
          </a>
        </div>
      </transition>
      <transition class="fade-in">
        <div class="card mb-5 style-width">
          <a class="hover-style" href="https://dwfaradji.github.io/FaradjiBoucif_4_27052021/" target="_blank">
            <img
              class="card-img-top"
              src="../assets/chouette_agence.jpg"
              alt="Card image cap"
            />
            <div class="card-body border">
              <p class="card-text text-center">CHOUETTE AGENCE</p>
            </div>
          </a>
        </div>
      </transition>
      <transition class="fade-in">
        <div class="card mb-5 style-width ">
          <a class="hover-style" href="" target="_blank">
            <img
              class="card-img-top"
              src="../assets/kanap.jpg"
              alt="Card image cap"
            />
            <div class="card-body border">
              <p class="card-text text-center">KANAP</p>
            </div>
          </a>
        </div>
      </transition>
      <transition class="fade-in">
        <div class="card mb-5 style-width ">
          <a class="hover-style" href="" target="_blank">
            <img
              class="card-img-top"
              src="../assets/piquante.jpg"
              alt="Card image cap"
            />
            <div class="card-body border">
              <p class="card-text text-center">SAUCE PIQUANTE</p>
            </div>
          </a>
        </div>
      </transition>
      <transition class="fade-in">
        <div class="card mb-5 style-width ">
          <a class="hover-style" href="" target="_blank">
            <img
              class="card-img-top"
              src="../assets/groupomania.jpg"
              alt="Card image cap"
            />
            <div class="card-body border">
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
/* .hover-style:hover {
  
  opacity: 0.8;
  background-image: url("../assets/plus-solid.svg");
  background-size: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: red;

  transform: translateX(0px, 50%);
} */
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
  width: 80%;
}
</style>
