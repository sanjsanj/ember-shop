import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  image: DS.attr('string'),
  price: DS.attr('number'),
  stock: DS.attr('number')
}).reopenClass({
  FIXTURES: [
      {
        id: 1,
        name: 'Almond Toe Court Shoes, Patent Black',
        category: 'Women\'s Footwear',
        image: '',
        price: 99.00,
        stock: 5
      },
      {
        id: 2,
        name: 'Suede Shoes, Blue',
        category: 'Women\'s Footwear',
        image: '',
        price: 42.00,
        stock: 4
      },
      {
        id: 3,
        name: 'Leather Driver Saddle Loafers, Tan',
        category: 'Men\'s Footwear',
        image: '',
        price: 34.00,
        stock: 12
      },
      {
        id: 4,
        name: 'Flip Flops, Red',
        category: 'Men\'s Footwear',
        image: '',
        price: 19.00,
        stock: 6
      },
      {
        id: 5,
        name: 'Flip Flops, Blue',
        category: 'Men\'s Footwear',
        image: '',
        price: 19.00,
        stock: 0
      },
      {
        id: 6,
        name: 'Gold Button Cardigan, Black',
        category: 'Women\'s Casualwear',
        image: '',
        price: 167.00,
        stock: 6
      },
      {
        id: 7,
        name: 'Cotton Shorts, Medium Red',
        category: 'Women\'s Casualwear',
        image: '',
        price: 30.00,
        stock: 5
      },
      {
        id: 8,
        name: 'Fine Stripe Short Sleeve Shirt, Grey',
        category: 'Men\'s Casualwear',
        image: '',
        price: 49.99,
        stock: 9
      },
      {
        id: 9,
        name: 'Fine Stripe Short Sleeve Shirt, Green',
        category: 'Men\'s Casualwear',
        image: '',
        price: 39.99,
        stock: 3
      },
      {
        id: 10,
        name: 'Sharkskin Waistcoat, Charcoal',
        category: 'Men\'s Formalwear',
        image: '',
        price: 75.00,
        stock: 2
      },
      {
        id: 11,
        name: 'Lightweight Patch Pocket Blazer, Deer',
        category: 'Men\'s Formalwear',
        image: '',
        price: 175.00,
        stock: 1
      },
      {
        id: 12,
        name: 'Bird Print Dress, Black',
        category: 'Women\'s Formalwear',
        image: '',
        price: 270.00,
        stock: 10
      },
      {
        id: 13,
        name: 'Mid Twist Cut-Out Dress, Pink',
        category: 'Women\'s Formalwear',
        image: '',
        price: 540.00,
        stock: 5
      }
  ]
});
