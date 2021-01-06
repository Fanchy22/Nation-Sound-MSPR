<template>
  <div class="about bg-light h-100">
    <h1>This is an about page</h1>
      <p>{{ $t('welcome') }}</p> 
      {{$i18n.locale}}
  </div>
</template>



<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!",
    "welcome": "Welcome!",
    "yes-button": "Yes",
    "no-button": "No!"
  },
  "de": {
    "hello": "Hallo i18n in SFC!",
    "welcome": "Willkommen!",
    "yes-button": "Ja",
    "no-button": "Nein!"
  }
}
</i18n>