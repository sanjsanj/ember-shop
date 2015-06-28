import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('product');
  },
  actions: {
    addToCart: function(product){
      // var products = this.store.find('product');
      var productStock = product.get('stock');
      product.set('stock', productStock - 1);
      console.log(product.get('stock'));
    }
  }
});
