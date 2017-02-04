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
                '': {
                    templateUrl: '/1_partials/about.html'
                }
            }
        })
        .state('MicrosoftAccelerator', {
            url: '/MicrosoftAccelerator',
            templateUrl: '/1_partials/accelerator.html',
            controller: 'acceleratorController'
        })
        .state('WindowsPhone', {
            url: '/WindowsPhone',
            templateUrl: '/1_partials/phone.html',
            controller: 'phoneController'
        })
        .state('PhoneDevCenter', {
            url: '/PhoneDevCenter',
            templateUrl: '/1_partials/center.html',
            controller: 'centerController'
        })
        .state('PhoneDevTools', {
            url: '/PhoneDevTools',
            templateUrl: '/1_partials/tools.html',
            controller: 'toolsController'
        })
        .state('SilverlightEmbedded', {
            url: '/SilverlightEmbedded',
            templateUrl: '/1_partials/embedded.html',
            controller: 'embeddedController'
        })
        .state('SilverlightRIA', {
            url: '/SilverlightRIA',
            templateUrl: '/1_partials/ria.html',
            controller: 'riaController'
        })
        .state('VisualStudio', {
            url: '/VisualStudio',
            templateUrl: '/1_partials/vs.html',
            controller: 'vsController'
        })
        .state('DesignCodeSpeaking', {
            url: '/DesignCodeSpeaking',
            templateUrl: '/1_partials/freeform.html',
            controller: 'freeformController'
        })
    }
);

//-------------------------------------------------------------------------------------------------------
// ACCELERATOR TEMPLATES - https://plnkr.co/edit/?p=preview
//-------------------------------------------------------------------------------------------------------
app.directive('headerTemplate', function () {
    return {
        templateUrl: '/1_partials/header.html'
    };
});
app.directive('subheader1Template', function () {
    return {
        templateUrl: '/1_partials/subheader_1.html'
    };
});
app.directive('subheader5Template', function () {
    return {
        templateUrl: '/1_partials/subheader_5.html'
    };
});
app.directive('subheader6Template', function () {
    return {
        templateUrl: '/1_partials/subheader_6.html'
    };
});
app.directive('subheaderalt6Template', function () {
    return {
        templateUrl: '/1_partials/subheader_6_alt.html'
    };
});
app.directive('footerTemplate', function () {
    return {
        templateUrl: '/1_partials/footer.html'
    };
});

//-------------------------------------------------------------------------------------------------------
// CONTROLLERS
//-------------------------------------------------------------------------------------------------------
app.controller('acceleratorController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/1_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('phoneController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/1_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('centerController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/1_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('toolsController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/1_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('embeddedController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/1_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('riaController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/1_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('vsController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/1_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('freeformController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/1_scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});