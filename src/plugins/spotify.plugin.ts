import { SpotterPlugin, SpotterApi, SpotterOption } from '@spotter-app/core';

export default class Spotify implements SpotterPlugin {

  constructor(private api: SpotterApi) {}

  query(query: string): SpotterOption[] {
    return this.options.filter(o => o.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  }

  private get options(): SpotterOption[] {
    return [
      {
        title: 'Previous',
        subtitle: 'Spotify Previous track',
        image: '',
        shortKey: 'SP',
        action: () => this.previous(),
      },
      {
        title: 'Next',
        subtitle: 'Spotify Next track',
        image: '',
        shortKey: 'SP',
        action: () => this.next(),
      },
      {
        title: 'Pause',
        subtitle: 'Spotify Pause',
        image: '',
        shortKey: 'SP',
        action: () => this.pause(),
      },
      {
        title: 'Play',
        subtitle: 'Spotify Play',
        image: '',
        shortKey: 'SP',
        action: () => this.play(),
      },
      {
        title: 'Mute',
        subtitle: 'Spotify Mute',
        image: '',
        shortKey: 'SP',
        action: () => this.mute(),
      },
      {
        title: 'Unmute',
        subtitle: 'Spotify Unmute',
        image: '',
        shortKey: 'SP',
        action: () => this.unmute(),
      },
      {
        title: 'Toggle play/pause',
        subtitle: 'Spotify Toggle play/pause',
        image: '',
        shortKey: 'SP',
        action: () => this.togglePlayPause(),
      },
    ];
  } 

  private previous() {
    this.api.shellCommand("osascript -e 'tell application \"Spotify\" \n set player position to 0\n previous track\n end tell'")
  }

  private next() {
    this.api.shellCommand("osascript -e 'tell application \"Spotify\" to next track'")
  }

  private pause() {
    this.api.shellCommand("osascript -e 'tell application \"Spotify\" to pause'")
  }

  private play() {
    this.api.shellCommand("osascript -e 'tell application \"Spotify\" to play'")
  }

  private mute() {
    this.api.shellCommand("osascript -e 'tell application \"Spotify\" to set sound volume to 0'")
  }

  private unmute() {
    this.api.shellCommand("osascript -e 'tell application \"Spotify\" to set sound volume to 100'")
  }

  private togglePlayPause() {
    this.api.shellCommand("osascript -e 'tell application \"Spotify\" to playpause'")
  }
}