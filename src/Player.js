var path = require('path');
var Tone = require('tone');
var Notes = require('./notes');

function Player() {
  this.buffers = {};
  this.player = null;
};

Player.prototype.make = function() {
  this.makeBuffers();
  this.makePlayer();
};

Player.prototype.makeBuffers = function() {
  for (var i = 0, len = Notes.notes.length; i < len; i++) {
    var n = Notes.notes[i];
    this.buffers[n] = new Tone.Buffer(path.resolve(__dirname, '../piano-mp3/' + n + '.mp3'));
  }
};

Player.prototype.makePlayer = function() {
  this.player = new Tone.Player({
    retrigger: true,
  }).toMaster();
};

Player.prototype.playNote = function(note) {
  this.player.buffer = this.buffers[note];
  this.player.start();
};

module.exports = Player;
