<template>
    <div class="lineup bg-light h-100">
        <h1 class="pb-4 pt-4">Programmation</h1>
        <b-container class="pb-5">
            <b-row align-h="center" class="pt-2">
                <b-input-group class="mt-3" style="width: 40vw">
                    <b-input-group-prepend is-text>
                        <b-icon icon="search"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input v-model="searchString" placeholder="Search for artists, genres, days, places or events"></b-form-input>
                </b-input-group>
            </b-row>
        </b-container>
        <b-container>
            <p >In alphabetical order</p>
            <b-row align-h="center">
                <b-card-group deck id="lineup" v-for="(item, index) in even(filteredItems)">
                    <b-col>
                        <b-card text-variant="dark" style="width: 20rem;" class="mb-2">
                            <b-card-img :src='item.thumbnail' style="float: left; width: 100px; height: 100px; object-fit: cover;" class="mr-3"></b-card-img>
                            <div style="text-align: left" class="mb-3">
                                <b-card-title style="margin-bottom: 0">{{item.name}}</b-card-title>
                                <b-card-text>{{item.genre}}</b-card-text>
                                <b-card-sub-title>{{item.day}} - {{item.time}}{{item.timeValue}}</b-card-sub-title>
                                <b-card-text>{{item.type}} at {{item.place}}</b-card-text>
                            </div>
                            <b-button v-b-toggle style="text-align: center; width: 100%" class="btn-light" :href="'#example-collapse'+index" @click.prevent>More informations</b-button>
                            <b-collapse :id="'example-collapse'+index">
                                <div class="card-body">{{item.description}}</div>
                            </b-collapse>
                        </b-card>
                    </b-col>
                </b-card-group>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Lineup',
        data() {
            return{
                searchString: "",
                items: [
                    {thumbnail: "https://bit.ly/35erni9", name: 'Orelsan', genre: 'Rap', day: "Friday", time: "8", timeValue: "PM", place: "Pepsi Tent", type:"Concert", description:"Lorem ispum"},
                    {thumbnail: "https://bit.ly/38j1n7f", name: 'David Ghetto', genre: 'EDM', day: "Saturday", time: "11", timeValue: "PM", place: "Mainstage", type:"Concert", description:"Lorem ispum"},
                    {thumbnail: "https://bit.ly/38j1n7f", name: 'David Ghetto', genre: 'EDM', day: "Saturday", time: "6", timeValue: "PM", place: "VIP House", type:"Meeting", description:"Lorem ispum"}
                ]
            }
        },
        methods: {
            even: function(arr) {
                return arr.slice().sort(function(a, b) {
                    return a.name > b.name ? 1 : -1;
                });
            },
        },
        computed: {
            filteredItems: function () {
                let items_array = this.items,
                    searchString = this.searchString;

                if(!searchString){
                    return items_array;
                }
                searchString = searchString.trim().toLowerCase();
                items_array = items_array.filter(function(item){
                    if(item.name.toLowerCase().indexOf(searchString) !== -1){
                        return item;
                    }
                    if(item.genre.toLowerCase().indexOf(searchString) !== -1){
                        return item;
                    }
                    if(item.day.toLowerCase().indexOf(searchString) !== -1){
                        return item;
                    }
                    if(item.time.toLowerCase().indexOf(searchString) !== -1){
                        return item;
                    }
                    if(item.timeValue.toLowerCase().indexOf(searchString) !== -1){
                        return item;
                    }
                    if(item.place.toLowerCase().indexOf(searchString) !== -1){
                        return item;
                    }
                    if(item.type.toLowerCase().indexOf(searchString) !== -1){
                        return item;
                    }
                });
                return items_array;
            }
        }
    }
</script>

<style>
    
</style>