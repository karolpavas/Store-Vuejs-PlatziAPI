<template>
  <div>
    <h2>Categorías</h2>
    <div class="categories" v-if="categories.length > 0">
      <router-link
        v-for="category in categories"
        :key="category.id"
        :to="{ name: category.name, params: { id: category.id } }"
      >
        <img :src="category.image" :alt="category.name">
        <h3>{{ category.name }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeCategories',
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
  },
};
</script>

<style scoped>
.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-align: center;
}

.category-item img {
  width: 100px;
  height: 100px;
}

.category-item h3 {
  margin: 5px 0;
}

</style>