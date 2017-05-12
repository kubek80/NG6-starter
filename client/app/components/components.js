import angular from 'angular';
import Home from './home/home';
import CheckOut from './checkOut/checkOut';
import Confirmation from './confirmation/confirmation';

let componentModule = angular.module('app.components', [
  Home,
  CheckOut,
  Confirmation
])

.name;

export default componentModule;
