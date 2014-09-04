import Ember from "ember";

export default Em.Route.extend({
  model: function(params) {
    var id = params.id;
    var selectedVideo = this.modelFor("videos")[id];
    return selectedVideo;
  },

  actions: {
    submit: function() {
    }
  }
})
