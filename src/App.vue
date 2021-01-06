   <template>
      <div id="app">
        <header class="header">
          <div class="d-flex flex-row align-items-center">
            <img src="./assets/logo-white.png" style="height: 20vw;">
            <H1 class="text-light" style="font-size: 7vw;">NATION SOUND</H1>
            <Menu></Menu>
          </div>
        </header>

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

        <router-view/>


        <footer color="blue" class="footer vw-100 font-small pt-4 mt-4">
import Menu from '@/components/Menu.vue';
import Vue from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';

              <div class="container">
                <div class="row">

                <div class="col">

                  <img src="./assets/logo-gradient.png" style="height: 16vw;">

                </div>

                  <div class="col">
                    <h5 class="title text-primary">Contact</h5>

                  <div class=social>

                      <a href="https://www.facebook.com/"><img src="./assets/facebook.png" alt="logo"></a>
                      <a href="https://www.instagram.com/"><img src="./assets/instagram.png" alt="logo"></a>
                      <a href="https://twitter.com/"><img src="./assets/twitter.png" alt="logo"></a>

                    </div>


                  </div>
                <div class="col">
                  <div>
                    <h5 class="title text-primary">Liens pratiques</h5>

                    <ul class="">

                      <li class="list-unstyled"><a href='Home.vue'>Accueil</a></li>
                      <li class="list-unstyled"><a href="#!">Programmation</a></li>
                      <li class="list-unstyled"><a href="#!">Billeterie</a></li>
                      <li class="list-unstyled"><a href='Carte.vue'>Carte</a></li>
                      <li class="list-unstyled"><a href="#!">Actualité</a></li>
                      <li class="list-unstyled"><a href="#!">Info & FAQ</a></li>

                    </ul>

                  </div>
                </div>

                  <div class="col">
                  <h5 class="title text-primary">À propos</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis, eaque earum iure magni minus omnis quos. Eveniet nam nulla tempora. Aliquid delectus esse eveniet inventore ipsa! Libero porro, sed.</p>
                  </div>
              </div>
              </div>

              <div class="footer-copyright text-center py-3 text-light">
                <container fluid>
                  &copy; 2020 Copyright: Nation Sound </a>
                </container>
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
     background-image: url("./assets/bg-header.jpeg");
     height: 100vh;
     background-size: cover;
   }

   .footer {
     background-color: black;
     box-shadow: 0px 0px 15px 0px;
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
