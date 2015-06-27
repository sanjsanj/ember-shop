import { moduleForModel, test } from 'ember-qunit';

moduleForModel('product', 'Unit | Model | product', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  var store = this.store();
  assert.ok(!!model);
  assert.ok(!!store);
});

test('has a name', function(assert){
  var model = this.subject();
  assert.ok(!!model.name);
});

test('has a category', function(assert){
  var model = this.subject();
  assert.ok(!!model.category);
});

test('has a price', function(assert){
  var model = this.subject();
  assert.ok(!!model.price);
});

test('has a quantity', function(assert){
  var model = this.subject();
  assert.ok(!!model.stock);
});

test('has an image', function(assert){
  var model = this.subject();
  assert.ok(!!model.image);
});

test('knows a product is in stock', function(assert){
  var store = this.store();
  var model = this.subject({stock: 1});
  assert.equal(model.get('inStock'), true);
});

test('knows a product is out of stock', function(assert){
  var store = this.store();
  var model = this.subject({stock: 0});
  assert.equal(model.get('inStock'), false);
});
