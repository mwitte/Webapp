/**
 * Index controller
 *
 * @namespace Webster
 * @class IndexController
 * @extends Ember.ArrayController
 */
Webster.IndexController = Ember.ArrayController.extend({


    productsBinding: 'Webster.Session.productCollection',

    productsGrid: function(){
        var rowSize = 4, chunks;
        var products = Webster.Session.get('productCollection');
        if(products){
            chunks = products.chunk(rowSize);
        }
        return chunks;

    }.property('Webster.Session.productCollection'),

    actions: {
    }
});