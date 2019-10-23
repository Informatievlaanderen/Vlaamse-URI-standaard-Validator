# Vlaamse URI-standaard Validator

## Inleiding
Het document [Vlaamse URI-standaard voor data](https://data.vlaanderen.be/cms/VlaamseURI-StandaardVoorData_V1.0.pdf) beschrijft de vormregels waarin __Uniform Resource Identifiers__ of kortweg URI's, die door Vlaamse overheden worden toegekend, dienen te voldoen om data-resources op een uniforme manier te ontsluiten via het Web. In het document wordt beschreven hoe URI's dienen vervaardigd te worden om die resources **persistent** te identificeren. Hierdoor kunnen achterliggende systemen evolueren terwijl de URI onveranderd blijft. Een belangrijke opmerking is dat de vormregels niet noodzakelijk van toepassing zijn op URI's van services, maar wel voor data die via services worden ontsloten.

Alle persistente URI's moeten gevormd worden volgens het patroon:
```
http(s)://{domein}/{type}/{concept}(/{referentie})*
```
Om ontwikkelaars te helpen is er een URI-standaard compliancy checklist opgesteld, die ook terug te vinden is in bovenstaand document. De vormregels in deze checklist, werden zover dit mogelijk was, geïmplementeerd in deze validator. Een URI is vervolgens 100% compliant met de Vlaamse URI-standaard indien op alle vragen 'JA' kan geantwoord worden. De validator zal de regel groen maken indien eraan voldaan werd en rood indien dit niet het geval was.

De checklist bevat volgende regels:

**Vormregels**
- **Maakt het URI-schema gebruik van het http(s) protocol?**
- **Volgt het URI schema volgende structuur: {domein}/{type}/{concept}(/{referentie})***

**Domein**
- Is de bestaande (sub)domeinnaam onafhankelijk van organisatie, product, merk en tijd? 
- Is de domeinnaam gegarandeerd persistent: zijn er garanties dat de domeinnaam altijd zal blijven bestaan
en nooit zal veranderen? 

**Type**
- Is het {type} inbegrepen als onderdeel van het URI-patroon EN is er op zijn minst een onderscheid gemaakt tussen de representatie, het eigenlijke object/concept en een term die behoort tot een vocabularium, thesaurus of ontologie?
- **Volgt het {type} van alle URI’s in het domein en subdomeinen dezelfde strikte classificatie waaronder ten minste id, doc en ns behoren?**

**Concept**
- Is het {concept} als onderdeel van het URI-patroon aanwezig in het URI-patroon?

**Referentie** 
- **Behalve in het type “ns” worden er geen fragment-identifiers gebruikt** 
- Verwijst de (/{referentie})- als onderdeel van het URI-patroon naar één bepaalde instantie van een resource? 
- Kan de {referentie} ingevuld worden op één van onderstaande manieren: {referentie-basis} OF{referentie-basis}/{referentie-versie}? 
- De {referentie} die wordt toegekend is persistent en het geheel in combinatie met {domein}/{type}/{concept} is uniek op het web? 

_Opmerking:_ de regels die in het vet staan aangeduid werden effectief geïmplementeerd in de validator. De andere regels moeten manueel gecontroleerd worden.

## Installatie

TODO
