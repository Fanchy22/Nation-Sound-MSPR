
<template>
  <div id="app" class="header">
    <header>
      <div class="d-flex flex-row align-items-center">
        <img src="./assets/logo-white.png" style="height: 10vw;">
        <H1 class="text-light" style="font-size: 4vw;">NATION SOUND</H1>
      </div>
    </header>
    <Menu></Menu>
    <router-view/>
    <select v-model="$i18n.locale" two>
      <option>FR</option> 
      <option>EN</option>
    </select>
  </div>
</template>

<script>

import Menu from '@/components/Menu.vue';

import Vue from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';

Vue.component(VueCountdown.name, VueCountdown);




export default {

  components: {
    Menu
  },
  mounted() {
    this.$i18n.locale = 'fr'
  }
}


</script>


<style lang="scss">



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


  .header{
    background-image: url("./assets/bg-header.jpeg");
    height: 100vh;
    background-size: cover;
  }

.bm-burger-bars {
  background-color: #fdfdfe;
}

  #nav {
    padding: 30px;


    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }

    #nav {
      padding: 30px;
    }
      a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }


  </style>
