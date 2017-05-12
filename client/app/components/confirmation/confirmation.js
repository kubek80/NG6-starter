import angular from 'angular';
import uiRouter from 'angular-ui-router';
import confirmationComponent from './confirmation.component';

let confirmationModule = angular.module('confirmation', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('confirmation', {
      url: '/confirmation',
      component: 'app.confirmation'
    });
})

.component('app.confirmation', confirmationComponent)

.name;

export default confirmationModule;
