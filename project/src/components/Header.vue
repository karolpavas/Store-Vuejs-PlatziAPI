<template>
    <header class="navbar" :class="{ 'collapsed': isCollapsed }">
        <button @click="toggleCollapse" class="toggle-btn">&#9776;</button>
        <nav>
            <a href="#">Inicio</a>
            <a href="#">Todos los artículos</a>
            <a href="#">Contacto</a>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HomePageHeader',
    data() {
        return {
            isCollapsed: false
        };
    },
    methods: {
        toggleCollapse() {
            this.isCollapsed = !this.isCollapsed;
        }
    }
};
</script>

<style scoped>
.navbar {
    background-color: #a9acb0;
    color: white;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    margin: 0;
}

.toggle-btn {
    display: none; /* Oculta el botón en pantallas más grandes */
}

.navbar nav {
    flex: 1;
    text-align: right;
    display: flex;
    justify-content: flex-end;
}

.navbar nav a {
    text-decoration: none;
    color: white;
    margin: 0 10px;
    padding: 5px;
    border-radius: 5px;
    transition: 0.3s;
}

/* Media query para el diseño responsive */
@media screen and (max-width: 600px) {
    .toggle-btn {
        display: block; /* Muestra el botón en pantallas más pequeñas */
        font-size: 20px;
        cursor: pointer;
        margin-right: 10px;
    }

    .navbar nav {
        display: none; /* Oculta la navegación en pantallas más pequeñas */
        flex-direction: column;
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        background-color: #a9acb0;
        text-align: center;
    }

    .navbar.collapsed nav {
        display: flex; /* Muestra la navegación cuando está colapsado */
    }

    .navbar nav a {
        margin: 5px 0;
    }
}
</style>
