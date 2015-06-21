import startApp from '../helpers/start-app';
var App;
import Ember from "ember";
import { module, test } from 'qunit';

module('An Integration test', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, App.destroy);
  }
});

test("Index loads with title", function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentPath(), 'index');
    assert.equal(find('#title').length, 1, 'Has a title');
  });
});
