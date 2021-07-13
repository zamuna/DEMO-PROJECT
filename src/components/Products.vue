<template>
  <div class="fluid-homepage">
    <v-row>
      <v-col
        v-for="(product, index) in products"
        :key="index"
        class="d-flex"
        cols="12"
        md="4"
        sm="4"
      >
        <Product :product="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Product from "./Product.vue";
import axios from "axios";
export default {
  components: {
    Product,
  },
  data() {
    return {
      show: false,
      products: [],
    };
  },
  mounted: function () {
    axios
      .get(
        "http://localhost:8080/services/catalog/v4/category/shop/new/all-new/index.json"
      )
      .then((response) => {
        return response.data;
      })
      .then((jsonData) => {
        this.products = jsonData.groups;
      });
  },
};
</script>