<template>
    <div>
        <vl-content-header
                mod-large
                mod-show-mobile
                :background="{
            src: '//www.vlaanderen.be/sites/default/files/ip_acm/page_banner_narrow/header.jpg',
            srcset: '//www.vlaanderen.be/sites/default/files/ip_acm/page_banner_mobile_alt/header.jpg 320w, ' +
             '//www.vlaanderen.be/sites/default/files/ip_acm/page_banner_narrow/header.jpg 1024w, ' +
              '//www.vlaanderen.be/sites/default/files/ip_acm/page_banner_wide_alt/header.jpg 1600w',
            alt: 'Content Header',
          }">
            <div class="vl-content-header__logo-wrapper">
                <vl-content-header-entity
                        prefix="Informatie"
                        title="Vlaanderen"
                        logo="true"
                        href="https://overheid.vlaanderen.be/informatie-vlaanderen"
                        mod-small/>
            </div>
            <vl-content-header-title
                    title="URI-standaard validator"
                    tag-name="h1"
                    href=""/>
        </vl-content-header>

        <vl-region>
            <vl-layout>
                <vl-grid>
                    <vl-column width="8">
                        <vl-introduction>
                            De Vlaamse URI-standaard beschrijft de vormregels waaraan Uniform Resource Identifiers of
                            kortweg URI's, die door Vlaamse overheden
                            worden toegekend, dienen te voldoen om data-resources op een uniforme manier te ontsluiten
                            via het Web. Deze validator controleert
                            aan welke regels werden voldaan.
                        </vl-introduction>
                    </vl-column>
                    <vl-column width="3">
                        <vl-side-navigation class="example-sticky" title="Documentatie">
                            <vl-side-navigation-list>
                                <vl-side-navigation-item target="_blank" href="https://data.vlaanderen.be/cms/VlaamseURI-StandaardVoorData_V1.0.pdf" text="Vlaamse URI-standaard voor data" />
                                <vl-side-navigation-item target="_blank" href="https://data.vlaanderen.be/cms/URI_RichtlijnenDataVlaanderenBe_V1.pdf" text="URI-richtlijnen voor data.vlaanderen.be" />
                            </vl-side-navigation-list>
                        </vl-side-navigation>
                    </vl-column>
                </vl-grid>
            </vl-layout>
        </vl-region>

        <vl-region>
            <vl-layout>
                <p>
                    Achteraan het document <a href="https://data.vlaanderen.be/cms/VlaamseURI-StandaardVoorData_V1.0.pdf">Vlaamse URI-standaard voor data</a> bevindt zich
                    een checklist. Deze checklist laat toe om URI's te evalueren. Een URI is 100% compliant met de Vlaamse URI-standaard indien op alle vragen 'ja'
                    kan geantwoord worden. Met deze validator worden een aantal van deze voorwaarden automatisch gecontroleerd. Niet alle voorwaarden op de checklist kunnen softwarematig gecontroleerd
                    worden. Het is dan aan de gebruiker om na te gaan of zijn URI voldoet aan de voorwaarde door de checkbox al dan niet aan te vinken.
                </p>
            </vl-layout>
        </vl-region>

        <URIComponent/>
    </div>
</template>

<script>
    import URIComponent from "./URIComponent";

    export default {
        name: "HomeComponent",
        components: {
            URIComponent
        }
    }
</script>

<style scoped>

</style>
