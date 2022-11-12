<template>
  <div class="home">
    <Carousel
      :navigation="true"
      :pagination="false"
      :startAutoPay="false"
      :timeout="3500"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides.picture" :key="index">
        <div v-show="currentSlide === index + 1" class="container-slide">
          <img
            class="image-slide"
            :src="require(`../assets/${slide}.jpg`)"
            alt=""
          />
          <div class="text-slide">
            <div v-for="(slide, index) in carouselSlides.title" :key="index">
              <h1 v-show="currentSlide === index + 1">{{ slide }}</h1>
            </div>
            <div
              v-for="(slide, index) in carouselSlides.sousTitre"
              :key="index"
            >
              <p v-show="currentSlide === index + 1">{{ slide }}</p>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "../views/CarouselPagination.vue";
import Slide from "../views/CarouselSlide.vue";
export default {
  name: "Home",
  components: { Carousel, Slide },
  setup() {
    const carouselSlides = {
      picture: ["bg-1", "bg-2", "bg-3", "bg-4"],
      title: [
        "Développeur Freelance",
        "Un code source propre",
        "Des tarifs attractif",
        "Pour un site bien référencer",
      ],
      sousTitre: [
        "À votre service",
        "Codage uniquement a la main",
        "Prix a la carte ",
        "Pour nous le seo est la base ",
      ],
    };
    return { carouselSlides };
  },
};
</script>

<style lang="scss" scoped>
.text-slide {
  text-align: center;
  position: relative;
  bottom: 500px;
  color:black;
  width: 65%;
  overflow: hidden;
  z-index: 1000;
  margin: 0 auto 0 auto;
  h1 {
    color: black;
    font-size: 60px;
  }
}

.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;
  .container-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100vh;
    height: 100vh;
    .image-slide {
      min-width: 100%;
      object-fit: cover;
      width: 100%;
      height: 100vh;
    }
  }
}
@media screen and (max-width: 576px) {
  .text-slide {
    width: 70%;
    bottom: 589px;
    h1 {
      font-size: 30px;
    }
  }
}
</style>
