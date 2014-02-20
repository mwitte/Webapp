Webster.IndexView = Ember.View.extend({
    didInsertElement: function() {
        Ember.run.scheduleOnce('afterRender', this, function(){
            Em.run.later(function () { Holder.run(); }, 200);
        });
    }
});