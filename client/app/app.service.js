'use strict';
import cartService from './cart.service.js';

// example of classical angular service
class AppService {
  init() {
    /*
     In real live I would persist cart in localstorage or cookies,
     Then cart would be persistent even with refresh
    */
    if (!this.cart) {
      this.cart = cartService();
    }

    return this.cart;
  }

}

export default AppService;
