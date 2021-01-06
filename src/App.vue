
<template>
  <div id="app">
    <header class="header">
      <H1 class="text-light">Nation sound</H1>
      <img src="logo.png">

    </header>
    <!-- <Menu></Menu> -->

    <router-view/>
  </div>
</template>

<script>

import Menu from '@/components/Menu.vue'

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
    background-image: url("https://cdn.radiofrance.fr/s3/cruiser-production/2020/08/f3d13578-17c2-4138-a3ca-d3d8f9a825a1/870x489_maxnewsspecial141522.jpg");
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
