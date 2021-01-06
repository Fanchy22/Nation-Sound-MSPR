<template>
    <div class="lineup">
        <h1 class="pb-4 pt-4">Programmation</h1>
        <b-container>
            <b-row align-h="center">
                <b-card-group deck id="lineup" v-for="(item, index) in items">
                    <b-col>
                        <b-card text-variant="dark" style="width: 20rem; text-align: left" class="mb-2">
                            <b-card-img :src='item.artistThumbnail' style="float: left; width: 100px; height: 100px; object-fit: cover;" class="mr-3"></b-card-img>
                            <b-card-title>{{item.artistName}}</b-card-title>
                            <b-card-sub-title>{{item.day}} - {{item.time}}</b-card-sub-title>
                            <b-card-text class="mb-5">{{item.type}} at {{item.place}}</b-card-text>
                            <a v-b-toggle :href="'#example-collapse'+index" @click.prevent>More</a>
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
            items: [
                {artistThumbnail: "https://bit.ly/35erni9", artistName: 'Orelsan', day: "Friday", time: "8PM", place: "Pepsi Tent", type:"Concert", description:"Lorem ispum"},
                {artistThumbnail: "https://bit.ly/38j1n7f", artistName: 'David Ghetto', day: "Saturday", time: "11PM", place: "Mainstage", type:"Concert", description:"Lorem ispum"},
                {artistThumbnail: "https://bit.ly/38j1n7f", artistName: 'David Ghetto', day: "Saturday", time: "6PM", place: "VIP House", type:"Meeting", description:"Lorem ispum"}
            ]}
        },
        filters: {
        }
    }
</script>