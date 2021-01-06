
<template>
  <div id="app">
    <header class="header">
      <div class="d-flex flex-row align-items-center">
        <img src="./assets/logo-white.png" style="height: 20vw;">
        <H1 class="text-light" style="font-size: 7vw;">NATION SOUND</H1>
        <Menu></Menu>
      </div>
      <div class="mt-5">
      <countdown :time="250 * 24 * 60 * 60 * 1000" class="mt-5" style="color: white; font-size: 7vw; font-family: Poppins;">
        <template slot-scope="props">{{ props.days }} J {{ props.hours }} H {{ props.minutes }} M {{ props.seconds }} S</template>
      </countdown>*
      </div>
    </header>


    <router-view/>
  </div>
</template>

<script>

import Menu from '@/components/Menu.vue'
import Vue from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';

Vue.component(VueCountdown.name, VueCountdown);




export default {

  components: {
    Menu // Register your component
  },
  mounted() {
    this.$i18n.locale = 'de'
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
