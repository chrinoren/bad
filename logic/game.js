document.addEventListener("DOMContentLoaded", function () {
  const moveButton = document.getElementById("moveButton");
  const gameButton = document.getElementById("gameButton");

  if (moveButton && gameButton) {
    gameButton.addEventListener("click", gameButtonHandler);
  }

  let clickCount = 0;

  function gameButtonHandler() {
    clickCount++;

    moveButtonHandler();

    if (clickCount === 1) {
      alert("Tu as cliqué une fois, encore deux fois ouvrir !");
    } else if (clickCount === 2) {
      alert("Plus qu'un clic, t'es presque là... vas-y !");
    } else if (clickCount === 3) {
      alert(" les information que vous verez sont priver et confidentielle !");
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  }

  function moveButtonHandler() {
    const button = document.getElementById("moveButton");
    const container = document.getElementById("game-container");

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const randomX = Math.random() * (containerWidth - buttonWidth);
    const randomY = Math.random() * (containerHeight - buttonHeight);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    button.style.transform = "scale(1.1)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 100);
  }
});
