const clickSound = new Audio("pda.mp3");
document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const sound = new Audio("pda.mp3");
      sound.play();
      setTimeout(() => {
        window.location.href = link.href;
      }, 1000);
    });
  });