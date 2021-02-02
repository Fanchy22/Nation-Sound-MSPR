<template>
    <div class="map bg-light h-100" style="padding: 5vw">
        <h1>Carte</h1>
        <b-container>
            <b-row align-h="center" class="pb-5">
                <b-card no-body class="overflow-hidden col-md-12" text-variant="dark" style="padding: unset; height: 60vh">
                    <b-row no-gutters>
                        <MglMap class="mgl-map-wrapper rounded-0" :accessToken=accessToken :mapStyle=mapStyle @load="onMapLoaded">
                            <MglNavigationControl position="top-right"/>
                            <MglGeolocateControl position="top-right" />
                        </MglMap>
                    </b-row>
                </b-card>
            </b-row>
            <b-row>
                <div style="text-align: left">
                    <h2 class="pb-2 pt-2" style="font-size: 1.5rem">Lorem ipsum</h2>
                    <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div class="pt-4" style="justify-content: center">
                    <b-button class="btn-dark" style="margin-right: 1vw" to="/About">Plus d'informations</b-button>
                    <b-button class="btn-dark" style="margin-right: 1vw" to="/Contact">Contact</b-button>
                </div>
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
        padding-bottom: 6vh!important;
        font-weight:800!important;
        text-transform: uppercase!important;
        font-size: 2.8rem!important;
    }

    h2{
        font-weight:bold!important;
    }

    .btn-dark{
        background-color: #000000!important;
        color: white!important;
    }

    .btn-dark:hover{
        background-color: white!important;
        color: #000000!important;
    }
</style>