<template>
  <div id="app" class="header">
      <header>
          <b-navbar style="background-color: black; min-height: 10vh">
              <b-navbar-brand href="Home.vue">
                  <div class="d-flex flex-row align-items-center">
                      <img src="./assets/logo-white.png" style="height: 5vw; min-height: 10vh">
                  </div>
              </b-navbar-brand>
              <b-nav-item class="d-flex flex-row align-items-center">
                  <Menu></Menu>
              </b-nav-item>
          </b-navbar>
      </header>

      <router-view/>

      <footer class="footer vw-100 font-small">
          <div class="container">
              <div class="row pt-4">
                  <div class="col">
                      <img src="./assets/logo-white.png" style="height: 16vw;">
                  </div>
                  <div class="col">
                      <div>
                          <ul>
                              <h5 class="title text-white">Liens pratiques</h5>
                              <li class="list-unstyled"><a href='Home.vue'>Accueil</a></li>
                              <li class="list-unstyled"><a href="Lineup.vue">Programmation</a></li>
                              <li class="list-unstyled"><a href="Tickets.vue">Billeterie</a></li>
                              <li class="list-unstyled"><a href='Carte.vue'>Carte</a></li>
                              <li class="list-unstyled"><a href="#!">Actualité</a></li>
                              <li class="list-unstyled"><a href="#!">Info & FAQ</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="col">
                      <h5 class="title text-white">À propos</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis, eaque earum iure magni minus omnis quos. Eveniet nam nulla tempora. Aliquid delectus esse eveniet inventore ipsa! Libero porro, sed.</p>
                  </div>
                  <div class="col">
                      <h5 class="title text-white">Contact</h5>
                      <div class=social>
                          <a href="https://www.facebook.com/"><img src="./assets/facebook.png" alt="logo"></a>
                          <a href="https://www.instagram.com/"><img src="./assets/instagram.png" alt="logo"></a>
                          <a href="https://twitter.com/"><img src="./assets/twitter.png" alt="logo"></a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="footer-copyright text-center py-3 text-light">
              <a>&copy;2020 Copyright : Nation Sound</a>
          </div>
      </footer>
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
    @media (max-width: 850px) {
        .width-max{
            width: 100vw;
        }
    }

    #app {
     font-family: Avenir, Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
    }

    .header{
     height: 100vh;
     background-size: cover;
    }

    .footer {
     background-color: black;
    }

    .social a {
     padding: 10px;
     justify-content: align-items;
     margin: 10px;
    }

    ul li a {
     color: #D3D0CF;
    }

    p{
     color: #D3D0CF;
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
            margin-bottom: 30px;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
