<template>
    <div class="validation">
        <!-- Input -->
        <vl-region class="vl-region--alt">
            <vl-layout>
                <vl-grid mod-stacked class="vl-grid--align-center">
                    <vl-column class="vl-push--8-12">
                        <vl-title tag-name="h1">Valideer een URI</vl-title>
                    </vl-column>
                </vl-grid>
                <vl-grid mod-stacked class="vl-grid--align-center">
                    <vl-column width="8">
                        <vl-input-field v-model="URI" placeholder="Geef een URI mee om deze te valideren"
                                        mod-block></vl-input-field>
                    </vl-column>
                    <vl-column class="vl-push--4-12">
                        <vl-button id="validateButton" @click.native="startValidation">Valideer</vl-button>
                    </vl-column>
                </vl-grid>
            </vl-layout>
        </vl-region>

        <br>
        <vl-layout>
            <vl-title tag-name="h1" mod-alt>Compliancy checklist</vl-title>
            <p>
                Niet alle regels van de compliancy checklist kunnen technisch gecontroleerd worden. Het is dus aan de gebruiker om manueel
                zorgvoldig te controleren of aan de regels van de Vlaamse URI-standaard voldaan wordt.
            </p>
        </vl-layout>

        <ResultComponent ref="result" :URI="URI" />
    </div>
</template>

<script>
    import ResultComponent from "./ResultComponent";


    export default {
        name: 'URIComponent',
        components: {ResultComponent},
        data() {
            return {
                URI: '',
            }
        },
        methods: {
            startValidation() {
                this.$refs.result.validateURI();
            }
        }
    }
</script>
<style lang="scss">
    @import "~@govflanders/vl-ui-core/src/scss/core";
    @import "~@govflanders/vl-ui-input-field/src/scss/input-field";
    @import "~@govflanders/vl-ui-button/src/scss/button";
    @import "~@govflanders/vl-ui-data-table/src/scss/data-table";
    @import "~@govflanders/vl-ui-icon/src/scss/icon";
    @import "~@govflanders/vl-ui-titles/src/scss/titles";
    @import "~@govflanders/vl-ui-checkbox/src/scss/checkbox";

    .vl-input-field {
        height: 40px;
        border-radius: 10px;
    }

    .vl-button {
        border-radius: 10px;
    }

    .spacer {
        height: 30px;
    }
</style>
