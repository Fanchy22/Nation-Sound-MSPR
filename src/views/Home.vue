<template>
<div>
    <div>
        <div id="countdown">
            <div style="padding-top: 30vh;">
                <countdown :time="250 * 24 * 60 * 60 * 1000" style="color: white; font-size: 7vw; font-family: Poppins;">
                    <template slot-scope="props">{{ props.days }} J {{ props.hours }} H {{ props.minutes }} M {{ props.seconds }} S</template>
                </countdown>
            </div>
        </div>
        <b-row>
            <b-container style="margin: 5vw">
                <h1 class="pb-4 pt-4" style="font-size: 2.5rem">Titre</h1>
                <div style="text-align: left">
                    <h2 class="pb-2 pt-2" style="font-size: 1.5rem">Sous-titre 1</h2>
                    <p class="text-dark">Texte</p>
                </div>
            </b-container>
        </b-row>
    </div>
</div>

</template>

<script>


import Vue from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';

Vue.component(VueCountdown.name, VueCountdown);

export default {
  name: 'Home'

}
</script>

<style>
    #countdown{
        background-image: url("../assets/bg-header.jpeg");
        height: 80vh;
        width: 100vw;
        object-fit: cover;
    }
</style>