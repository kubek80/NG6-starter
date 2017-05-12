import angular from 'angular';
import Navbar from './navbar/navbar';
import svgFilter from './svgs/svg.filter';

let commonModule = angular.module('app.common', [
  Navbar
])

.filter('svg', svgFilter)

.name;

export default commonModule;
