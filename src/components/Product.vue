<template>
  <v-card flat>
    <div v-if="isHovered">
      <b-carousel
        :id="product.id"
        v-model="slide"
        controls
        indicators
        v-if="product.images.length > 0"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        class="d-block img-fluid"
        :img-height="product.images[0].height"
        :img-width="product.images[0].width"
        v-b-hover="handleHover"
        label-indicators="Select Previous or Next to change "
        label-next="Next Image"
        label-prev="Previous Image"
      >
        <div v-for="(image, index) in product.images" :key="index">
          <b-carousel-slide
            v-bind:img-src="image.href"
            :img-height="image.height"
            :img-width="image.width"
            :img-alt="product.name"
            :aria-labelledby="product.id"
            :aria-label="product.name"
            aria-describedby="Images for the product"
          >
          </b-carousel-slide>
        </div>
      </b-carousel>

      <img
        :id="product.id"
        :src="product.hero.href"
        :alt="product.name"
        v-else
        v-b-hover="handleHover"
        v-bind="mainProps"
        class="d-block img-fluid"
        :aria-label="product.name"
        aria-describedby="Product Image"
      />
    </div>

    <div v-else>
      <div v-if="product.hero">
        <img
          :id="product.id"
          :src="product.hero.href"
          :alt="product.name"
          v-b-hover="handleHover"
          v-bind="mainProps"
          class="d-block img-fluid"
          :aria-label="product.name"
          aria-describedby="Product Image"
          :data-isHovered="isHovered"
        />
      </div>
      <div v-else>
        <img
          :id="product.id"
          :src="product.images[0].href"
          :alt="product.name"
          v-b-hover="handleHover"
          class="d-block img-fluid"
          v-bind="mainProps"
          :aria-label="product.name"
          aria-describedby="Product Image"
        />
      </div>
    </div>

    <div class="top-left pt-2">
      <p class="text-secondary overlay" aria-label="Name of the product">
        {{ product.name }}
      </p>
    </div>
    <div class="bottom-left">
      <p
        class="text-white mt-0 mb-0 text-caption"
        aria-label="Price of the product"
      >
        {{
          product.price
            ? product.price.selling
              ? "$ " + product.price.selling
              : "$ " + product.price.regular
            : ""
        }}
      </p>
    </div>
  </v-card>

  <!-- start here -->
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
      slide: 0,
      sliding: null,
      mainProps: { blank: true, width: 363, height: 363, class: "m1" },
    };
  },
  props: {
    product: Object,
  },
  methods: {
    handleHover(hovered) {
      console.log(hovered);
      this.isHovered = hovered;
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
