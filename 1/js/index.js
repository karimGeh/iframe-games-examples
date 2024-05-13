// buttons
const refreshPlayerInfo = document.getElementById("refreshPlayerInfo");
const refreshScore = document.getElementById("refreshScore");
const saveScore = document.getElementById("saveScore");
const refreshState = document.getElementById("refreshState");
const saveState = document.getElementById("saveState");

// divs
const userInfo = document.getElementById("userInfo");

// inputs
const score_input = document.getElementById("score");
const state_input = document.getElementById("state");

console.log("GBLP_CLIENT", GBLP_CLIENT);

refreshPlayerInfo.addEventListener("click", function () {
  GBLP_CLIENT.player.getPlayerInfo().then((playerInfo) => {
    console.log("Player info:", playerInfo);
    userInfo.innerHTML = playerInfo;
  });
});

refreshScore.addEventListener("click", function () {
  GBLP_CLIENT.score.getPlayerScore().then((score) => {
    console.log("Score:", score);
    score_input.value = score;
  });
});

saveScore.addEventListener("click", function () {
  GBLP_CLIENT.score.savePlayerScore(score_input.value).then(() => {
    console.log("Score saved");
  });
});

refreshState.addEventListener("click", function () {
  GBLP_CLIENT.state.getPlayerState().then((state) => {
    console.log("State:", state);
    state_input.value = state;
  });
});

saveState.addEventListener("click", function () {
  GBLP_CLIENT.state.savePlayerState(state_input.value).then(() => {
    console.log("State saved");
  });
});
