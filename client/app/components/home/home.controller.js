import mock from '../products.mock';

class HomeController {
  constructor(appService) {
    this.name = 'home';
    this.cart = appService.init();
  }

  $onInit() {
    // adding data onIntit to keep constructor small
    this.products = angular.copy(mock.products);
  }

  addElementToCart(item) {
    this.cart.addItem(item);
  }
}

HomeController.$inject = ['app.service'];

export default HomeController;
