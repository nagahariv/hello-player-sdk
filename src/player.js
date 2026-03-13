class PlayerSDK {
  constructor(options = {}) {
    this.videoId = options.videoId || null;
    this.autoplay = options.autoplay || false;
    this.events = {};
  }

  load(videoId) {
    this.videoId = videoId;
    this.emit("loaded", videoId);
  }

  play() {
    console.log("Playing:", this.videoId);
    this.emit("play");
  }

  pause() {
    console.log("Paused");
    this.emit("pause");
  }

  on(event, callback) {
    this.events[event] = callback;
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event](data);
    }
  }
}

export default PlayerSDK;
