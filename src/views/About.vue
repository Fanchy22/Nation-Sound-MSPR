<template>
    <div class="about bg-light h-100" style="padding: 5vw">
        <h1>Informations & FAQ</h1>
        <b-container>
            <b-row class="infos-left pb-5">
                <b-img class="mb-4" :src='"https://bit.ly/2YR7ZEF"' style="float: left; height: 20vh; width: 100%; object-fit: cover;"></b-img>
                <div style="float: left">
                    <div class="pb-4" style="text-align: left; max-width: unset!important;" v-for="(information) in informations">
                        <h2 class="pb-2 pt-2" style="font-size: 1.5rem">{{information.title}}</h2>
                        <p class="text-dark">{{information.text}}</p>
                    </div>
                </div>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-img class="pb-2" :src='"https://bit.ly/3pJl4LV"' style="float: left; height: 20vh; width: 100%; object-fit: cover;"></b-img>
                <div class="pb-4 pt-4 mx-auto">
                    <h2 style="font-size: 1.5rem">FAQ</h2>
                    <p>Questions les plus souvent posées</p>
                </div>
                <div class="accordion col-md-12 mb-3" role="tablist" v-for="(faq, index) in faqs">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1 dark" role="tab">
                            <b-button block v-b-toggle="'accordion-'+index" @click.prevent variant="light" style="font-weight: 600; text-align: left!important">
                                {{faq.question}}
                                <b-icon style="transform: rotate(90deg); margin-top: 4px;" class="float-right caret" icon="caret-right-fill" variant="dark" font-scale="0.9"></b-icon>
                            </b-button>
                        </b-card-header>
                        <b-collapse :id="'accordion-'+index" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text style="text-align: left" class="text-dark pb-4">{{faq.response}}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
                <div class="pt-4 mx-auto" style="justify-content: center">
                    <p>Vous ne trouvez pas la réponse à votre question ici ?</p>
                    <b-button class="btn-dark" style="margin-right: 1vw" to="/Contact">Poser ma question</b-button>
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'About',
        data() {
            return {
                informations: [
                    {title: 'Le Festival Nation Sounds c’est...', text: 'Fondé en 2017 par Phillippe Legaec, le Festival Nation Sounds est aujourd\'hui l\'une des plus importantes manifestations du spectacle vivant contemporain à Paris. Ce festival regroupe chaque année des centaines de milliers de personnes venues de toute l’Europe. \n' +
                            'Et pour cause ! C’est une centaine d’artistes parmi les plus grandes stars du moment qui se succèdent pendant 3 jours sur scène. Le meilleur dans tout ça, c’est que l’ensemble des fonds récoltés sont destinés à une association humanitaire. \n' +
                            'En ce qui concerne le programme, il se compose de spectacles, mais aussi de concerts et de rencontres avec des artistes incroyables. Il y a, chaque soir, une ou plusieurs scènes, qui font de Paris un véritable lieu de rencontres et de découvertes, pour les artistes comme pour les spectateurs. \n'},
                    {title: 'Accessibilité', text: 'Chaque année, le Festival Nation Sounds s\'engage pour que les personnes en situation de handicap ne soient pas exclues de la culture, en développant progressivement des mesures adaptées à chaque public : plans PMR des lieux du Festival, formation du personnel afin qu\'il puisse répondre aux attentes des spectateurs en situation de handicap. \n\nDe manière générale, si souhaitez bénéficier de conseils sur la programmation, faire une réservation et bénéficier de tarifs adaptés ou encore nous informer de vos besoins en termes d’accueil : \n' +
                            'accessibilite@festival-nationsounds.com\n'},
                    {title: 'Protocole sanitaire \n', text: 'Dans l’ensemble des lieux :\n' +
                            'je porte un masque,\n' +
                            'je respecte la distanciation physique,\n' +
                            'je me lave les mains,\n' +
                            'aucuns vestiaire n’est proposé,\n' +
                            'du gel hydroalcoolique est proposé.\n'}
                ],
                faqs: []
            }
        },
        mounted(){
            axios.get('https://wis3.etu.epsi-nantes.fr/MSPR-Nation-Sound-back/public/index.php/api/faq')
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.faqs = response.data
                })
        },
    }
</script>

<style>
</style>





