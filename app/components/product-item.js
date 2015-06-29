import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addToCart: function(product){
      var productStock = product.get('stock');
      product.set('stock', productStock - 1);
      console.log(product.get('stock'));
    }
}});
