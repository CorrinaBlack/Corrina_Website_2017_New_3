//-------------------------------------------------------------------------------------------------------
// BASE APP MODULE - DESIGN INSPIRATION http://productdisrupt.com/, http://www.guglieri.com/colorscape/
//-------------------------------------------------------------------------------------------------------
var app = angular.module('app', ['ui.router']);

//-------------------------------------------------------------------------------------------------------
// APP CONFIGURATION
//-------------------------------------------------------------------------------------------------------
app.config(function ($stateProvider, $urlRouterProvider) {

    // DEFAULT ROUTE - http://embed.plnkr.co/IzimSVsstarlFviAm7S7/preview
    $urlRouterProvider.otherwise('/AboutMe');

    // ROUTE DETAILS
    $stateProvider
        .state('AboutMe', {
            url: '/AboutMe',
            views: {
                'headerTemplate': {
                    templateUrl: '/2_partials/header.html'
                },
                '': {
                    templateUrl: '/2_partials/about.html'
                },
                'footerTemplate': {
                    templateUrl: '/2_partials/footer.html'
                }
            }
        })
        .state('MicrosoftAccelerator', {
            url: '/MicrosoftAccelerator',
            templateUrl: '/2_bases/accelerator_base.html',
            controller: 'acceleratorController'
        })
        .state('WindowsPhone', {
            url: '/WindowsPhone',
            templateUrl: '/2_bases/phone_base.html',
            controller: 'phoneController'
        })
        .state('PhoneDevCenter', {
            url: '/PhoneDevCenter',
            templateUrl: '/2_bases/center_base.html',
            controller: 'centerController'
        })
        .state('PhoneDevTools', {
            url: '/PhoneDevTools',
            templateUrl: '/2_bases/tools_base.html',
            controller: 'toolsController'
        })
        .state('SilverlightEmbedded', {
            url: '/SilverlightEmbedded',
            templateUrl: '/2_bases/embedded_base.html',
            controller: 'embeddedController'
        })
        .state('SilverlightRIA', {
            url: '/SilverlightRIA',
            templateUrl: '/2_bases/ria_base.html',
            controller: 'riaController'
        })
        .state('VisualStudio', {
            url: '/VisualStudio',
            templateUrl: '/2_bases/vs_base.html',
            controller: 'vsController'
        })
        .state('DesignCodeSpeaking', {
            url: '/DesignCodeSpeaking',
            templateUrl: '/2_bases/freeform_base.html',
            controller: 'freeformController'
        })
    }
);

//-------------------------------------------------------------------------------------------------------
// ACCELERATOR TEMPLATES - https://plnkr.co/edit/?p=preview
//-------------------------------------------------------------------------------------------------------
app.directive('headerTemplate', function () {
    return {
        templateUrl: '/2_partials/header.html'
    };
});
app.directive('footerTemplate', function () {
    return {
        templateUrl: '/2_partials/footer.html'
    };
});
app.directive('acceleratorbodyTemplate', function () {
    return {
        templateUrl: '/2_partials/accelerator.html'
    };
});
app.directive('phonebodyTemplate', function () {
    return {
        templateUrl: '/2_partials/phone.html'
    };
});
app.directive('centerbodyTemplate', function () {
    return {
        templateUrl: '/2_partials/center.html'
    };
});
app.directive('toolsbodyTemplate', function () {
    return {
        templateUrl: '/2_partials/tools.html'
    };
});
app.directive('embeddedbodyTemplate', function () {
    return {
        templateUrl: '/2_partials/embedded.html'
    };
});
app.directive('riabodyTemplate', function () {
    return {
        templateUrl: '/2_partials/ria.html'
    };
});
app.directive('vsbodyTemplate', function () {
    return {
        templateUrl: '/2_partials/vs.html'
    };
});
app.directive('freeformbodyTemplate', function () {
    return {
        templateUrl: '/2_partials/freeform.html'
    };
});
app.directive('parallaxTemplate', function () {
    return {
        templateUrl: '/2_partials/parallax.html'
    };
});

//-------------------------------------------------------------------------------------------------------
// CONTROLLERS
//-------------------------------------------------------------------------------------------------------
app.controller('acceleratorController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/2_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('phoneController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/2_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('centerController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/2_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('toolsController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/2_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('embeddedController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/2_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('riaController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/2_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('vsController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/2_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('freeformController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/2_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});