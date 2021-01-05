<<<<<<< Updated upstream
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Header">Header</router-link> |
      <router-link to="/">Accueil</router-link> |
      <router-link to="/about">Informations</router-link> |
      <router-link to="/Carte">Carte</router-link> |
      <router-link to="/Lineup">Programmation</router-link> |
    </div>
    <router-view/>
  </div>
</template>
=======
  <template>
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <router-link to="/Footer">Footer</router-link>
      </div>
      <router-view/>

      <header>
        Nine header
      </header>
>>>>>>> Stashed changes

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
