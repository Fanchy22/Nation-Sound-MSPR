<template>
    <div class="lineup bg-light h-100" style="padding: 5vw">
        <h1>Programmation</h1>
        <b-container>
            <b-row align-h="center" class="pb-5">
                <b-input-group style="width: 40vw">
                    <b-input-group-prepend is-text>
                        <b-icon icon="search"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input v-model="searchString" placeholder="Recherchez des artistes, genres, jours, lieux ou événements"></b-form-input>
                </b-input-group>
            </b-row>
        </b-container>
        <p>Par ordre alphabétique</p>
        <b-row class="justify-content-center">
            <b-card-group class="col-md-4 mb-4" deck id="news" v-for="(artist, index) in even(filteredArtists)">
                <b-col style="padding: unset!important;">
                    <b-card text-variant="dark" class="mb-2">
                        <b-card-img :src='artist.thumbnail' style="float: left; width: 100px; height: 100px; object-fit: cover;" class="mr-3"></b-card-img>
                        <div style="text-align: left" class="mb-3">
                            <b-card-title style="margin-bottom: 0">{{artist.name}}</b-card-title>
                            <b-card-text>{{artist.genre}} - {{artist.type}} </b-card-text>
                            <b-card-sub-title>{{artist.day}} - {{artist.time}}{{artist.timeValue}}</b-card-sub-title>
                            <b-card-text>{{artist.place}}</b-card-text>
                        </div>
                        <b-button v-b-toggle style="text-align: center; width: 100%" class="btn-light" :href="'#example-collapse'+index" @click.prevent>En savoir plus</b-button>
                        <b-collapse :id="'example-collapse'+index">
                            <div class="card-body">{{artist.description}}</div>
                        </b-collapse>
                    </b-card>
                </b-col>
            </b-card-group>
        </b-row>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Lineup',
        data() {
            return{
                searchString: "",
                artists: []
                /*artists: [
                    {thumbnail: "https://bit.ly/35erni9", name: 'Orelsan', genre: 'Rap', day: "Friday", time: "8", timeValue: "PM", place: "Urban Arena", type:"Concert", description:"Lorem ispum"},
                    {thumbnail: "https://bit.ly/38j1n7f", name: 'David Ghetto', genre: 'EDM', day: "Saturday", time: "11", timeValue: "PM", place: "Arc Stage", type:"Concert", description:"Lorem ispum"},
                    {thumbnail: "https://bit.ly/38j1n7f", name: 'David Ghetto', genre: 'EDM', day: "Saturday", time: "6", timeValue: "PM", place: "Gold Room", type:"Meeting", description:"Lorem ispum"},
                    {thumbnail: "https://bit.ly/3aqzoTc", name: 'Arctic Monkeys', genre: 'Rock', day: "Saturday", time: "6", timeValue: "PM", place: "San Miguel® Arena", type:"Concert", description:"Lorem ispum"}
                ]*/
            }
        },
        mounted(){
            axios.get('https://wis3.etu.epsi-nantes.fr/MSPR-Nation-Sound-back/public/index.php/api/artiste')
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.artists = response.data
                })
        },
        methods: {
            even: function(arr) {
                return arr.slice().sort(function(a, b) {
                    return a.name > b.name ? 1 : -1;
                });
            },
        },
        computed: {
            filteredArtists: function () {
                let artists_array = this.artists,
                    searchString = this.searchString;

                if(!searchString){
                    return artists_array;
                }
                searchString = searchString.trim().toLowerCase();
                artists_array = artists_array.filter(function(artist){
                    if(artist.name.toLowerCase().indexOf(searchString) !== -1){
                        return artist;
                    }
                    /*if(artist.genre.toLowerCase().indexOf(searchString) !== -1){
                        return artist;
                    }
                    if(artist.day.toLowerCase().indexOf(searchString) !== -1){
                        return artist;
                    }
                    if(artist.time.toLowerCase().indexOf(searchString) !== -1){
                        return artist;
                    }
                    if(artist.place.toLowerCase().indexOf(searchString) !== -1){
                        return artist;
                    }
                    if(artist.type.toLowerCase().indexOf(searchString) !== -1){
                        return artist;
                    }*/
                });
                return artists_array;
            }
        }
    }
</script>

<style>
</style>