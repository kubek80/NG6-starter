import angular from 'angular';
import Home from './home/home';
import CheckOut from './checkOut/checkOut';

let componentModule = angular.module('app.components', [
  Home,
  CheckOut
])

.name;

export default componentModule;
