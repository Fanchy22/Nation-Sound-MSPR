<template>
    <div class="lineup bg-light h-100">
        <h1 style="font-size: 2.5rem">Carte</h1>
        <b-container class="pb-5">
            <b-row align-h="center" class="pt-2">
                <b-card no-body class="overflow-hidden col-md-12" text-variant="dark" style="padding: unset; height: 60vh">
                    <b-row no-gutters>
                        <MglMap class="mgl-map-wrapper rounded-0" :accessToken=accessToken :mapStyle=mapStyle @load="onMapLoaded">
                            <MglNavigationControl position="top-right"/>
                            <MglGeolocateControl position="top-right" />
                        </MglMap>
                    </b-row>
                </b-card>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import { MglMap, MglNavigationControl, MglGeolocateControl } from "vue-mapbox";
    import "mapbox-gl/dist/mapbox-gl.css"

    export default {
        name: 'Carte',
        components: {
            MglMap,
            MglNavigationControl,
            MglGeolocateControl,
        },
        data() {
            return {
                accessToken:"pk.eyJ1IjoiZW56b2JvZGluZ2VybW9uIiwiYSI6ImNraDFycHpxNjA3bWsyeW14M25qNzg1MW8ifQ.KSjISzZXWPPQ2tbBQwY9gg", // your access token. Needed if you using Mapbox maps
                mapStyle:"mapbox://styles/enzobodingermon/ckkgy09c00tj317pdn7u4pc1s", // your map style
            };
        },
        created() {
            this.map = null;
        },
        methods: {
            onMapLoaded(event) {
                // in component
                this.map = event.map;
                // or just to store if you want have access from other components
                this.$store.map = event.map;
            }
        }
    };
</script>

<style>

    .mgl-map-wrapper{
        height: 60vh;
    }

    h1{
        padding-top: 6vh!important;
        padding-bottom: 6vh!important;
        font-weight:800!important;
    }

    h2{
        font-weight:bold!important;
    }

</style>