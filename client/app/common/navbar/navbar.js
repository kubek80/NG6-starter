import angular from 'angular';
// import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';

// keeping naming convention for big teams
let navbarModule = angular.module('app.common.navbar', [
  // uiRouter
])

.component('app.common.navbar', navbarComponent)

.name;

export default navbarModule;
