<template>
  <div class="Carte bg-light h-100">

    <h1>{{ $t('welcome') }}</h1>

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

<script>
// @ is an alias to /src

export default {
  name: 'Carte',
  
}
</script>
