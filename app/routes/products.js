import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('product');
  },
  actions: {
    addToCart: function(product){
      alert(product.get('price'));
    }
  }
});
