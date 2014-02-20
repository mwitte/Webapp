/**
 * The central application controller
 *
 * @namespace Webster
 * @class ApplicationController
 * @extends Ember.ArrayController
 */
Webster.ApplicationController = Ember.ArrayController.extend({

    updateCurrentPath: function() {
        Webster.set('currentPath', this.get('currentPath'));
    }.observes('currentPath'),

    actions: {
    }
});