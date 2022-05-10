import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

const playingTime = (evt) => {
  localStorage.setItem("videoplayer-current-time", evt.seconds);
  //   console.log(playingTime);
  console.log(evt);
};

player.on("timeupdate", throttle(playingTime, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
