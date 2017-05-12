import angular from 'angular';
import uiRouter from 'angular-ui-router';
import checkOutComponent from './checkOut.component';

let checkOutModule = angular.module('checkOut', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('checkOut', {
      url: '/check-out',
      component: 'app.checkOut'
    });
})

.component('app.checkOut', checkOutComponent)

.name;

export default checkOutModule;
