<template>
    <div class="lineup">
        <h1>Programmation</h1>
        <b-container>
            <b-card-group deck id="lineup" v-for="(item, index) in items">
                <b-card :img-src='item.artistThumbnail' text-variant="dark" style="max-width: 23rem; min-height: 10rem; text-align: left">
                    <b-card-title>{{item.artistName}}</b-card-title>
                    <b-card-sub-title>{{item.day}} - {{item.time}}</b-card-sub-title>
                    <b-card-text>{{item.type}} at {{item.place}}</b-card-text>
                    <a v-b-toggle :href="'#example-collapse'+index" @click.prevent>More</a>
                    <b-collapse :id="'example-collapse'+index">
                        <div class="card-body">{{item.description}}</div>
                    </b-collapse>
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
                {artistThumbnail: "https://shorturl.at/ktJQR", artistName: 'Orelsan', day: "Friday", time: "8PM", place: "Pepsi Tent", type:"Concert", description:"Lorem ispum"},
                {artistThumbnail: "https://shorturl.at/nqzO0", artistName: 'David Ghetto', day: "Saturday", time: "11PM", place: "Mainstage", type:"Concert", description:"Lorem ispum"},
                {artistThumbnail: "https://shorturl.at/nqzO0", artistName: 'David Ghetto', day: "Saturday", time: "6PM", place: "VIP House", type:"Meeting", description:"Lorem ispum"}
            ]}
        }
    }
</script>