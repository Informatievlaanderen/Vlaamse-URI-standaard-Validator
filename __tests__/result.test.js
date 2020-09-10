import { shallowMount } from "@vue/test-utils";
import ResultComponent from "../src/components/ResultComponent";
import URIComponent from "../src/components/URIComponent";

describe('ResultComponent', () => {
    const wrapper = shallowMount(ResultComponent, {
        stubs:
        [
            'vl-data-table',
            'vl-infoblock',
            'vl-layout',
            'vl-checkbox',
            'vl-icon',
            'vl-loader'
        ],
        propsData: {
            URI: 'https://data.vlaanderen.be/id/gemeente/11001'
        }
    });

    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });

    test('property is set correct', () => {
        expect(wrapper.vm.URI).toMatch('https://data.vlaanderen.be/id/gemeente/11001');
    })

    test('correct validation', async () => {
        await wrapper.vm.validateURI();

        // Form rules
        expect(wrapper.vm.protocol.satisfied).toBeTruthy();
        expect(wrapper.vm.structure.satisfied).toBeTruthy();

        // Reference
        expect(wrapper.vm.reference.satisfied).toBeTruthy();

        // Dereference
        expect(wrapper.vm.redirect.satisfied).toBeTruthy();

        Object.keys(wrapper.vm.formats).forEach( format => {
           expect(wrapper.vm.formats[format].satisfied).toBeTruthy();
        });
    }, 60000);

    //TODO: write tests for checkboxes

})
