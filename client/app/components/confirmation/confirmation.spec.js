import ConfirmationModule from './confirmation';

describe('Confirmation', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(ConfirmationModule));

  beforeEach(window.module($provide => {
    $provide.service('app.service', () => ({
      init: () => ({ flushCart: () => {} })
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
    it('confirmation component should exist', () => {
      $location.url('/confirmation');
      $rootScope.$digest();
      expect($state.current.component).to.eq('app.confirmation');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('app.confirmation', {
        $scope: $rootScope.$new()
      });
    });

    it('has a name property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('name');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template, ctrl;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<app.confirmation></app.confirmation>')(scope);
      scope.$apply();
    });

    it('has name in template', () => {
      expect(template.find('h1').html()).to.eq('Thank you for your purchase.');
    });
    it('has navbar in template', () => {
      expect(template.html()).to.match(/app.common.navbar/);
    });

  });
});
