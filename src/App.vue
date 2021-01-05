<<<<<<< Updated upstream
<template>
  <div id="app">
    <header class="header">
      <H1 class="text-light">Nation sound</H1>
      <img src="logo.png">

    </header>
    <Menu></Menu>

    <router-view/>
  </div>
</template>

<script>

import Menu from '@/components/Menu.vue'

export default {

  components: {
    Menu // Register your component
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

      <footer>
        mon footer
        <mdb-footer color="blue" class="font-small pt-4 mt-4">
          <mdb-container class="text-left">
            <mdb-row>
              <mdb-col sm="6">
                <h5 class="title">Footer Content</h5>
                <p>Here you can use rows and columns here to organize your footer content.</p>
              </mdb-col>
              <mdb-col sm="6">
                <h5 class="title">Links</h5>
                <ul>
                  <li class="list-unstyled"><a href="#!">Link 1</a></li>
                  <li class="list-unstyled"><a href="#!">Link 2</a></li>
                  <li class="list-unstyled"><a href="#!">Link 3</a></li>
                  <li class="list-unstyled"><a href="#!">Link 4</a></li>
                </ul>
              </mdb-col>
            </mdb-row>
          </mdb-container>
          <div class="footer-copyright text-center py-3">
            <mdb-container fluid>
              &copy; 2020 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </mdb-container>
          </div>
        </mdb-footer>
      </footer>
.header{
  background-image: url("https://cdn.radiofrance.fr/s3/cruiser-production/2020/08/f3d13578-17c2-4138-a3ca-d3d8f9a825a1/870x489_maxnewsspecial141522.jpg");
}

#nav {
  padding: 30px;

    </div>
  </template>

  <style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  </style>
