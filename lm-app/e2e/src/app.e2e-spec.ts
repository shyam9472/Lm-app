import { AppPage } from './app.po';

import { browser } from 'protractor';

describe('Leave Management Title', function() {
  it('Should Check Title', function() {
  browser.get('http://localhost:4200');
  expect(browser.getTitle()).toEqual('Leave Management System');
   });
 });

// spec.js
describe('Login Button Test', function() {
  it('should add one and two', function() {
    browser.get('http://localhost:4200');
   element(by.id('loginButton')).click();
  expect(element(by.binding('latest')).getText()).
        toEqual('3');
  });
});

// spec.js
describe('Login Page Test', function() {
  it('should add one and two', function() {
    browser.get('http://localhost:4200/login');
    element(by.model('userName')).sendKeys(1000);
    element(by.model('passWord')).sendKeys(" ");

    element(by.id('gobutton')).click();

   element(by.id('loginButton')).click();
  
  });
});

// spec.js
describe('DashBoard Test', function() {
  it('should add one and two', function() {
    browser.get('http://localhost:4200/dashBoard');
    expect(history.count()).toEqual(1);
  });
});

// spec.js
describe('Login Page Test', function() {
  it('should add one and two', function() {
    browser.get('http://localhost:4200/login');
    element(by.model('userName')).sendKeys(1000);
    element(by.model('passWord')).sendKeys(" ");

    element(by.id('gobutton')).click();

   element(by.id('loginButton')).click();
  
  });
});

// spec.js
describe('ApplyLeave Test Case Success', function() {
  it('should add one and two', function() {
    browser.get('http://localhost:4200/applyLeave');
    element(by.model('sdate')).sendKeys("2019-01-03");
    element(by.model('edate')).sendKeys("2019-01-05");
    element(by.model('leatype')).sendKeys("EL");
    element(by.model('ndays')).sendKeys("3");
    element(by.model('leaRea')).sendKeys("Sick");
    element(by.model('leaAppOn')).sendKeys("2019-01-02");
    element(by.id('apply')).click();
    expect(element(by.binding('msg')).getText()).
    toEqual('Leave Applied Successfully');
  });
});

describe('ApplyLeave Test Case Invalid Start-Date', function() {
  it('should add one and two', function() {
    browser.get('http://localhost:4200/applyLeave');
    element(by.model('sdate')).sendKeys("2018-12-30");
    element(by.model('edate')).sendKeys("2019-01-05");
    element(by.model('leatype')).sendKeys("EL");
    element(by.model('ndays')).sendKeys("7");
    element(by.model('leaRea')).sendKeys("Sick");
    element(by.model('leaAppOn')).sendKeys("2019-01-02");
    element(by.id('apply')).click();
    expect(element(by.binding('msg')).getText()).
    toEqual('You cannot apply for PastDate');
  });
});

describe('ApplyLeave Test Case Invalid End-Date', function() {
  it('should add one and two', function() {
    browser.get('http://localhost:4200/applyLeave');
    element(by.model('sdate')).sendKeys("2019-01-05");
    element(by.model('edate')).sendKeys("2019-01-03");
    element(by.model('leatype')).sendKeys("EL");
    element(by.model('ndays')).sendKeys("7");
    element(by.model('leaRea')).sendKeys("Sick");
    element(by.model('leaAppOn')).sendKeys("2019-01-02");
    element(by.id('apply')).click();
    expect(element(by.binding('msg')).getText()).
    toEqual('Start date must be Greater than end date');
  });
});

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to lm-app!');
  });
});
