import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EplayENV.locationType
});

Router.map(function() {
  this.resource("videos", { path: "/" }, function() {
    this.route("new");
    this.route("edit", { path: "edit/:id" });
  });
});

export default Router;
