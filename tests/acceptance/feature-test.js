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

test('Website loads properly', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '', 'Loads');
    assert.equal(find('.title').length, 1, 'With title');
    assert.equal(find('.title').text(), 'EmberShop', 'Title is EmberShop');
    assert.equal(find('.itemContainer').length, 13, 'Shows 13 products');
    assert.equal(find('.cartButton').length, 1,'With a shopping cart');
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
