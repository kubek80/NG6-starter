import template from './navbar.html';
import './navbar.scss';

// one way binding between parent / child component
let navbarComponent = {
  restrict: 'E',
  bindings: {
    products: '<'
  },
  template
};

export default navbarComponent;
