const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");
console.log(textElement, optionButtonsElement);

let state = {};

function startGame() {
  alert("game started")
  state = {lives: 3};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach(option => {
      if (showOption(option)) {
          const button = document.createElement('button')
          button.innerText = option.text
      }
  });
}

function showOption(){
    return true
}

function selectOption(option) {

}

const textNodes = [
  {
    id: 1,
    text: "Huh, you're not responding much today, what's up",
    options: [
      {
        text: "this",
        setState: { lives: 2 },
        nextText: 2,
      },
      {
        text: "that",
        nextText: 2,
      },
    ],
  },

  {
    id: 2,
    text: "hello???",
  },
];