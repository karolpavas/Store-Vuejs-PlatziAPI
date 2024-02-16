<template>
    <Header/>
    <div id="home-page">
      <section class="banner">
        <img src="@/assets/logo.jpg" alt="Banner image">
      </section>
      <section class="content">
            <Categories />
        </section>
    </div>
    <Footer />
</template>
  
<script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import Categories from './Categories.vue'
  
  export default {
    name: 'HomePage',
    components: {
      Header,
      Footer,
      Categories
    },
  };
</script>
  
<style scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100vw;
}
.banner img {
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
}
#home-page {
    margin: 0;
    padding: 0;
}
</style>