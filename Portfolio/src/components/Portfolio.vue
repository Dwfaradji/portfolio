<template>
  <div class="container-fluid align-content-center parent">
    <div class="text-center">
      <h2>Mes projets</h2>
      <p>Tout les projets réaliser</p>
    </div>

    <div class="row d-flex justify-content-between col-sm-12">
      <div class="card mb-5 style-width hover-style">
        <a
          class="hover-style"
          href="https://dwfaradji.github.io/FaradjiBoucif_2_27052021/"
        >
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

      <div class="card mb-5 style-width hover-style">
        <a
          class="hover-style"
          href="https://dwfaradji.github.io/FaradjiBoucif_3_27052021/"
        >
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

      <div class="card mb-5 style-width hover-style">
        <a
          class="hover-style"
          href="https://dwfaradji.github.io/FaradjiBoucif_4_27052021/"
        >
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

      <div class="card mb-5 style-width hover-style">
        <a class="hover-style" href="">
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

      <div class="card mb-5 style-width hover-style">
        <a class="hover-style" href="">
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

      <div class="card mb-5 style-width hover-style">
        <a class="hover-style" href="">
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
    </div>
  </div>
</template>
<script>
export default {
  name: "Portfolio",
};
</script>

<style scoped>
.hover-style:hover {
  color: rgb(109, 106, 106);
  border: 1px solid black;
  box-shadow: 2px 2px 2px black;
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
  width: 80%;
}
</style>
