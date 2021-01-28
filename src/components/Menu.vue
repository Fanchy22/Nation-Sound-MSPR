<template>
    <slide right>
        <div id="nav" class="row ml-4 mr-4">
            <router-link to="/" class="menu-item text-light">Accueil</router-link>
            <router-link to="/Lineup" class="menu-item text-light">Programmation</router-link>
            <router-link to="/Tickets" class="menu-item text-light">Billetterie</router-link>
            <router-link to="/Carte" class="menu-item text-light">Carte</router-link>
            <router-link to="/About" class="menu-item text-light">Informations</router-link>
            <select v-model="$i18n.locale" two>
                <option>FR</option>
                <option>EN</option>
            </select>
        </div>
    </slide>
</template>

<script>
import { Slide } from 'vue-burger-menu'

  export default {
  name : "Menu",
  components: {
  Slide // Register your component
  },
}
</script>

<style>

    .menu-item{
        margin-right: 100px;
    }

</style>