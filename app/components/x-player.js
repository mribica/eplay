import Ember from 'ember';

export default Em.Component.extend({
  renderVideoFrame: function() {
    new YT.Player('player', {
      width: 500,
      height: 300,
      videoId: this.get("videoId"),
      events: {
        'onReady': function(event) {
          event.target.playVideo();
        }
      }
    });
  },

  didInsertElement: function() { 
    this.renderVideoFrame();
  }
});
