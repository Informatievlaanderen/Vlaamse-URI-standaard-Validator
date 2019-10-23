const uri_validator = window.uri_validator;
const dereferenceCheckURI = 'http://localhost:3000/dereference-check';
//import { Sidenavigation } from '@govflanders/vl-ui-side-navigation';

window.onload = function(){
    document.getElementById('validate_button').onclick = function(){validate};
    document.getElementById('validate_button').addEventListener('click', validate);
    document.getElementById('result_region').style.display = "none";
    document.getElementById('result_loader').style.display = "none";
};

async function validate(){
    document.getElementById('validation_results').innerHTML = "";
    document.getElementById('dereference_results').innerHTML = "";
    const URI = document.getElementById('input-field').value;

    // Vormregels
    const formRulesCheck = new uri_validator.FormRulesCheck(URI).checkURI();

    // Lijst voor vormregels
    // ** Protocol
    createListResult(formRulesCheck.protocol, 'Maakt het URI-schema gebruik van het http(s) protocol?');

    // ** Structuur
    createListResult(formRulesCheck.structure, 'Volgt het URI schema volgende structuur: http(s)://{domein}/{type}/{concept}(/{referentie})*');

    // Type
    const typeCheck = new uri_validator.TypeCheck(URI).checkURI();
    createListResult(typeCheck.type, 'Volgt het {type} van alle URI’s in het domein en subdomeinen dezelfde strikte classificatie waaronder ten minste id, doc en ns behoren?');

    // Referentie
    const referenceCheck = new uri_validator.ReferenceCheck(URI).checkURI();
    createListResult(referenceCheck.reference, 'Behalve in het type “ns” worden er geen fragment-identifiers gebruikt.')

    // Zaken die op dit moment niet (kunnen) gecontroleerd worden
    // Domein, concept

    document.getElementById('result_region').style.display = "inline";
    document.getElementById('result_region').scrollIntoView();

    //////////////////
    // Dereferentie //
    //////////////////

    /*
    * Speciaal geval: het lukt voorlopig nog niet om dit in de browser uit te voeren.
    * Daarom verschuiven we dit naar de backend, waar het wel lukt.
    * In de backend is dezelfde module geïnstalleerd (flemish-uri-standard-validator) die de derferenceCheck uitvoert.
    * */
    document.getElementById('result_loader').style.display = "inline";

    let req = new XMLHttpRequest();
    req.open('GET', dereferenceCheckURI);
    req.setRequestHeader('URI', URI);

    req.onreadystatechange = function(){
        document.getElementById('result_loader').style.display = "none";
        if(this.readyState == 4 && this.status == 200){
            createDereferenceResultList(JSON.parse(req.response));
        }

    };
    req.send();
}

function createListResult(result, rule){
    const listElement = document.createElement('li');
    const listBadge = document.createElement('span');

    if(result.hasOwnProperty('satisfied')){
        listBadge.innerText = result.satisfied ? '\u2714' : '\u2716';
        listBadge.style.color = result.satisfied ? 'rgb(40,167,69)' : 'rgb(194,59,34)';
    } else {
        listBadge.innerText = '\u2754'
    }

    listBadge.style.margin = "0 15 0 0";
    listElement.appendChild(listBadge);
    const listText = document.createTextNode(rule);
    listElement.style.color = result.satisfied ? 'rgb(40,167,69)' : 'rgb(194,59,34)';
    listElement.appendChild(listText);

    const ruleInfoList = document.createElement('ul');
    const ruleInfoListItem = document.createElement('li');
    const ruleInfoListItemSymbol = document.createElement('span');

    ruleInfoList.style.margin = "0 0 15 0";
    ruleInfoListItemSymbol.style.margin = " 0 10 0 0";

    ruleInfoListItemSymbol.innerText = '\u27F6';

    ruleInfoListItem.appendChild(ruleInfoListItemSymbol);
    ruleInfoListItem.appendChild(document.createTextNode(result.message));
    ruleInfoList.appendChild(ruleInfoListItem);

    document.getElementById('validation_results').appendChild(listElement);
    document.getElementById('validation_results').appendChild(ruleInfoList);
}

function createDereferenceResultList(results){
    let redirectResult = results.redirect;
    let formats = results.formats;

    // Redirect result
    let redirectElement = document.createElement('li');
    let redirectBadge = document.createElement('span');
    redirectBadge.innerText = redirectResult.satisfied ? '\u2714' : '\u2716';
    redirectBadge.style.color = redirectResult.satisfied ? 'rgb(40,167,69)' : 'rgb(194,59,34)';

    redirectBadge.style.margin = "0 15 0 0";
    redirectElement.appendChild(redirectBadge);
    redirectElement.style.color = redirectResult.satisfied ? 'rgb(40,167,69)' : 'rgb(194,59,34)';
    redirectBadge.appendChild(document.createTextNode(' Het doorverwijzen van id naar een doc, van een niet-informatieresource naar een digitale web representatie, gebeurt met een 303 HTTP-redirect'));

    document.getElementById('dereference_results').appendChild(redirectElement);

    // Formats
    let formatElement = document.createElement('li');
    formatElement.style.margin = "10 0 0 0";
    if(Object.keys(formats).length > 0){

        formatElement.appendChild(document.createTextNode('Deze formaten worden ondersteund:'));
        let formatsList = document.createElement('ul');

        Object.keys(formats).forEach( prop => {
            let formatsListElement = document.createElement('li');
            formatsListElement.style.margin = "10 0 0 0";
            let formatsListElementBadge = document.createElement('span');
            formatsListElementBadge.innerText = formats[prop].satisfied ? '\u2714' : '\u2716';
            formatsListElementBadge.style.color = formats[prop].satisfied ? 'rgb(40,167,69)' : 'rgb(194,59,34)';
            formatsListElementBadge.style.margin = "0 15 0 0";
            formatsListElement.appendChild(formatsListElementBadge);
            formatsListElement.appendChild(document.createTextNode(prop));
            formatsList.appendChild(formatsListElement);
        });

        formatElement.appendChild(formatsList);
    } else {
        let formatsElementBadge = document.createElement('span');
        formatsElementBadge.innerText = '\u2716';
        formatsElementBadge.style.color = 'rgb(194,59,34)';
        formatsElementBadge.style.margin = "0 15 0 0";
        formatsElementBadge.appendChild(document.createTextNode('Er worden geen formaten ondersteund.'))
        formatElement.appendChild(formatsElementBadge);
    }
    document.getElementById('dereference_results').appendChild(formatElement);
}