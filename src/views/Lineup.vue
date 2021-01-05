<template>
    <div class="lineup">
        <h1>Programmation</h1>
        <b-container>
            <b-card-group deck id="lineup" v-for="item in items">
                <b-card :img-src='item.artistThumbnail' text-variant="dark" style="max-width: 23rem; min-height: 10rem">
                    <b-card-title>{{item.artistName}}</b-card-title>
                    <b-card-sub-title>{{item.day}} - {{item.time}}</b-card-sub-title>
                    <b-card-text>{{item.stage}}</b-card-text>
                </b-card>
            </b-card-group>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Lineup',
        data() {
            return{
            items: [
                {artistThumbnail: 'https://shorturl.at/ktJQR', artistName: 'Orelsan', day: "Vendredi", time: "8PM", stage: "Pepsi Tent"},
                {artistThumbnail: 'https://shorturl.at/nqzO0', artistName: 'David Ghetto', day: "Samedi", time: "11PM", stage: "Mainstage"}
            ]}
        }
    }
</script>