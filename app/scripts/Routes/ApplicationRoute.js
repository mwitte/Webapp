/**
 * Central application route
 *
 * @namespace Webster
 * @class ApplicationRoute
 * @extends Ember.Route
 */
Webster.ApplicationRoute = Ember.Route.extend({

    /**
     * Connect to the server
     *
     * @method setupController
     */
    setupController: function() {
        // @todo should be moved anywhere else with configurable host and path
        Webster.Socket.connect('127.0.0.1:8589', 'webstershop/socket');
    }
});
