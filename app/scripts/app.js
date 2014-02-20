/*global Ember */
var Webster = window.Webster = Ember.Application.create({
    /**
     * log transitions in console
     * @var boolean
     */
    LOG_TRANSITIONS: true
});

/**
 * Create the LocalProperties.js file to overwrite settings above
 */
require('scripts/LocalProperties');

require('scripts/Classes/*');
require('scripts/Objects/*');
require('scripts/Controllers/*');
require('scripts/Store');
require('scripts/Models/*');
require('scripts/Routes/*');
require('scripts/Components/*');
require('scripts/Views/*');
require('scripts/Router');


Array.prototype.chunk = function(chunkSize) {
    var array=this;
    return [].concat.apply([],
        array.map(function(elem,i) {
            return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
        })
    );
};