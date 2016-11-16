'use strict';

function applicationSettings() {
    return {
        apiUrl: 'http://localhost:8080/angular-java-seed',
        apiUrlProd: '/angular-java-seed',
        context: '/extranetead-portal',
        resWidthHideMenu: 800,
        maxPaginationMobile: 4,
        maxPaginationDesktop: 10,
        eventFilterResult: 'FILTER_RESULT_SUCCESS'
    };
}

module.exports = applicationSettings();