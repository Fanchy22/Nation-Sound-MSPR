<template>

    <Slide>
      <div id="nav">
        <router-link to="/">Accueil</router-link> |
        <router-link to="/about">Informations</router-link> |
        <router-link to="/Carte">Carte</router-link> |
        <router-link to="/Lineup">Programmation</router-link> |
      </div>

    </Slide>


</template>


<script>
import { Slide } from 'vue-burger-menu'

  export default {
  name : "Menu",
  components: {
  Slide // Register your component
  }
}
</script>