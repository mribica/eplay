import Ember from "ember";

export default Em.Route.extend({
  model: function() {
    return Em.Object.create({title: "", videoId: "M7lc1UVf-VE"});
  },

  actions: {
    save: function() {
      var video = this.get("currentModel");

      var videosCount = this.modelFor("videos").get("length");
      video.set("id", videosCount);
      this.modelFor("videos").pushObject(video);

      this.transitionTo("videos");
    }
  }
});
