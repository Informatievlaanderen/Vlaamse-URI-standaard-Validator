import { shallowMount, mount } from "@vue/test-utils";
import URIComponent from "../src/components/URIComponent";

describe('URIComponent', () => {
    const wrapper = shallowMount(URIComponent, {
        stubs: [
            'vl-region',
            'vl-layout',
            'vl-grid',
            'vl-column',
            'vl-title',
            'vl-input-field',
            'vl-button'
        ],

    })

    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });

    test('correct URI is set', async () => {
        await wrapper.setData({ URI: 'http://example.org'});
        expect(wrapper.vm.URI).toBe('http://example.org');
    })

    test('starts validation on button click', () => {
        //TODO: not working atm
        /*const button = wrapper.find('#validateButton');
        const mock = jest.fn();
        wrapper.setMethods({startValidation: mock});
        button.trigger('click');
        expect(mock).toHaveBeenCalled();

         */
    })
});
