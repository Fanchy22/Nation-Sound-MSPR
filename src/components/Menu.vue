<template>
    <slide right>
        <div id="nav" class="row" style="width: 15vw">
            <b-row>
                <router-link to="/" class="menu-item text-light">Accueil</router-link>
                <router-link to="/Lineup" class="menu-item text-light">Programmation</router-link>
                <router-link to="/Tickets" class="menu-item text-light">Billetterie</router-link>
                <router-link to="/Carte" class="menu-item text-light">Carte</router-link>
                <router-link to="/News" class="menu-item text-light">Actualité</router-link>
                <router-link to="/About" class="menu-item text-light">Infos & FAQ</router-link>
                <router-link to="/Contact" class="menu-item text-light">Contact</router-link>
            </b-row>
            <b-row>
                <select v-model="$i18n.locale" two>
                    <option>FR</option>
                    <option>EN</option>
                </select>
            </b-row>
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
        margin-right: 8rem;
    }

    .bm-menu{
        background-color: black!important;
    }

</style>

<i18n>
    {
    "EN": {
    "hello": "Hello i18n in SFC!",
    "welcome": "Welcome!",
    "yes-button": "Yes",
    "no-button": "No!",
    "choose-language": "Choose your language"
    },
    "FR": {
    "hello": "Bonjour i18n dans SFC!",
    "welcome": "Bonjour!",
    "yes-button": "Oui!",
    "no-button": "Non!",
    "choose-language": "Choisissez votre langue"
    }
    }
</i18n>