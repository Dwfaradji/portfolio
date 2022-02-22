<template>
  <div class="home">
    <Carousel
      :navigation="true"
      :pagination="false"
      :startAutoPay="true"
      :timeout="2000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides.picture" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="require(`../assets/${slide}.jpg`)" alt="" />
          <div v-for="(slide, index) in carouselSlides.title" :key="index">
            <h1 v-show="currentSlide === index + 1">{{ slide }}</h1>
          </div>
          <div v-for="(slide, index) in carouselSlides.sousTitre" :key="index">
            <p v-show="currentSlide === index + 1">{{ slide }}</p>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Slide from "../components/CarouselSlide.vue";
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
        "Pour un site bien réferencer",
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
h1,
p {
  position: relative;
  bottom: 40rem;
  display: flex;
  justify-content: center;
  color: red;
}
.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;
  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
}
</style>
