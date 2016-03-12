'use strict';

var app = angular.module('routingApp');

app.service('SwapiService', function($http) {

	this.people = [];

	this.getPeople = (num) => {
		$http.get('http://swapi.co/api/people/?page=' + num)
		.then(res => {

			// SwapiService.people
			this.people = res.data.results;

		}, err => {
			console.log('SWPERROR:', err);
		})
	};

	this.getPerson = (person) => {
		$http.get('http://swapi.co/api/people/' + person)
		.then(res => {

			this.person = res.data.results;
		})
	}



});