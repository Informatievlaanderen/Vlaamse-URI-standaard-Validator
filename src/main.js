import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import {
    VlCore,
    VlUtil,
    VlGrid,
    VlColumn,
    VlRegion,
    VlLayout,
    VlContentHeader,
    VlContentHeaderEntity,
    VlContentHeaderTitle,
    VlIntroduction,
    VlSideNavigation,
    VlSideNavigationList,
    VlSideNavigationItem,
    VlInputField,
    VlButton,
    VlDataTable,
    VlIcon,
    VlTitle,
    VlCheckbox,
    VlInfoblock,
    VlDrawers,
    VlDrawer,
    VlLoader,
    VlModal
} from '@govflanders/vl-ui-vue-components';

Vue.component('vl-region', VlRegion);
Vue.component('vl-layout', VlLayout);
Vue.component('vl-grid', VlGrid);
Vue.component('vl-column', VlColumn);
Vue.component('vl-content-header', VlContentHeader);
Vue.component('vl-content-header-entity', VlContentHeaderEntity);
Vue.component('vl-content-header-title', VlContentHeaderTitle);
Vue.component('vl-introduction', VlIntroduction);
Vue.component('vl-side-navigation', VlSideNavigation);
Vue.component('vl-side-navigation-list', VlSideNavigationList);
Vue.component('vl-side-navigation-item', VlSideNavigationItem);
Vue.component('vl-input-field', VlInputField);
Vue.component('vl-button', VlButton);
Vue.component('vl-data-table', VlDataTable);
Vue.component('vl-icon', VlIcon);
Vue.component('vl-title', VlTitle);
Vue.component('vl-checkbox', VlCheckbox);
Vue.component('vl-infoblock', VlInfoblock);
Vue.component('vl-drawers', VlDrawers);
Vue.component('vl-drawer', VlDrawer);
Vue.component('vl-loader', VlLoader);
Vue.component('vl-modal', VlModal);

Vue.use(VlCore);
Vue.use(VlUtil);

new Vue({
    render: h => h(App),
}).$mount('#app')
