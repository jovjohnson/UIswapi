'use strict';

var app = angular.module('routingApp', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
 // .state(stateName, configObj)
    .state('home', { url: '/', templateUrl: '/html/home.html'}) //template of the homepage
    .state('about', { url: '/about/:url', templateUrl: '/html/about.html', controller: 'aboutCtrl'}) //template of the homepage
    .state('people', {url: '/people', templateUrl: '/html/people.html', controller: 'peopleCtrl'})
    .state('people/:num', {url: '/people/:num', templateUrl: '/html/people.html', controller: 'peopleCtrl'})
    .state('person', {url: '/person/:personId', template: '<h1>Person</h1>', controller: 'personCtrl'})

    $urlRouterProvider.otherwise('/'); //sends to homepage if unknown url is entered

}); //allows configuration

app.run(function(SwapiService) {

	SwapiService.getPeople(1);

})