<template>
    <div class="news bg-light h-100" style="padding: 5vw">
        <h1>Actualité</h1>
        <b-container>
            <b-row align-h="center" class="pb-5">
                <b-input-group style="width: 40vw">
                    <b-input-group-prepend is-text>
                        <b-icon icon="search"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input v-model="searchString" placeholder="Recherchez une actualité"></b-form-input>
                </b-input-group>
            </b-row>
        </b-container>
        <p>Par date de publication</p>
        <b-row class="justify-content-center">
            <b-card-group class="col-md-6" deck id="news" v-for="(newscast) in even(filteredNewscasts)">
                <b-col style="padding: unset!important;">
                    <b-card id="news-card" text-variant="dark" no-body class="mb-5 overflow-auto">
                        <b-row no-gutters>
                            <b-col md="4">
                                <b-card-img :src='newscast.thumbnail' style="object-fit: cover; height: 30vh" alt="Image" class="rounded-0"></b-card-img>
                            </b-col>
                            <b-col md="8">
                                <b-card-body style="text-align: left" :title='newscast.title'>
                                    <b-card-text>{{newscast.type}} - {{newscast.date}}</b-card-text>
                                    <b-card-text class="text-dark">{{newscast.content}}</b-card-text>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-card-group>
        </b-row>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'News',
        data() {
            return{
                searchString: "",
                newscasts: []
            }
        },
        mounted(){
            axios.get('https://wis3.etu.epsi-nantes.fr/MSPR-Nation-Sound-back/public/index.php/api/actualites')
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.newscasts = response.data
                })
        },
        methods: {
            even: function(arr) {
                return arr.slice().sort(function(a, b) {
                    return a.date > b.date ? 1 : -1;
                });
            },
        },
        computed: {
            filteredNewscasts: function () {
                let newscasts_array = this.newscasts,
                    searchString = this.searchString;

                if(!searchString){
                    return newscasts_array;
                }
                searchString = searchString.trim().toLowerCase();
                newscasts_array = newscasts_array.filter(function(newscast){
                    if(newscast.title.toLowerCase().indexOf(searchString) !== -1){
                        return newscast;
                    }
                    /*if(newscast.type.toLowerCase().indexOf(searchString) !== -1){
                        return newscast;
                    }
                    if(newscast.date.toLowerCase().indexOf(searchString) !== -1){
                        return newscast;
                    }
                    if(newscast.text.toLowerCase().indexOf(searchString) !== -1){
                        return newscast;
                    }*/
                });
                return newscasts_array;
            }
        }
    }
</script>
