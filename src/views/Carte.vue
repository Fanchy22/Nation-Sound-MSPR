<template>
  <div class="Carte bg-light h-100">

    <h1>{{ $t('map') }}</h1>



    <div>
      <b-card no-body class="w-75 m-auto">
        <b-row no-gutters>
          <b-col md="6">
              <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Nantes+(Nantes)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed">

              </iframe>
          </b-col>
          <b-col md="6">
            <b-card-body title="Horizontal Card">
              <b-card-text>
                This is a wider card with supporting text as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
              <b-card-text class="text-dark text-left">
                Toilette
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>




  </div>
</template>
<i18n>
{
  "EN": {
    "hello": "Hello i18n in SFC!",
    "welcome": "Welcome!",
    "yes-button": "Yes",
    "no-button": "No!",
    "choose-language": "Choose your language",
    "map": "Festival map"
  },
  "FR": {
    "hello": "Bonjour i18n dans SFC!",
    "welcome": "Bonjour!",
    "yes-button": "Oui!",
    "no-button": "Non!",
    "choose-language": "Choisissez votre langue",
    "map": "Carte du festival"
  }
}
</i18n>



<script>


  export default {
    name: 'Carte',

  
}
</script>
