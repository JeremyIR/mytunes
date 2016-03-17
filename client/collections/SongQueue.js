// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      if (!this.at(this.firstSongPosition + 1)) {
        this.playFirst(this.at(this.firstSongPosition));
      }
    }, this);
    this.on('ended', function() {
      this.remove(this.at(this.firstSongPosition));
      this.firstSongPosition++;
      this.playFirst(this.at(this.firstSongPosition));
    }, this);
  },

  firstSongPosition: 0,

  playFirst: function() {
    
  },

});