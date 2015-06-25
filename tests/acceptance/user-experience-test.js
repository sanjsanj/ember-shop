import startApp from '../helpers/start-app';
var App;
import Ember from "ember";
import { module, test } from 'qunit';

module('User experience tests', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, App.destroy);
  }
});

test("Index page", function(assert) {
  assert.expect(3);
  visit('/');
  andThen(function() {
    assert.equal(currentPath(), 'index', 'Loads');
    assert.equal(find('#title').length, 1, 'With title');
    assert.equal(find('#title').text(), 'Welcome to EmberShop', 'Welcomes user to EmberShop');
  });
});
