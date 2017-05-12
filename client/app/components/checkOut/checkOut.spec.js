import CheckoutModule from './checkOut';

describe('Check out', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(CheckoutModule));

  beforeEach(window.module($provide => {
    $provide.service('app.service', () => ({
      init: () => ({ getList: () => {} })
    }));
    $provide.value('svgFilter', () => {});
  }));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('checkout component should exist', () => {
      $location.url('/check-out');
      $rootScope.$digest();
      expect($state.current.component).to.eq('app.checkOut');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('app.checkOut', {
        $scope: $rootScope.$new()
      });
    });

    it('has a name property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('name');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<app.check-out></app.check-out>')(scope);
      scope.$apply();
    });

    it('should show information that shopping cart is empty', () => {
      expect(template.html()).to.match(/Your shopping cart is empty!/);
    });
    it('has navbar in template', () => {
      expect(template.html()).to.match(/app.common.navbar/);
    });

  });
});
