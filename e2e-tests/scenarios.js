'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /panel1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/panel1");
  });


  describe('panel1', function() {

    beforeEach(function() {
      browser.get('index.html#!/panel1');
    });


    it('should render panel1 when user navigates to /panel1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for panel 1/);
    });

  });


  describe('panel2', function() {

    beforeEach(function() {
      browser.get('index.html#!/panel2');
    });


    it('should render panel2 when user navigates to /panel2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for panel 2/);
    });

  });


  describe('panel3', function() {

  	beforeEach(function() {
  		browser.get('index.html#!/panel3');
  	});

  	it('should render panel3 when user navigates to /panel3', function() {
  		expect(element.all(by.css('[ng-view] p')).first(). getText()).
  			toMatch(/partial for panel 3/);
  	});
  });
  
});
