// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      if (!this.at('1')) {
        this.playFirst(this.at('0'));
      }
    }, this);
    this.on('ended', function() {
      this.remove(this.at('0'));
    }, this);
  },

  playFirst: function() {
    
  },

});