// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  backgroundAudio=document.getElementById("bgAudio");
  backgroundAudio.volume=0.5;
});
