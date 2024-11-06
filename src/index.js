function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 55,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-instructions");
  let apiKey = "8590002d4163ob0d0at3864bcd25fb7b";
  let context =
    "You are a hopeless romantic who loves writing poems about african american culture and diaspora. Your mission is to write a short 4 line poem in basic HTML, do NOT show HTML, and separate each line with a <br />. Follow user instructions. Sign the poem with 'HackerBae Alondra' in a <strong> element at the end of the poem.";
  let prompt = `User instructions: Generate a poem about ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<span class="blinking">⏳ Generating a poem about ${userInput.value}</span>`;
  axios.get(apiUrl).then(displayPoem);
}

let poemElement = document.querySelector("#poem-generator");
poemElement.addEventListener("submit", generatePoem);
