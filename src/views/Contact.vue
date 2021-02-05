<template>
    <div class="contact bg-light h-100" style="padding: 5vw">
        <h1>Contact</h1>
        <b-container>
            <b-row>
                <b-card class="col-md-10 mx-auto">
                    <b-form class="mx-auto" style="text-align: left; padding: 3vw" @submit="onSubmit" @reset="onReset" v-if="show">
                        <b-form-group required id="input-group-1" label="Adresse mail*"
                                      label-for="input-1"
                                      description="Nous ne partagerons votre adresse mail avec personne.">
                            <b-form-input
                                    id="input-1"
                                    v-model="form.email"
                                    type="email"
                                    placeholder="Entrez votre adresse mail"
                                    required></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Nom" label-for="input-2">
                            <b-form-input
                                    id="input-2"
                                    v-model="form.lastname"
                                    placeholder="Entrez votre nom de famille"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-3" label="Prénom" label-for="input-2">
                            <b-form-input
                                    id="input-3"
                                    v-model="form.firstname"
                                    placeholder="Entrez votre prénom"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-4" label="Sujet*" label-for="input-3">
                            <b-form-select
                                    id="input-4"
                                    v-model="form.subject"
                                    :options="subject"
                                    required
                            ></b-form-select>
                        </b-form-group>
                        <b-form-group id="input-group-5" label="Message*" label-for="input-2">
                            <b-form-textarea
                                    style="min-height: 10vh"
                                    id="input-5"
                                    v-model="form.message"
                                    placeholder="Exprimez-vous..."
                                    required
                            ></b-form-textarea>
                        </b-form-group>
                        <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }">
                            <b-form-checkbox-group
                                    class="mt-3"
                                    v-model="form.checked"
                                    id="checkboxes-6"
                                    :aria-describedby="ariaDescribedby"
                                    required>
                                <b-form-checkbox value="RGPD">En soumettant ce formulaire j'accepte que les informations saisies soient exploitées dans le cadre de la demande initiale et des échanges pouvant en découler.*</b-form-checkbox>
                            </b-form-checkbox-group>
                            <b-form-checkbox-group
                                    class="mt-1"
                                    v-model="form.checked"
                                    id="checkboxes-7"
                                    :aria-describedby="ariaDescribedby">
                                <b-form-checkbox value="Newsletter">Je souhaite recevoir les dernières actualités du festival.</b-form-checkbox>
                            </b-form-checkbox-group>
                            <p class="pt-3">* Champs obligatoires</p>
                        </b-form-group>
                        <b-button type="submit" class="btn-dark mt-1">Envoyer</b-button>
                    </b-form>
                </b-card>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        data() {
            return {
                form: {
                    email: '',
                    lastname: '',
                    firstname: '',
                    subject: null,
                    message: '',
                    checked: []
                },
                subject: [{ text: 'Sélectionnez le sujet de votre message', value: null }, 'Programmation', 'Billetterie', 'Accès au site', 'Presse', 'Bénévolat', 'Sponsoring', 'Marketing', 'Autre'],
                show: true
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(event) {
                event.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.lastname = ''
                this.form.firstname = ''
                this.form.subject = null
                this.form.message = ''
                this.form.checked = []
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>

<style>
    .required:after {
        content:" *";
        color: darkred;
    }
</style>