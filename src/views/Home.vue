<template>
<div>
    <div>
        <div id="countdown">
            <div style="padding-top: 28vh;">
                <countdown :time="250 * 24 * 60 * 60 * 1000" style="color: white; font-size: 7vw; font-family: Poppins;">
                    <template slot-scope="props">{{ props.days }} J | {{ props.hours }} H | {{ props.minutes }} M | {{ props.seconds }} S</template>
                </countdown>
            </div>
            <div style="position: absolute; bottom:0; margin: auto; width: 100vw; text-align:center; padding-bottom: 3vh;">
                <p>En savoir plus</p>
                <b-button class="btn-light" style="border-radius: 30px;" @click="scrollToElement"><i class="arrow down"></i></b-button>
            </div>
        </div>
        <b-row class="information" style="margin: unset!important;">
            <b-container style="padding: 5vw">
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
  name: 'Home',
    methods: {
        scrollToElement() {
            const el = this.$el.getElementsByClassName('information')[0];
            if (el) {
                // Use el.scrollIntoView() to instantly scroll to the element
                el.scrollIntoView({behavior: 'smooth'});
            }
        }
    },
    mounted() {
        this.scrollToElement();
    }
}
</script>

<style>
    #countdown{
        background-image: url("../assets/bg-header.jpg");
        background-position-x: center;
        background-position-y: center;
        width: 100vw;
        height: 88vh;
        object-fit: cover;
    }

    .btn-light{
        text-align: center;
        border-radius: 35px;
        color: white;
        font-size: 20px;
        border: none;
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
</style>