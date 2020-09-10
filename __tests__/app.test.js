import { shallowMount } from "@vue/test-utils";
import App from "../src/App";

describe('App', () => {
   const wrapper = shallowMount(App, {
       stubs: [
           'vl-content-header',
           'vl-content-header-entity',
           'vl-content-header-title',
           'vl-region',
           'vl-layout',
           'vl-grid',
           'vl-column',
           'vl-introduction',
           'vl-side-navigation',
           'vl-side-navigation-list',
           'vl-side-navigation-item',
           'vl-title',
           'vl-input-field',
           'vl-button',
           'vl-infoblock',
           'vl-data-table',
           'vl-checkbox'
       ]
   })

   test('is a Vue instance', () => {
       expect(wrapper.vm).toBeTruthy();
   })
});
