// SongQueue.js - Defines a backbone model (collection?) class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {

    this.on('add', function() {
      if (!this.at(1)) {
        this.playFirst(this.at(0));
      }
    }, this);

    this.on('ended', function() {
      this.remove(this.at(0));
      if (this.at(0)) {
        this.playFirst(this.at(0));
      }
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);

  },

  playFirst: function() {
    this.at(0).play();
    this.trigger('playFirst', this);
  },

});