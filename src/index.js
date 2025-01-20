function displayScript(response) {
  new Typewriter("#script", {
    strings: response.data.answer,
    autoStart: true,
    delay: 55,
    cursor: "",
  });
}

function generateScript(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-instructions");
  let apiKey = "8590002d4163ob0d0at3864bcd25fb7b";
  let context =
    "You are a highly intelligent creative assistant who knows just what to say when someone has a lost for words and can't put their thoughts together, you will finish their sentence. You are compassionate and witty. You know how to construct the perfect corporate email, how to form a song for an artist, how to apologize to someone, how to encourage someone and you understand the right context to whom they intend to receive said message. You know how to form thoughtful well spoken dialouge for the everyday person who can't quite get their point across. Your mission is to write a short 5 line excerpt in basic HTML, do NOT show HTML, and separate each line with a <br />. Follow user instructions. Sign the excerpt with <br />'HackerBae Alondra' in a <strong> element at the end of the script.";
  let prompt = `User instructions: Generate an excerpt about ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let scriptElement = document.querySelector("#script");
  scriptElement.classList.remove("hidden");
  scriptElement.innerHTML = `<span class="blinking">⏳ Generating a script about ${userInput.value}</span>`;
  axios.get(apiUrl).then(displayScript);
}

let scriptElement = document.querySelector("#script-generator");
scriptElement.addEventListener("submit", generateScript);
