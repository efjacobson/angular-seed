(function() {
  'use strict';

  describe('myApp.panel1 module', function() {

    beforeEach(module('myApp.panel1'));

    describe('panel1 controller', function() {

      it('should ....', inject(function($controller) {
        //spec body
        var panel1Controller = $controller('Panel1Controller');
        expect(panel1Controller).toBeDefined();
      }));

    });
  });
})();
