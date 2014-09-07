import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    var id = params.id;
    var selectedVideo = this.modelFor("videos")[id];
    return selectedVideo;
  },

  actions: {
    save: function() {
      this.transitionTo("videos");
    }
  }
});
