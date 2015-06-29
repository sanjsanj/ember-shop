import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('product');
  },
  cartItems: [],
  actions: {
    addToCart: function(product){
      var productStock = product.get('stock');
      product.set('stock', productStock - 1);
      var productData = product._data;
      console.log(this.cartItems);
      this.containThisItem(
        productData,
        (foundItem) => foundItem.count ++,
        () => this.cartItems.addObject(productData)
      );
    }
  },
  containThisItem: function(productData, yesCallback, notCallback){
    if(this.cartItems.contains(productData)){
      let containedItem = this.cartItems.findBy('id', productData.id);
      yesCallback(containedItem);
    } else {
      notCallback(this.cartItems);
    }
  }
});
