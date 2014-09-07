import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    console.log("Videos route");
    return [
      Ember.Object.create({id: 0, title: "Nyan Cat 10 hours (original)", videoId: "wZZ7oFKsKzY"}),
      Ember.Object.create({id: 1, title: "Steve Ballmer: Developers", videoId: "Vhh_GeBPOhs"}),
      Ember.Object.create({id: 2, title: "NEST71's Hackthon 4 Startups", videoId: "5NsDI15lHBk"}),
      Ember.Object.create({id: 3, title: "Building an App with Ember.js", videoId: "Ga99hMi7wfY"})
    ]; 
  },

  actions: {
    play: function(id) {
      var selected = this.get("currentModel")[id];
      this.render("player", { outlet: "player", controller: selected});
    },

    delete: function(id) {
      var selectedVideo = this.get("currentModel")[id];
      this.get("currentModel").removeObject(selectedVideo);
    }
  }
});
