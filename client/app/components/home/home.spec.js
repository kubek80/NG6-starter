import HomeModule from './home'

describe('Home', () => {
  let $rootScope, $state, $location, $componentController, $compile, appService;

  beforeEach(window.module(HomeModule));

  beforeEach(window.module($provide => {
    $provide.service('app.service', () => ({
      init: () => {}
    }));
    $provide.value('svgFilter', () => {});
  }));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
    appService = $injector.get('app.service');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('default component should be home', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).to.eq('app.home');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('app.home', {
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
      template = $compile('<app.home></app.home>')(scope);
      scope.$apply();
    });

    it('has navbar in template', () => {
      expect(template.html()).to.match(/app.common.navbar/);
    });

  });
});
