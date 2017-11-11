import path from 'path';
import React, { Component } from 'react';
import Tone from 'tone';

import { notes } from '../../src/notes';

class App extends Component {
  constructor(props) {
    super(props);
    this.buffers = {};
    notes.forEach((n) => {
      this.buffers[n] = new Tone.Buffer(`../piano-mp3/${n}.mp3`);
    });

    this.player = new Tone.Player({
      retrigger: true,
    }).toMaster();
  }

  onClick(note) {
    this.player.buffer = this.buffers[note];
    this.player.start();
  }

  render() {
    return (
      <div>
        {notes.map((n) => (
          <button key={n} onClick={() => this.onClick(n)}>
            {n}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
