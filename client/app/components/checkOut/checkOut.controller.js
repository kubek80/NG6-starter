import mock from '../products.mock';

class CheckOutController {
  constructor(appService) {
    this.name = 'Check out';
    this.cart = appService.init();
  }

  $onInit() {
    // adding data onIntit to keep constructor small
    this.products = this.cart.getList();
    this.couriers = angular.copy(mock.couriers);
  }

  addItem(item) {
    this.cart.addItem(item);
    this.products = this.cart.getList();
  }

  reduceCount(id) {
    this.cart.reduceCount(id);
    this.products = this.cart.getList();
  }

  removeItem(id) {
    this.cart.removeItem(id);
    this.products = this.cart.getList();
  }

  getTotal() {
    const courierPrice = parseFloat(this.deliveryOption, 10);
    return this.cart.getTotal() + courierPrice;
  }
}

CheckOutController.$inject = ['app.service'];

export default CheckOutController;
