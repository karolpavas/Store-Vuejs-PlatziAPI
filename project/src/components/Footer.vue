<template>
    <footer class="navbar">
      <div class="navbar-content">
        <p>Hecho por Karol Pavas</p>
        <p>Todos los derechos reservados &copy; 2024</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'HomePageFooter',
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #a9acb0;
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0;
  }
  
  .navbar-content {
    display: flex;
    justify-content: center; /* Centra los elementos horizontalmente */
    width: 100%;
  }
  
  .navbar p {
    padding: 20px;
  }
  </style>
  