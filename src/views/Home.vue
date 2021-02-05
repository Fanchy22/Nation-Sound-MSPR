<template>
    <div>
        <div id="countdown">
            <div style="padding-top: 25vh" class="align-middle">
                <b-card id="countdown-card" class="col-md-6">
                    <h1 style="font-size: 2.0rem!important; margin: unset!important; padding: unset!important; color: white">Nation Sound Festival</h1>
                    <p style="color: white">9 - 12 Juillet 2021 | Hippodrome de Paris Longchamp</p>
                    <countdown :time="153 * 23 * 31 * 49 * 2500" style="font-size: 2.3rem; color: white;">
                        <template slot-scope="props">{{ props.days }} J | {{ props.hours }} H | {{ props.minutes }} M | {{ props.seconds }} S</template>
                    </countdown>
                </b-card>
            </div>
            <b-container class="justify-content-center" v-for="(newscast) in newscasts" >
                <b-row  v-if='newscast.emergency === "1"' class="justify-content-center">
                    <b-card-group class="col-md-5 mb-4" deck id="emergency">
                        <b-col style="padding: unset!important;">
                            <b-card style="background: rgba(200, 000, 000, 0.5);" text-variant="dark" class="mx-auto mb-2">
                                <div class="justify-content-center">
                                    <b-card-title class="text-white mb-1">Alerte : {{newscast.title}}</b-card-title>
                                    <b-card-text class="text-white">{{newscast.type}} - {{newscast.date}}</b-card-text>
                                </div>
                            </b-card>
                        </b-col>
                    </b-card-group>
                </b-row>
                <b-row v-else class="justify-content-center">
                </b-row>
            </b-container>
            <div style="position: absolute; bottom:0; margin: auto; width: 100vw; text-align:center; padding-bottom: 3vh;">
                <p>En savoir plus</p>
                <b-button class="btn-light btn-move" style="border-radius: 30px;" v-scroll-to="'#informations'"><i class="arrow down"></i></b-button>
            </div>
        </div>
        <b-row id="informations" style="margin: unset!important;">
            <b-container style="padding: 5vw">
                <h1 style="font-size: 2.5rem">Titre</h1>
                <div style="text-align: left">
                    <h2 class="pb-2 pt-2" style="font-size: 1.5rem">Sous-titre 1</h2>
                    <p class="text-dark">Texte</p>
                </div>
            </b-container>
        </b-row>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueCountdown from '@chenfengyuan/vue-countdown';

Vue.component(VueCountdown.name, VueCountdown);

    const VueScrollTo = require('vue-scrollto');
    Vue.use(VueScrollTo);

export default {
  name: 'Home',
    data(){
      return{
          newscasts: [
              {thumbnail: "https://bit.ly/35erni9", title: 'Orelsan rejoint le NSF 2021', type: 'Programmation', emergency: "1", date: "09/10/2020", text: "Lorem Ipsum"},
              {thumbnail: "https://bit.ly/3oTc1qF", title: 'Canicule, on vous dit tout', type: 'Météo', emergency: "0", date: "08/10/2020", text: "Lorem Ipsum"},
              {thumbnail: "https://bit.ly/36DcFlN", title: 'La Arc Stage se renouvèle !', type: 'Organisation', emergency: "0", date: "11/09/2020", text: "Lorem Ipsum"},
          ]
      }
    }
}

</script>

<style>
    #countdown-card{
        border: unset;
        background-color: unset;
    }

    #countdown {
        background-image: url("../assets/bg-header.jpg");
        background-position-x: center;
        background-position-y: center;
        width: 100vw;
        height: 88vh;
        object-fit: cover;
    }

    .btn-light{
        text-align: center;
        font-size: 20px;
        border: none;
    }

    .btn-move{
        animation: updown 2s ease infinite;
    }

    @keyframes updown {
        0% {
            transform: translateY(-20%);
        }

        50% {
            transform: translateY(20%);
        }

        100% {
            transform: translateY(-20%);
        }
    }

    .arrow{
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        justify-content: center;
    }

    .down{
        -webkit-transform: rotate(45deg);
    }

    .bm-burger-bars{
        background-color: white;
    }
</style>