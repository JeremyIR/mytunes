// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      this.playFirst(this.at('0'));
    }, this);
  },

  playFirst: function() {
    
  }

});