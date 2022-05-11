import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const playingTime = (evt) => {
  localStorage.setItem(LOCALSTORAGE_KEY, evt.seconds);
  //   console.log(playingTime);
  console.log(evt);
};

player.on("timeupdate", throttle(playingTime, 1000));

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
localStorage.removeItem(LOCALSTORAGE_KEY);
