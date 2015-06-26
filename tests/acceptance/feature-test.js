import startApp from '../helpers/start-app';
var App;
import Ember from "ember";
import { module, test } from 'qunit';

module('Feature tests', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, App.destroy);
  }
});

test('Website', function(assert) {
  // assert.expect(3);
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '', 'Loads');
    assert.equal(find('#title').length, 1, 'With title');
    assert.equal(find('#title').text(), 'Welcome to EmberShop', 'Welcomes user to EmberShop');
    assert.equal(find('li').length, 13, 'With 13 products');
    // assert.equal(find('').length, 11, 'With a shopping cart');
  });
});

// test('User adds product to shopping cart', function(assert){
//
// });

// test('User removes product from shopping cart', function(assert){
//
// });

// test('User can view total price of order', function(assert){
//
// });

// test('User can apply voucher to order', function(assert){
//
// });

// test('User can view total price of order after discounts', function(assert){
//
// });

// test('User gets error message when voucher is invalid', function(assert){
//
// });

// test('User cannot add out of stock product to shopping cart', function(assert){
//
// });
