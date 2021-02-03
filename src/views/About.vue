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
                            <b-button block v-b-toggle="'accordion-'+index" @click.prevent variant="dark" style="font-weight: 600; text-align: left!important" >{{faq.question}}</b-button>
                        </b-card-header>
                        <b-collapse :id="'accordion-'+index" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text class="text-dark float-left pb-4">{{faq.answer}}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'About',
        data() {
            return {
                informations: [
                    {title: 'Title 1', text: 'Lorem Ipsum, ipsum Lorem'},
                    {title: 'Title 2', text: 'Lorem IpsumSinon quanet ta grand mère en slip'},
                ],
                faqs: [
                    {question: 'Q1', answer: 'A1'},
                    {question: 'Q2', answer: 'A2'},
                    {question: 'Q3', answer: 'A3'},
                    {question: 'Q4', answer: 'A4'},
                ]
            }
        }
    }
</script>

<style>

    .accordion button:hover{
        background-color: #000000!important;
        color: white!important;
    }

</style>





