'use strict';

/*@ngInject*/
export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('page1', {
            url: '/page1',
            template: require('./page_1/page_1.html')
        });
}