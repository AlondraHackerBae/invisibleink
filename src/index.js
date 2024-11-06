function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Love is Love",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let poemElement = document.querySelector("#poem-generator");
poemElement.addEventListener("submit", generatePoem);
