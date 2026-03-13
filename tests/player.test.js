import { PlayerSDK } from "../src/index.js";

const player = new PlayerSDK();

player.on("play", () => {
  console.log("Play event triggered");
});

player.load("video123");

player.play();

console.log("Test completed");
