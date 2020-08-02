document.addEventListener("DOMContentLoaded", () => {
  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow =
    new Date("Aug 27, 2020 23:59:59").getTime() / 1000 + 86400;

  // Set up FlipDown
  // eslint-disable-next-line no-undef
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log("The countdown has ended!");
    });

  // Toggle theme
  var interval = setInterval(() => {
    let body = document.body;
    // body.classList.toggle("light-theme");
    body.querySelector("#flipdown").classList.toggle("flipdown__theme-dark");
    body.querySelector("#flipdown").classList.toggle("flipdown__theme-dark");

    // body.querySelector("#flipdown").classList.toggle("flipdown__theme-light");
  }, 5000);

  // Show version number
  var ver = document.getElementById("ver");
  ver.innerHTML = flipdown.version;
});
