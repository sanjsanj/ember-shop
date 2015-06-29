import Ember from 'ember';

export default Ember.Component.extend({
  cartItems: [],
  actions: {
    addToCart: function(product){
      var productStock = product.get('stock');
      product.set('stock', productStock - 1);
      // console.log(product.get('stock'));
      var productData = product._data;
      // this.cartItems.push(productData);
      console.log(this.cartItems);
      this.containThisItem(
        productData,
        (foundedItem) => foundedItem.count ++,
        () => this.cartItems.addObject(productData)
      );
    }
  },
  containThisItem: function(productData, yesCallback, notCallback){
    // let products = this.cartItems;

    if(this.cartItems.contains(productData)){
      let containedItem = this.cartItems.findBy('id', productData.id);
      yesCallback(containedItem);
    } else {
      // this.productData.set('count', 1);
      notCallback(this.cartItems);
    }
  }
});
