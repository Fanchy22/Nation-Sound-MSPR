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

      <div class="page-wrapper">
          <router-view/>
      </div>

      <b-navbar class="footer" style="background-color: black; min-height: 10vh">
          <div class="footer-content">
              <b-row class="align-middle">
                  <div class="col-lg-4">
                      <ul style="padding-left: unset">
                          <h5 class="title text-white">Liens pratiques</h5>
                          <li class="list-unstyled"><router-link to="/" class="text-light">Accueil</router-link></li>
                          <li class="list-unstyled"><router-link to="/Lineup" class="text-light">Programmation</router-link></li>
                          <li class="list-unstyled"><router-link to="/Tickets" class="text-light">Billetterie</router-link></li>
                          <li class="list-unstyled"><router-link to="/Carte" class="text-light">Carte</router-link></li>
                          <li class="list-unstyled"><router-link to="/News" class="text-light">Actualité</router-link></li>
                          <li class="list-unstyled"><router-link to="/About" class="text-light">Infos & FAQ</router-link></li>
                          <li class="list-unstyled"><router-link to="/PrivacyPolicy" class="text-light">Politique de confidentialité</router-link></li>
                          <li class="list-unstyled"><router-link to="/LegalNotice" class="text-light">Mentions Légales</router-link></li>

                      </ul>
                  </div>
                  <div class="col-lg-4">
                      <h5 class="title text-white">À propos</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis, eaque earum iure magni minus omnis quos. Eveniet nam nulla tempora. Aliquid delectus esse eveniet inventore ipsa! Libero porro, sed.</p>
                  </div>
                  <div class="col-lg-4 ">
                      <h5 class="title text-white">Contact</h5>
                      <div class=social>
                          <a href="https://www.facebook.com/"><img src="./assets/facebook.png" alt="logo"></a>
                          <a href="https://www.instagram.com/"><img src="./assets/instagram.png" alt="logo"></a>
                          <a href="https://twitter.com/"><img src="./assets/twitter.png" alt="logo"></a>
                      </div>
                  </div>
              </b-row>
            <hr>
            <h5 class="title text-white">Nos partenaires</h5>

            <b-row>
              <img class="col-md-2" id="parisien" src="./assets/Le_Parisien_logo.svg" alt="">
              <img class="col-md-2" id="ville" href="https://www.leparisien.fr/" src="./assets/Ville_de_Paris_logo_2019.svg" alt="">
                <img class="col-md-2" id="loxam"src="./assets/Loxam_Logo.svg" alt="">
                <img class="col-md-2" id="miguel"src="./assets/san-miguel-cerveza-2-logo-svg-vector.svg" alt="">
                <img class="col-md-2" id="pioneer"src="./assets/Pioneer_logo.svg" alt="">
                <img class="col-md-2" id="balance"src="./assets/new-balance-2-logo-svg-vector.svg" alt="">

            </b-row>
            <hr>

              <b-row>
                  <div class="footer-copyright text-center py-3  text-light">
                      <a>&copy;2020 Copyright : Nation Sound Festival</a>
                  </div>
              </b-row>

          </div>
      </b-navbar>
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

    *{
        font-family: 'Raleway', sans-serif;
    }

    #app {
         -webkit-font-smoothing: antialiased;
         -moz-osx-font-smoothing: grayscale;
         text-align: center;
         color: #2c3e50;
    }


    #parisien {
      padding-left: 90px;
      padding-right: 30px;
      padding-bottom: 10px;
    }

    #ville{
      padding-left: 130px;
      padding-right: 30px;
      padding-bottom: 10px;
    }

    #loxam{
      padding-left: 90px;
      padding-right: 30px;
      padding-bottom: 10px;
    }

    #miguel{
      padding-left: 90px;
      padding-right: 30px;
      padding-bottom: 10px;
    }

    #pioneer{
      padding-left: 90px;
      padding-right: 30px;
      padding-bottom: 10px;
    }

    #balance{
      padding-left: 90px;
      padding-right: 30px;
      padding-bottom: 10px;
    }

    hr{
      background: #F8F9FA;
      width: 100vh;

    }
    .page-wrapper{
        min-height: 100%;
        background-color: #F8F9FA;
        padding-bottom: 40px;
    }

    .header{
        height: 100vh;
        background-size: cover;
    }

    .footer {
        background-color: black;
        color: white;
        min-height: 40vh;
        position: relative;
        box-shadow: 10px 10px 10px 10px black;
    }

    .footer-content{
        margin-top: 6vh;
        text-align: center;
        justify-content: center;
    }

    .align-middle {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer-copyright{
        padding-top: 2vh;
        height: 8vh;
        width: 100%;
    }

    .social a {
     padding: 10px;
     margin: 10px;
    }

    ul li a {
        color: #D3D0CF;
    }

    h5{
      padding-top: 10px;
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