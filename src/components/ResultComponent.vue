<template>
    <div id="result">
        <vl-grid mod-stacked>
            <vl-column>
                <vl-infoblock
                        mod-type="news"
                        :title="'Vormregels (' + formRulesCounter.value + '/' + formRulesCounter.total + ')'">
                    <vl-data-table>
                        <tbody v-if="!baseRulesValidated">
                        <tr>
                            <td>Maakt het URI-schema gebruik van het http(s) protocol?</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Volgt het URI schema volgende structuur: {domein}/{type}/{concept}(/{referentie})*</td>
                            <td></td>
                        </tr>
                        </tbody>

                        <tbody v-else>
                        <tr>
                            <td v-if="protocol.message != ''">
                                <vl-drawers id="drawer-1">
                                    <vl-drawer label="Maakt het URI-schema gebruik van het http(s) protocol?" width="10"
                                               width-m="12">
                                        <h2><strong>Opmerking</strong></h2>
                                        <br>
                                        <p>{{protocol.message}}</p>
                                    </vl-drawer>
                                </vl-drawers>
                            </td>
                            <td v-else>Maakt het URI-schema gebruik van het http(s) protocol?</td>
                            <td v-if="protocol.satisfied">
                                <vl-icon icon="check" style="color: green;"></vl-icon>
                            </td>
                            <td v-else>
                                <vl-icon icon="cross" style="color:red; font-size: 120%;"></vl-icon>
                            </td>
                        </tr>
                        <tr>
                            <td v-if="structure.message != ''">
                                <vl-drawers id="drawer-2">
                                    <vl-drawer
                                            label="Volgt het URI schema volgende structuur: {domein}/{type}/{concept}(/{referentie})*"
                                            width="10"
                                            width-m="12">
                                        <h2><strong>Opmerking</strong></h2>
                                        <br>
                                        <p>{{structure.message}}</p>
                                    </vl-drawer>
                                </vl-drawers>
                            </td>
                            <td v-else>Volgt het URI schema volgende structuur: {domein}/{type}/{concept}(/{referentie})*
                            </td>
                            <td v-if="structure.satisfied">
                                <vl-icon icon="check" style="color: green;"></vl-icon>
                            </td>
                            <td v-else>
                                <vl-icon icon="cross" style="color:red; font-size: 120%;"></vl-icon>
                            </td>
                        </tr>
                        </tbody>
                    </vl-data-table>
                </vl-infoblock>
            </vl-column>
            <vl-column>
                <vl-infoblock
                        mod-type="news"
                        :title="'Domein (' + domainRulesCounter.value + '/' + domainRulesCounter.total +')'">
                    <vl-data-table>
                        <tbody>
                        <tr>
                            <td>Is de bestaande (sub)domeinnaam onafhankelijk van organisatie, product, merk en tijd?</td>
                            <td>
                                <vl-checkbox @input="updateCounter(domainRulesCounter, $event)"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Is de domeinnaam gegarandeerd persistent: zijn er garanties dat de domeinnaam altijd zal
                                blijven bestaan
                                en nooit zal veranderen?
                            </td>
                            <td>
                                <vl-checkbox @input="updateCounter(domainRulesCounter, $event)"/>
                            </td>
                        </tr>
                        </tbody>
                    </vl-data-table>
                </vl-infoblock>
            </vl-column>
            <vl-column>
                <vl-infoblock
                        mod-type="news"
                        :title="'Type (' + typeRulesCounter.value + '/' + typeRulesCounter.total + ')'">
                    <vl-data-table>
                        <tbody>
                        <tr>
                            <td>Is het {type} inbegrepen als onderdeel van het URI-patroon EN is er op zijn minst een
                                onderscheid gemaakt
                                tussen de representatie, het eigenlijke object/concept en een term die behoort tot een
                                vocabularium,
                                thesaurus of ontologie?
                            </td>
                            <td>
                                <vl-checkbox @input="updateCounter(typeRulesCounter, $event)"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Volgt het {type} van alle URI’s in het domein en subdomeinen dezelfde strikte classificatie
                                waaronder ten minste id, doc en ns behoren?
                            </td>
                            <td>
                                <vl-checkbox @input="updateCounter(typeRulesCounter, $event)"/>
                            </td>
                        </tr>
                        </tbody>
                    </vl-data-table>
                </vl-infoblock>
            </vl-column>
            <vl-column>
                <vl-infoblock
                        mod-type="news"
                        :title="'Concept (' + conceptRulesCounter.value + '/' + conceptRulesCounter.total + ')'">
                    <vl-data-table>
                        <tbody>
                        <tr>
                            <td>Is het {concept} als onderdeel van het URI-patroon aanwezig in het URI-patroon?</td>
                            <td>
                                <vl-checkbox @input="updateCounter(conceptRulesCounter, $event)"/>
                            </td>
                        </tr>
                        </tbody>
                    </vl-data-table>
                </vl-infoblock>
            </vl-column>
            <vl-column>
                <vl-infoblock
                        mod-type="news"
                        :title="'Referentie (' + referenceRulesCounter.value + '/' + referenceRulesCounter.total + ')'">
                    <vl-data-table>
                        <tbody>
                        <tr v-if="!baseRulesValidated">
                            <td>Behalve in het type “ns” worden er geen fragment-identifiers gebruikt.</td>
                            <td></td>
                        </tr>
                        <tr v-else>
                            <td v-if="reference.message != ''">
                                <vl-drawers id="drawer-4">
                                    <vl-drawer
                                            label="Behalve in het type “ns” worden er geen fragment-identifiers gebruikt."
                                            width="10"
                                            width-m="12">
                                        <h2><strong>Opmerking</strong></h2>
                                        <br>
                                        <p>{{reference.message}}</p>
                                    </vl-drawer>
                                </vl-drawers>
                            </td>
                            <td v-else>Behalve in het type “ns” worden er geen fragment-identifiers gebruikt.</td>
                            <td v-if="reference.satisfied">
                                <vl-icon icon="check" style="color: green;"></vl-icon>
                            </td>
                            <td v-else>
                                <vl-icon icon="cross" style="color:red; font-size: 120%;"></vl-icon>
                            </td>
                        </tr>
                        <tr>
                            <td>Verwijst de (/{referentie})- als onderdeel van het URI-patroon naar één bepaalde instantie
                                van een
                                resource?
                            </td>
                            <td>
                                <vl-checkbox @input="updateCounter(referenceRulesCounter, $event)"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Kan de {referentie} ingevuld worden op één van onderstaande manieren: {referentie-basis} OF
                                {referentie-basis}/{referentie-versie}?
                            </td>
                            <td>
                                <vl-checkbox @input="updateCounter(referenceRulesCounter, $event)"/>
                            </td>
                        </tr>
                        <tr>
                            <td>De {referentie} die wordt toegekend is persistent en het geheel in combinatie met
                                {domein}/{type}/{concept} is uniek op het web?
                            </td>
                            <td>
                                <vl-checkbox @input="updateCounter(referenceRulesCounter, $event)"/>
                            </td>
                        </tr>
                        </tbody>
                    </vl-data-table>
                </vl-infoblock>
            </vl-column>
            <vl-column>
                <vl-infoblock
                        mod-type="news"
                        title="Dereferentie (extra)">
                    <vl-data-table>
                        <!-- Validation button was not clicked -->
                        <tbody v-if="!baseRulesValidated">
                        <tr>
                            <td>Voert een correcte redirect (303) uit</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Formaat <strong>text/html</strong> wordt ondersteund</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Formaat <strong>application/ld+json</strong> wordt ondersteund</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Formaat <strong>application/n-triples</strong> wordt ondersteund</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Formaat <strong>text/turtle</strong> wordt ondersteund</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Formaat <strong>application/rdf+xml</strong> wordt ondersteund</td>
                            <td></td>
                        </tr>
                        </tbody>

                        <!-- URI is being validated and dereferencing is being checked -->

                        <tbody v-else>
                        <tr v-if="!dereferencingValidated">
                            <td>Voert een redirect (303) uit</td>
                            <td>
                                <vl-loader/>
                            </td>
                        </tr>
                        <tr v-else>
                            <td>Voert een redirect (303) uit</td>
                            <td v-if="redirect.satisfied">
                                <vl-icon icon="check" style="color: green;"></vl-icon>
                            </td>
                            <td v-else>
                                <vl-icon icon="cross" style="color:red; font-size: 120%;"></vl-icon>
                            </td>
                        </tr>

                        <tr v-if="!dereferencingValidated">
                            <td>Formaat <strong>text/html</strong> wordt ondersteund</td>
                            <td>
                                <vl-loader/>
                            </td>
                        </tr>
                        <tr v-else>
                            <td>Formaat <strong>text/html</strong> wordt ondersteund</td>
                            <td v-if="formats['text/html'].satisfied">
                                <vl-icon icon="check" style="color: green;"></vl-icon>
                            </td>
                            <td v-else>
                                <vl-icon icon="cross" style="color:red; font-size: 120%;"></vl-icon>
                            </td>
                        </tr>

                        <tr v-if="!dereferencingValidated">
                            <td>Formaat <strong>application/ld+json</strong> wordt ondersteund</td>
                            <td>
                                <vl-loader/>
                            </td>
                        </tr>
                        <tr v-else>
                            <td>Formaat <strong>application/ld+json</strong> wordt ondersteund</td>
                            <td v-if="formats['application/ld+json'].satisfied">
                                <vl-icon icon="check" style="color: green;"></vl-icon>
                            </td>
                            <td v-else>
                                <vl-icon icon="cross" style="color:red; font-size: 120%;"></vl-icon>
                            </td>
                        </tr>

                        <tr v-if="!dereferencingValidated">
                            <td>Formaat <strong>application/n-triples</strong> wordt ondersteund</td>
                            <td>
                                <vl-loader/>
                            </td>
                        </tr>
                        <tr v-else>
                            <td>Formaat <strong>application/n-triples</strong> wordt ondersteund</td>
                            <td v-if="formats['application/n-triples'].satisfied">
                                <vl-icon icon="check" style="color: green;"></vl-icon>
                            </td>
                            <td v-else>
                                <vl-icon icon="cross" style="color:red; font-size: 120%;"></vl-icon>
                            </td>
                        </tr>

                        <tr v-if="!dereferencingValidated">
                            <td>Formaat <strong>text/turtle</strong> wordt ondersteund</td>
                            <td>
                                <vl-loader/>
                            </td>
                        </tr>
                        <tr v-else>
                            <td>Formaat <strong>text/turtle</strong> wordt ondersteund</td>
                            <td v-if="formats['text/turtle'].satisfied">
                                <vl-icon icon="check" style="color: green;"></vl-icon>
                            </td>
                            <td v-else>
                                <vl-icon icon="cross" style="color:red; font-size: 120%;"></vl-icon>
                            </td>
                        </tr>

                        <tr v-if="!dereferencingValidated">
                            <td>Formaat <strong>application/rdf+xml</strong> wordt ondersteund</td>
                            <td>
                                <vl-loader/>
                            </td>
                        </tr>
                        <tr v-else>
                            <td>Formaat <strong>application/rdf+xml</strong> wordt ondersteund</td>
                            <td v-if="formats['application/rdf+xml'].satisfied">
                                <vl-icon icon="check" style="color: green;"></vl-icon>
                            </td>
                            <td v-else>
                                <vl-icon icon="cross" style="color:red; font-size: 120%;"></vl-icon>
                            </td>
                        </tr>
                        </tbody>
                    </vl-data-table>
                </vl-infoblock>
            </vl-column>
        </vl-grid>
    </div>
</template>

<script>
    const URIValidator = require('flemish-uri-standard-validator');

    export default {
        name: "ResultComponent",
        props: {
            URI: String
        },
        data() {
            return {
                baseRulesValidated: false,
                dereferencingValidated: false,
                protocol: null,
                structure: null,
                reference: null,
                redirect: null,
                formats: null,
                formRulesCounter: {value: 0, total: 2},
                domainRulesCounter: {value: 0, total: 2},
                typeRulesCounter: {value: 0, total: 2},
                conceptRulesCounter: {value: 0, total: 1},
                referenceRulesCounter: {value: 0, total: 4}
            }
        },
        methods: {
            async validateURI() {
                this.resetCounters();
                this.dereferencingValidated = false;

                const formRulesResult = new URIValidator.FormRulesCheck(this.URI).checkURI();
                this.protocol = formRulesResult.protocol;
                this.structure = formRulesResult.structure;

                // Update form rules counter
                if (this.protocol.satisfied) {
                    this.formRulesCounter.value += 1;
                }

                if (this.structure.satisfied) {
                    this.formRulesCounter.value += 1;
                }

                const referenceResult = new URIValidator.ReferenceCheck(this.URI).checkURI();
                this.reference = referenceResult.reference;

                // Update reference rules counter
                if (this.reference.satisfied) {
                    this.referenceRulesCounter.value += 1;
                }

                // Show results of previous check, because dereferencing takes more time
                this.baseRulesValidated = true;

                try {
                    const dereferenceResult = await new URIValidator.DereferenceCheck(this.URI).checkURI();
                    this.dereferencingValidated = true;
                    this.redirect = dereferenceResult.redirect;
                    this.formats = dereferenceResult.formats;
                } catch (e) {
                    console.error(e);
                }
            },
            updateCounter(counterToUpdate, event) {
                if (event === true) {
                    counterToUpdate.value += 1;
                } else {
                    counterToUpdate.value -= 1;
                }
            },
            resetCounters() {
                this.formRulesCounter.value = 0;
                this.domainRulesCounter.value = 0;
                this.typeRulesCounter.value = 0;
                this.conceptRulesCounter.value = 0;
                this.referenceRulesCounter.value = 0;
            }
        }
    }
</script>

<style lang="scss">
    @import "~@govflanders/vl-ui-core/src/scss/core";
    @import "~@govflanders/vl-ui-infoblock/src/scss/infoblock";
    @import "~@govflanders/vl-ui-drawer/src/scss/drawer";
    @import "~@govflanders/vl-ui-link/src/scss/link";
    @import "~@govflanders/vl-ui-util/src/scss/util";
    @import "~@govflanders/vl-ui-toggle/src/scss/toggle";
    @import "~@govflanders/vl-ui-icon/src/scss/icon";
    @import "~@govflanders/vl-ui-dynamic-drawer/src/scss/dynamic-drawer";
    @import "~@govflanders/vl-ui-loader/src/scss/loader";

    table {
        table-layout: auto;
    }

</style>
