class ConfirmationController {
  constructor(appService) {
    this.name = 'Confirmation';
    this.cart = appService.init();
  }

  $onInit() {
    this.cart.flushCart();
  }

}

ConfirmationController.$inject = ['app.service'];

export default ConfirmationController;
