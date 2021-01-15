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