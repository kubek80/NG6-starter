import NavbarModule from './navbar'

describe('Navbar', () => {
  let $rootScope, $location, $componentController, $compile;

  beforeEach(window.module(NavbarModule));

  beforeEach(window.module($provide => {
    $provide.value('svgFilter', () => {});
  }));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      scope.products = 1;
      template = $compile('<app.common.navbar products="products"></app.common.navbar>')(scope);
      scope.$apply();
    });

    it('has name in template', () => {
      expect(template.find('h1').html()).to.match(/SMOOTHIE SHOP/g);
    });

    it('has count in template if at least one product', () => {
      expect(template.html()).to.match(/navbar-shopping-cart-info/);
    });

    it('does not have count in template if zero products', () => {
      scope.products = 0;
      scope.$apply();
      expect(template.html()).not.to.match(/navbar-shopping-cart-info/);
    });
  });
});
