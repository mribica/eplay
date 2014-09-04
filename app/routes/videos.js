export default Em.Route.extend({
  model: function() {
    console.log("Videos route");
    return [
      Em.Object.create({id: 0, title: "Foo", videoId: "M7lc1UVf-VE"}),
      Em.Object.create({id: 1, title: "Bar", videoId: "M7lc1UVf-VE"})
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
