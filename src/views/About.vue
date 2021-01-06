<template>
  <div class="about bg-light h-100">
    <h1>This is an about page</h1>
      <p>{{ $t('welcome') }}</p> 
      <p>{{ $t('choose-language') }}</p> 
  </div>
</template>



<i18n>
{
  "EN": {
    "hello": "Hello i18n in SFC!",
    "welcome": "Welcome!",
    "yes-button": "Yes",
    "no-button": "No!",
    "choose-language": "Choose your language"
  },
  "FR": {
    "hello": "Bonjour i18n dans SFC!",
    "welcome": "Bonjour!",
    "yes-button": "Oui!",
    "no-button": "Non!",
    "choose-language": "Choisissez votre langue"
  }
}
</i18n>