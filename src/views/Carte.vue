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
                    <h2 class="pb-2 pt-2" style="font-size: 1.5rem">Quelques informations sur le site du festival</h2>
                    <p class="text-dark">Situé dans l'enceinte de "l'Hippodrome Longchamp" notre festival Nation Sound vous accueil dans ce site prestigieux pour un week-end de folie. Retrouvez quatre scènes :
                      <br><br>
                      - Arc Stage <br>
                      - Urban Area <br>
                      - Warehouse <br>
                      - San Miguel Arena <br>
                      <br>
                      Retrouvez de nombreux Bar et plus d'une vingtaine de Food Truck pour un large choix de nourriture au plus grand plaisir de tous !
                      Un centre de soin a été installé à proximité de l'une des entrées du festival au niveau de la porte (North Gate) <b>ce point médical permet également le depistage Covid-19.</b>
                    </p>
                  <h2 class="pb-2 pt-2" style="font-size: 1.5rem">Accessibilité</h2>
                  <p class="text-dark">Chaque année, le Festival Nation Sounds s'engage pour que les personnes en situation de handicap ne soient pas exclues de la culture, en développant progressivement des mesures adaptées à chaque public : plans PMR des lieux du Festival, formation du personnel afin qu'il puisse répondre aux attentes des spectateurs en situation de handicap.
                    <br><br>
                    De manière générale, si souhaitez bénéficier de conseils sur la programmation, faire une réservation et bénéficier de tarifs adaptés ou encore nous informer de vos besoins en termes d’accueil :
                    accessibilite@festival-nationsounds.com
                    <br><br>
                    Vous pouvez nous contacter ou nous poser vos questions dans notre rubrique FAQ accessible en cliquant sur "Plus d'informations".
                  </p>
                </div>
                <div class="pt-4 mx-auto" style="justify-content: center">
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